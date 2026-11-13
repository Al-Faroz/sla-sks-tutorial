const $ = selector => document.querySelector(selector);
const pathFor = file => 'assets/screenshots/' + file;
const progressKey = 'sla-tutorial-read-v1';

let role = 'guru';
let index = 0;
let completed = {};
let zoomPercent = 100;

try {
  const saved = JSON.parse(localStorage.getItem(progressKey) || '{}');
  if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
    completed = saved;
  }
} catch {
  // The guide works even when the browser blocks local storage.
}

const entities = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
const esc = value => String(value).replace(/[&<>"']/g, char => entities[char]);
const topicKey = () => role + '/' + database[role][index].id;
const plain = text => text.replace(/<[^>]*>/g, ' ');

function renderNav() {
  const topics = database[role];
  const query = $('#search').value.trim().toLocaleLowerCase('id');
  const matching = topics.map((topic, position) => ({topic, position})).filter(({topic}) => {
    const keywords = [topic.title, topic.desc, topic.group, ...topic.steps.map(step => step.title + ' ' + step.text)];
    return plain(keywords.join(' ')).toLocaleLowerCase('id').includes(query);
  });

  let previousGroup;
  $('#nav').innerHTML = matching.map(({topic, position}) => {
    const heading = topic.group === previousGroup ? '' : '<div class="nav-title">' + esc(topic.group) + '</div>';
    previousGroup = topic.group;
    const selected = position === index;
    const read = completed[role + '/' + topic.id] ? '<span class="check" aria-label="Sudah dibaca">✓</span>' : '';
    return heading + `<button class="nav-item ${selected ? 'active' : ''}" data-index="${position}" ${selected ? 'aria-current="page"' : ''}>
      <span class="num">${String(position + 1).padStart(2, '0')}</span><span>${esc(topic.title)}</span>${read}
    </button>`;
  }).join('') || '<p class="no-results">Topik belum ditemukan.</p><button class="empty-search-actions" id="clear-search">Hapus pencarian</button>';

  $('#search-count').textContent = query ? matching.length + ' topik ditemukan' : topics.length + ' topik panduan';
  const count = topics.filter(topic => completed[role + '/' + topic.id]).length;
  $('#progress').innerHTML = `${count} dari ${topics.length} topik selesai dibaca<div class="bar"><span style="width:${count / topics.length * 100}%"></span></div>`;
  document.querySelectorAll('[data-index]').forEach(button => {
    button.onclick = () => openTopic(Number(button.dataset.index));
  });
  const clear = $('#clear-search');
  if (clear) clear.onclick = () => {
    $('#search').value = '';
    renderNav();
    $('#search').focus();
  };
}

function figure(im) {
  return `<figure class="figure">
    <div class="figure-top"><span></span><span>Perbesar ↗</span></div>
    <button class="image-open" data-image="${esc(im.file)}" aria-label="Perbesar: ${esc(im.caption)}"><img loading="lazy" decoding="async" src="${pathFor(im.file)}" alt="${esc(im.caption)}">${im.pins.map(p=>`<span class="pin" aria-hidden="true" style="left:${p[0]}%;top:${p[1]}%">${esc(p[2])}</span>`).join('')}</button>${im.pins.length?`<div class="pin-legend">${im.pins.map(p=>`<span><b>${esc(p[2])}</b> ${esc(p[3])}</span>`).join('')}</div>`:''}<figcaption>${esc(im.caption)}</figcaption></figure>`}
function renderTable(tb) {
  return `<div class="table-wrap"><table class="reference-table"><thead><tr>${tb.headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')}</tr></thead><tbody>${tb.rows.map(row=>'<tr>'+row.map(cell=>'<td>'+esc(cell)+'</td>').join('')+'</tr>').join('')}</tbody></table></div>`}
function flow() {
  return `<div class="flow" role="img" aria-label="Diagnostik: lulus boleh melewati Materi, Resume, dan HOTS; tidak lulus wajib Materi, Resume, dan HOTS. Kedua jalur wajib Sumatif.">
    <div class="flow-start">TP NonEsensial → Diagnostik</div>
    <div class="flow-branches">
    <div class="flow-branch"><b>Memenuhi KKM ↓</b>
    <p>Materi, Resume, HOTS<br>boleh dilewati</p></div>
    <div class="flow-branch"><b>Belum memenuhi KKM ↓</b>
    <p>Materi → Resume → HOTS<br>wajib diselesaikan</p></div></div>
    <div class="flow-end">Kedua jalur → Sumatif wajib</div></div>`}
function render() {
  const t = database[role][index];
  const r = role === 'guru' ? 'Guru' : 'Siswa';
  const images = t.steps.flatMap(step => step.images);
  $('#teacher').classList.toggle('active',role==='guru');
  $('#student').classList.toggle('active',role==='siswa');
  $('#teacher').setAttribute('aria-pressed',String(role==='guru'));
  $('#student').setAttribute('aria-pressed',String(role==='siswa'));
  $('#main').innerHTML=`<div class="crumb">Pusat Panduan &nbsp; / &nbsp; ${r} &nbsp; / &nbsp; <span>${esc(t.group)}</span></div>
    <div class="intro">
    <div class="intro-head">
    <div>
    <div class="eyebrow">PANDUAN ${r.toUpperCase()} &nbsp; · &nbsp; ${String(index+1).padStart(2,'0')} / ${database[role].length}</div>
    <h1>${esc(t.title)}</h1>
    <p class="lead">${esc(t.desc)}</p></div>
    <button class="print" id="print">Cetak topik ↗</button></div>
    <div class="meta"><span>${t.steps.length} langkah</span><span>${images.length?images.length+' screenshot asli':'Panduan tertulis'}</span></div></div>
    <div class="article-grid">
    <article>
    <section id="persiapan">
    <div class="section-kicker">SEBELUM MEMULAI</div>
    <div class="prep"><span class="prep-symbol" aria-hidden="true">✓</span>
    <div><strong>Yang perlu disiapkan</strong>
    <p>${t.prep}</p></div></div></section>${t.important?`<div class="notice"><b>Perhatikan:</b> ${t.important}</div>`:''}${t.flow?flow():''}<section id="langkah">
    <h2>Langkah penggunaan</h2>
    <ol class="steps">${t.steps.map(st=>`<li>
    <h3>${esc(st.title)}</h3>
    <p>${st.text}</p>${st.images.map(figure).join('')}</li>`).join('')}</ol></section>${t.table?`<section id="rujukan">
    <h2>Ringkasan yang perlu diingat</h2>${renderTable(t.table)}</section>`:''}${t.example?`<div class="example">${t.example}</div>`:''}<section id="hasil">
    <div class="section-kicker">HASIL YANG DIHARAPKAN</div>
    <div class="expected"><strong>✓</strong> ${esc(t.result)}</div></section>${t.faq?`<section id="kendala" class="trouble">
    <h2>Jika mengalami kendala</h2>${t.faq.map(f=>`<details><summary>${esc(f[0])}</summary>
    <p>${esc(f[1])}</p></details>`).join('')}</section>`:''}${t.coverage?`<p class="coverage"><b>Cakupan visual:</b> ${esc(t.coverage)}</p>`:''}<label class="done"><input type="checkbox" id="done" ${completed[topicKey()]?'checked':''}> Saya sudah membaca topik ini</label>
    <nav class="pager" aria-label="Navigasi antar topik">
    <button id="prev" ${index===0?'disabled':''}><small>← SEBELUMNYA</small>${index>0?esc(database[role][index-1].title):'Awal panduan'}</button>
    <button id="next" ${index===database[role].length-1?'disabled':''}><small>BERIKUTNYA →</small>${index<database[role].length-1?esc(database[role][index+1].title):'Akhir panduan'}</button></nav>
    <details class="about"><summary>Tentang panduan &amp; screenshot</summary>
    <p>Panduan disusun 13 November 2026 berdasarkan dokumen resmi SLA-SKS v2.5 dan screenshot aplikasi tanggal 9 November 2026. Sebagian gambar dipotong untuk memperjelas kontrol. Identitas akun dan teks soal ujian disamarkan. Ikuti jadwal dan data yang tampil di akun Anda. Bagian tanpa tangkapan asli dijelaskan tertulis dan ditandai pada cakupan visual.</p>
    <p>Penanda selesai hanya menyimpan progres membaca pada browser ini, bukan mengubah pembelajaran, nilai, atau status akun SLA-SKS. Cetak topik menggunakan fasilitas cetak browser; pilih Simpan sebagai PDF bila tersedia.</p></details></article>
    <nav class="toc" aria-label="Bagian pada topik ini">
    <div class="section-kicker">DI HALAMAN INI</div>
    <button data-scroll="persiapan">Persiapan</button>
    <button data-scroll="langkah">Langkah penggunaan</button>${t.table?'<button data-scroll="rujukan">Ringkasan</button>':''}<button data-scroll="hasil">Hasil yang diharapkan</button>${t.faq?'<button data-scroll="kendala">Jika ada kendala</button>':''}</nav></div>
    <footer><span>SLA–SKS · Sistem Layanan Akademik – Sistem Kredit Semester</span><span>@LemahTeles | 2026</span></footer>`;
  $('#print').onclick=async()=>{const b=$('#print');b.textContent='Menyiapkan gambar…';const imgs=[...document.querySelectorAll('article img')];imgs.forEach(im=>im.loading='eager');await Promise.all(imgs.map(im=>im.decode().catch(()=>{})));b.textContent='Cetak topik ↗';window.print()};
  $('#prev').onclick=()=>openTopic(index-1);
  $('#next').onclick=()=>openTopic(index+1);
  $('#done').onchange=e=>{completed[topicKey()]=e.target.checked;try{localStorage.setItem(progressKey,JSON.stringify(completed))}catch{}renderNav()};
  document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scroll).scrollIntoView({behavior:'smooth'}));
  document.querySelectorAll('[data-image]').forEach(b=>b.onclick=()=>showImage(images.find(im=>im.file===b.dataset.image)));
  renderNav();
  document.title = t.title + ' · Panduan ' + r + ' · SLA-SKS';
}

function setMenu(open) {
  $('#sidebar').classList.toggle('open', open);
  $('#mobile').setAttribute('aria-expanded', String(open));
  $('#mobile').setAttribute('aria-label', open ? 'Tutup daftar isi' : 'Buka daftar isi');
}

function openTopic(position, update = true) {
  index = Math.max(0, Math.min(position, database[role].length - 1));
  render();
  setMenu(false);
  if (!update) return;

  const hash = '#' + topicKey();
  if (location.hash !== hash) history.pushState(null, '', hash);
  window.scrollTo({top: 0, behavior: 'instant'});
  $('#main').focus({preventScroll: true});
}

function switchRole(nextRole) {
  role = nextRole;
  $('#search').value = '';
  openTopic(0);
}

function fromHash() {
  const match = location.hash.match(/^#(guru|siswa)\/([^/]+)$/);
  const nextRole = match?.[1] ?? 'guru';
  if (nextRole !== role) $('#search').value = '';
  role = nextRole;
  const position = match ? database[role].findIndex(topic => topic.id === match[2]) : 0;
  openTopic(position, false);
}

function showImage(figure) {
  if (!figure) return;
  const large = $('#large');
  large.src = pathFor(figure.file);
  large.alt = figure.caption;
  large.style.width = '';
  $('#caption').textContent = figure.caption;
  fitImage();
  $('#lightbox').showModal();
}

function fitImage() {
  $('#lightbox').classList.add('zoom-fit');
  $('#zoom').textContent = 'Ukuran asli';
  zoomPercent = 100;
}

function applyZoom(delta) {
  const large = $('#large');
  $('#lightbox').classList.remove('zoom-fit');
  zoomPercent = Math.max(40, Math.min(200, zoomPercent + delta));
  large.style.width = Math.round((large.naturalWidth || 1363) * zoomPercent / 100) + 'px';
  $('#zoom').textContent = zoomPercent + '% · Sesuaikan';
}

$('#teacher').onclick = () => switchRole('guru');
$('#student').onclick = () => switchRole('siswa');
$('#search').oninput = renderNav;
$('#mobile').onclick = () => setMenu(!$('#sidebar').classList.contains('open'));

document.addEventListener('click', event => {
  if (innerWidth <= 760 && !event.target.closest('#sidebar, #mobile')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && $('#sidebar').classList.contains('open')) {
    setMenu(false);
    $('#mobile').focus();
  }
});

$('#close').onclick = () => $('#lightbox').close();
$('#zoom').onclick = () => $('#lightbox').classList.contains('zoom-fit') ? applyZoom(0) : fitImage();
$('#plus').onclick = () => applyZoom(25);
$('#minus').onclick = () => applyZoom(-25);
$('#lightbox').onclick = event => {
  if (event.target === $('#lightbox')) $('#lightbox').close();
};
$('#brand').onclick = event => {
  event.preventDefault();
  switchRole('guru');
};
$('#to-top').onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
window.addEventListener('scroll', () => {
  $('#to-top').hidden = window.scrollY < 500;
}, {passive: true});
window.addEventListener('hashchange', fromHash);
fromHash();
