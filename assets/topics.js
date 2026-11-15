const database = {
  "guru": [
    {
      "id": "beranda",
      "group": "Mulai di sini",
      "title": "Masuk & kenali Beranda Guru",
      "desc": "Masuk ke SLA-SKS, lalu pilih Gen–Mapel dan semester yang ingin dipantau.",
      "prep": "Siapkan NIP atau NIK yang terdaftar di madrasah.",
      "steps": [
        {
          "title": "Buka halaman Masuk",
          "text": "Buka <a href=\"https://sla-sks.mtsn4jombang.sch.id/masuk\">halaman Masuk SLA-SKS</a> di browser.",
          "images": []
        },
        {
          "title": "Isi Username dan Kata Sandi",
          "text": "Pada kolom <b>Username / NISN</b>, masukkan <b>NIP atau NIK yang terdaftar di madrasah</b>. Saat pertama kali masuk, isi kolom <b>Kata Sandi</b> dengan <b>NIP atau NIK yang sama</b>. Jika sandi sudah diganti, gunakan sandi terbaru.",
          "images": []
        },
        {
          "title": "Klik Masuk dan periksa Beranda Guru",
          "text": "Klik <b>Masuk</b>. Setelah Beranda terbuka, periksa nama akun dan pastikan penanda peran menunjukkan <b>Guru</b>. Untuk mengganti sandi awal, buka <b>Profil &amp; peran</b>.",
          "images": []
        },
        {
          "title": "Pilih Gen–Mapel dan semester",
          "text": "Pada <b>Filter Ringkasan Guru</b>, pilih penugasan dan semester yang ingin dipantau. Gunakan tombol pada filter untuk memperbarui ringkasan.",
          "images": [
            {
              "file": "GURU-01-Beranda-01.webp",
              "caption": "Beranda Guru: filter penugasan, ringkasan, dan tautan pekerjaan.",
              "pins": []
            }
          ]
        },
        {
          "title": "Baca ringkasan pekerjaan",
          "text": "Periksa TP Siap, TP Draf, Materi aktif, serta antrean Resume/HOTS. Angka pada contoh adalah data saat screenshot diambil, bukan target yang harus sama pada akun Anda.",
          "images": [
            {
              "file": "GURU-01-Beranda-02.webp",
              "caption": "Lanjutan Beranda: antrean dan ringkasan per semester.",
              "pins": []
            }
          ]
        },
        {
          "title": "Gunakan sidebar untuk berpindah",
          "text": "Buka <b>Peta ATP</b> untuk menyiapkan pembelajaran, <b>Antrean Penilaian</b> untuk menilai tugas, <b>Pra-Semester</b> untuk bank ujian, dan <b>Rekap Nilai</b> untuk hasil. Tombol di dekat logo membuka atau meringkas sidebar.",
          "images": [
            {
              "file": "GURU-45-Navigasi-Terbuka-01.webp",
              "caption": "Sidebar Guru dalam keadaan terbuka.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Anda sudah berada pada penugasan dan semester yang sesuai.",
      "faq": [
        [
          "Gagal masuk",
          "Periksa kembali nomor yang terdaftar dan kata sandi. Jika tetap gagal, hubungi Admin madrasah."
        ],
        [
          "Gen–Mapel tidak tersedia",
          "Minta Admin memeriksa penugasan Guru aktif pada Gen dan mata pelajaran terkait."
        ],
        [
          "Mengapa angka berbeda dari contoh?",
          "Ringkasan mengikuti data dan status pembelajaran akun Anda."
        ]
      ]
    },
    {
      "id": "peta-atp",
      "group": "Perencanaan ATP",
      "title": "Peta ATP enam semester",
      "desc": "Periksa susunan paket, BAB, dan TP sebelum memilih pengisian langsung atau impor Excel.",
      "prep": "Pastikan penugasan Gen–Mapel dan CP yang digunakan sudah benar.",
      "steps": [
        {
          "title": "Buka Peta ATP",
          "text": "Klik <b>Peta ATP</b> pada sidebar. Pilih penugasan Gen–Mapel, lalu tampilkan datanya.",
          "images": [
            {
              "file": "GURU-03-Peta-ATP-01.webp",
              "caption": "Peta ATP: konteks penugasan dan pintu masuk Kelola ATP Excel.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa enam kartu semester",
          "text": "Gulir ke kartu Semester 1–6. Baca status paket serta jumlah BAB dan TP. Guru dapat menyiapkan enam semester meskipun siswa mulai belajar pada semester tertentu.",
          "images": [
            {
              "file": "GURU-03-Peta-ATP-02.webp",
              "caption": "Enam semester ditampilkan menurut kelas VII, VIII, dan IX.",
              "pins": []
            }
          ]
        },
        {
          "title": "Pilih cara menyusun ATP",
          "text": "Untuk semester kosong, gunakan <b>Kelola ATP Excel</b> atau buat BAB/TP langsung dari halaman semester. Untuk semester yang sudah berisi BAB/TP, gunakan editor aplikasi untuk perubahan.",
          "images": []
        },
        {
          "title": "Buka semester tujuan",
          "text": "Klik semester yang ingin diperiksa. Pastikan judul semester dan Gen–Mapel sudah sesuai sebelum menyunting.",
          "images": [
            {
              "file": "GURU-05-Semester-4-01.webp",
              "caption": "Contoh halaman Semester 4 dengan daftar BAB dan TP.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Kondisi tiap semester diketahui dan jalur pengisian ATP sudah dipilih.",
      "important": "Excel digunakan untuk penyusunan awal semester kosong. Impor tidak dipakai untuk menimpa BAB/TP, materi, atau progres yang sudah tersimpan."
    },
    {
      "id": "template-atp",
      "group": "Perencanaan ATP",
      "title": "Unduh template ATP Excel",
      "desc": "Gunakan template resmi V25-3 yang sesuai dengan penugasan Guru.",
      "prep": "Buka Peta ATP pada Gen–Mapel yang akan disusun.",
      "steps": [
        {
          "title": "Buka Kelola ATP Excel",
          "text": "Dari Peta ATP, klik <b>Kelola ATP Excel</b>. Pada bagian pertama, pilih <b>Gen–Mapel</b> dan klik <b>Tampilkan</b>.",
          "images": [
            {
              "file": "GURU-04-Impor-ATP-01.webp",
              "caption": "Pilih penugasan dan baca kesiapan paket enam semester.",
              "pins": []
            }
          ]
        },
        {
          "title": "Baca kesiapan enam semester",
          "text": "Periksa kolom Status. <b>Sudah diisi — impor terkunci</b> berarti perubahan semester itu harus dilakukan melalui aplikasi. Jika paket belum ada, kembali ke Peta ATP untuk penyiapan paket sesuai fitur yang tersedia.",
          "images": []
        },
        {
          "title": "Pilih paket acuan dan unduh",
          "text": "Pada bagian <b>Unduh dan pratinjau ATP</b>, pilih <b>Paket acuan / Kurikulum</b>, klik <b>Pilih paket</b>, lalu <b>Unduh Template ATP V25-3 · 6 Semester</b>.",
          "images": [
            {
              "file": "atp-unduh.webp",
              "caption": "Pilih paket acuan, lalu unduh Template ATP V25-3.",
              "pins": [
                [
                  83,
                  59,
                  "1",
                  "Pilih paket"
                ],
                [
                  16,
                  84,
                  "2",
                  "Unduh template"
                ]
              ]
            }
          ]
        },
        {
          "title": "Buka dan periksa workbook",
          "text": "Baca sheet <b>MULAI DI SINI</b>, <b>RINGKASAN</b>, dan <b>REFERENSI CP</b>. Isi sheet SEMESTER 1–6. Sheet <b>CONTOH MAT VII</b> hanya ilustrasi dan tidak diimpor.",
          "images": []
        }
      ],
      "result": "Workbook V25-3 tersedia untuk diisi pada komputer Anda.",
      "table": {
        "headers": [
          "Sheet",
          "Kegunaan"
        ],
        "rows": [
          [
            "MULAI DI SINI",
            "Petunjuk pengisian dan batas format."
          ],
          [
            "RINGKASAN",
            "Identitas konteks unduhan. Jangan mengganti penugasan secara manual."
          ],
          [
            "REFERENSI CP",
            "Acuan CP dari aplikasi; bukan tempat menyunting CP."
          ],
          [
            "SEMESTER 1–6",
            "Isian BAB dan TP pada semester masing-masing."
          ],
          [
            "CONTOH MAT VII",
            "Contoh pengisian; bukan data yang akan disimpan."
          ]
        ]
      }
    },
    {
      "id": "isi-excel",
      "group": "Perencanaan ATP",
      "title": "Isi BAB & TP di Excel",
      "desc": "Isi struktur akademik tanpa mengubah format, dropdown, atau rumus template.",
      "prep": "Gunakan template V25-3 yang baru diunduh dari aplikasi.",
      "steps": [
        {
          "title": "Isi daftar BAB terlebih dahulu",
          "text": "Di setiap sheet SEMESTER, isi tabel BAB pada <b>A13:C32</b>: Nomor BAB, Nama BAB, dan Deskripsi BAB. Nomor BAB semester genap melanjutkan semester ganjil pada kelas yang sama; kelas berikutnya memulai penomoran kembali.",
          "images": []
        },
        {
          "title": "Pilih BAB untuk setiap TP",
          "text": "Pada tabel TP <b>A39:H118</b>, pilih <b>Nomor BAB</b> melalui dropdown kolom A. Daftar pilihan berasal dari BAB yang sudah Anda isi pada sheet semester yang sama.",
          "images": []
        },
        {
          "title": "Biarkan Urutan TP terisi otomatis",
          "text": "Kolom B dihitung oleh rumus per BAB. Jangan mengetik, menghapus, atau menempel data di atas rumus tersebut. Kode TP dibuat aplikasi; Anda tidak perlu menambah kolom Kode TP.",
          "images": []
        },
        {
          "title": "Lengkapi jenis, nama, dan deskripsi TP",
          "text": "Pilih <b>Esensial</b> atau <b>NonEsensial</b>, kemudian isi nama dan deskripsi TP. Gunakan nama singkat dan rumusan yang jelas; ikuti batas karakter pada template/aplikasi.",
          "images": []
        },
        {
          "title": "Isi rencana satu materi untuk setiap TP",
          "text": "Isi judul satu materi dan pilih jenis media pada kolom F dan G. Kewajiban ini berlaku bagi <b>Esensial maupun NonEsensial</b>. Berkas media, URL, waktu belajar, dan tugas dilengkapi kemudian di aplikasi.",
          "images": []
        },
        {
          "title": "Periksa enam semester lalu simpan",
          "text": "Isi kolom <b>H (Catatan)</b> bila diperlukan. Cek lagi nomor BAB, jenis dan nama TP, judul dan jenis media, serta rumus kolom B. Simpan sebagai <b>.xlsx</b> dengan nama sheet dan susunan kolom asli.",
          "images": []
        }
      ],
      "result": "Berkas XLSX siap diperiksa melalui pratinjau impor.",
      "table": {
        "headers": [
          "Kolom TP",
          "Cara mengisi"
        ],
        "rows": [
          [
            "A · Nomor BAB",
            "Pilih dari dropdown BAB pada semester yang sama."
          ],
          [
            "B · Urutan TP",
            "Otomatis; jangan diubah."
          ],
          [
            "C · Jenis TP",
            "Pilih Esensial atau NonEsensial."
          ],
          [
            "D · Nama TP",
            "Nama singkat tujuan pembelajaran."
          ],
          [
            "E · Deskripsi TP",
            "Rumusan/deskripsi TP sesuai rencana."
          ],
          [
            "F · Judul satu Materi",
            "Wajib diisi untuk kedua jenis TP."
          ],
          [
            "G · Jenis media (rencana)",
            "Pilih jenis media yang akan disiapkan."
          ],
          [
            "H · Catatan",
            "Isi keterangan tambahan bila diperlukan."
          ]
        ]
      },
      "example": "<b>Contoh penomoran:</b> Semester 1 memiliki BAB 1–2, maka Semester 2 melanjutkan BAB 3. Semester 3 kembali mulai BAB 1 untuk kelas VIII. Dalam setiap BAB, urutan TP dimulai dari 1.",
      "coverage": "Panduan pengisian merujuk kontrak template V25-3. Arsip screenshot belum memuat tampilan Microsoft Excel.",
      "faq": [
        [
          "Dropdown BAB kosong",
          "Isi daftar BAB pada bagian atas sheet semester yang sama terlebih dahulu."
        ],
        [
          "Urutan TP hilang atau rumus tertimpa",
          "Gunakan kembali template resmi yang utuh dan salin hanya kolom input, bukan kolom B."
        ],
        [
          "Apakah media Esensial boleh dikosongkan?",
          "Tidak. Guru tetap menyiapkan satu materi untuk setiap TP. Jenis TP menentukan alur siswa."
        ]
      ]
    },
    {
      "id": "impor-atp",
      "group": "Perencanaan ATP",
      "title": "Pratinjau & konfirmasi impor ATP",
      "desc": "Periksa seluruh hasil validasi sebelum menyimpan susunan enam semester.",
      "prep": "Siapkan file .xlsx V25-3, maksimal 5 MB. Pastikan semester sasaran memiliki paket yang sah dan masih kosong.",
      "steps": [
        {
          "title": "Pilih berkas ATP",
          "text": "Buka <b>Peta ATP → Kelola ATP Excel</b>. Pilih Gen–Mapel dan paket acuan. Pada <b>File ATP resmi</b>, pilih workbook V25-3 berformat <b>.xlsx</b> dengan ukuran maksimal 5 MB.",
          "images": [
            {
              "file": "atp-unggah.webp",
              "caption": "Pilih workbook dan jalankan pemeriksaan Excel.",
              "pins": [
                [
                  8,
                  27,
                  "1",
                  "Pilih XLSX"
                ],
                [
                  12,
                  80,
                  "2",
                  "Periksa & Pratinjau Excel"
                ]
              ]
            }
          ]
        },
        {
          "title": "Jalankan pratinjau",
          "text": "Klik <b>Periksa & Pratinjau Excel</b>. Tahap ini memeriksa berkas; <b>belum menyimpan BAB dan TP</b>.",
          "images": []
        },
        {
          "title": "Periksa semester, baris, dan pesan validasi",
          "text": "Teliti BAB, TP, rencana materi, serta hasil setiap semester. Status <b>Tetap</b> berarti identik dengan data tersimpan, bukan data yang akan ditimpa. Jika ada Galat, perbaiki sel yang disebutkan dan unggah kembali.",
          "images": []
        },
        {
          "title": "Konfirmasi setelah semua data benar",
          "text": "Lanjutkan tombol konfirmasi penyimpanan yang tersedia pada hasil pratinjau sah. Bila data aplikasi berubah atau pratinjau kedaluwarsa, ulangi pratinjau sebelum mengonfirmasi.",
          "images": []
        },
        {
          "title": "Periksa hasil pada Peta ATP",
          "text": "Kembali ke semester sasaran. Cocokkan BAB/TP dan buka rincian TP untuk melengkapi media aktual, tugas, serta instrumen ujian.",
          "images": []
        }
      ],
      "result": "BAB/TP baru muncul pada semester sasaran; materi masih perlu dilengkapi sebelum TP siap digunakan.",
      "coverage": "Screenshot memperlihatkan halaman persiapan impor. Tampilan hasil pratinjau dan konfirmasi berhasil belum ada di arsip.",
      "important": "Satu galat membatalkan penyimpanan seluruh batch. Excel tidak mengunggah berkas media atau soal dan tidak menghapus baris historis.",
      "faq": [
        [
          "Semester sudah diisi atau impor terkunci",
          "Gunakan editor BAB/TP pada aplikasi. Jangan mencoba mengosongkan data atau progres agar impor terbuka."
        ],
        [
          "Urutan TP harus mulai 1 tanpa jeda",
          "Pastikan memilih BAB yang benar dan tidak mengubah rumus Urutan TP di kolom B."
        ],
        [
          "Gen siswa mulai Semester 4; boleh menyusun Semester 1–3?",
          "Guru boleh merencanakan Semester 1–6. Akses siswa tetap mengikuti semester mulai dan aturan pembelajaran."
        ]
      ]
    },
    {
      "id": "bab",
      "group": "Penyiapan pembelajaran",
      "title": "Tambah & sunting BAB",
      "desc": "Kelola nama dan deskripsi BAB dari halaman semester.",
      "prep": "Pilih Gen–Mapel dan semester yang benar.",
      "steps": [
        {
          "title": "Buka daftar BAB",
          "text": "Dari Peta ATP, buka semester tujuan. Periksa BAB yang sudah tersedia agar tidak membuat duplikasi.",
          "images": [
            {
              "file": "GURU-05-Semester-4-01.webp",
              "caption": "Daftar BAB dan TP pada semester terpilih.",
              "pins": []
            }
          ]
        },
        {
          "title": "Tambahkan BAB",
          "text": "Klik <b>Tambah BAB</b>. Isi nama dan deskripsi sesuai formulir, lalu simpan. Penomoran mengikuti struktur semester.",
          "images": [
            {
              "file": "tambah-bab.webp",
              "caption": "Form Tambah BAB; contoh gambar belum disimpan.",
              "pins": []
            }
          ]
        },
        {
          "title": "Sunting BAB yang sudah ada",
          "text": "Gunakan aksi <b>Sunting</b> pada BAB yang sesuai. Perbaiki isian yang tersedia, lalu simpan dan periksa kembali daftar BAB.",
          "images": [
            {
              "file": "GURU-07-Sunting-BAB.webp",
              "caption": "Form Sunting BAB.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa susunan TP",
          "text": "Setelah BAB tersimpan, periksa TP yang berada di bawah BAB tersebut. Penyuntingan BAB bukan cara memindah TP antar-BAB atau mengatur ulang progres siswa.",
          "images": [
            {
              "file": "GURU-05-Semester-4-02.webp",
              "caption": "Lanjutan daftar BAB dan TP.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Nama dan deskripsi BAB tersimpan pada semester yang benar.",
      "important": "BAB dapat diperbaiki melalui isian yang tersedia. Jangan menghapus riwayat pembelajaran untuk keperluan merapikan struktur."
    },
    {
      "id": "tp",
      "group": "Penyiapan pembelajaran",
      "title": "Tambah & sunting TP",
      "desc": "Lengkapi identitas TP dan pahami kapan kontennya dapat diperbaiki.",
      "prep": "Pastikan BAB tujuan sudah tersedia.",
      "steps": [
        {
          "title": "Tambahkan TP pada BAB yang sesuai",
          "text": "Pada daftar semester, gunakan <b>Tambah TP</b> di BAB tujuan. Isi nama, deskripsi, dan jenis TP. Kode TP dibentuk otomatis oleh aplikasi.",
          "images": [
            {
              "file": "tambah-tp.webp",
              "caption": "Form Tambah TP pada BAB terpilih.",
              "pins": []
            }
          ]
        },
        {
          "title": "Buka rincian TP",
          "text": "Setelah disimpan sebagai Draf, buka rincian TP. Periksa identitas, rumusan, dan ringkasan langkah persiapan.",
          "images": [
            {
              "file": "GURU-16-TP-Draf-NonEsensial-01.webp",
              "caption": "Rincian TP NonEsensial berstatus Draf.",
              "pins": []
            }
          ]
        },
        {
          "title": "Simpan perbaikan identitas",
          "text": "Gunakan bagian identitas TP untuk memperbaiki judul, rumusan, atau jenis yang masih dapat disunting. Klik <b>Simpan data TP</b> dan pastikan perubahan tersimpan.",
          "images": []
        },
        {
          "title": "Periksa status penggunaan siswa",
          "text": "TP Draf dan TP Siap yang <b>belum digunakan siswa</b> boleh diperbaiki Guru pengampu. Setelah satu siswa memulai TP, konten TP terkunci.",
          "images": [
            {
              "file": "GURU-09-TP-Siap-Terkunci-01.webp",
              "caption": "Contoh TP Siap yang telah digunakan siswa; kontennya terkunci.",
              "pins": []
            },
            {
              "file": "GURU-09-TP-Siap-Terkunci-02.webp",
              "caption": "Lanjutan TP terkunci: materi dan bank soal.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Identitas TP benar dan status penyuntingannya dipahami.",
      "table": {
        "headers": [
          "Jenis TP",
          "Penyiapan Guru dan alur siswa"
        ],
        "rows": [
          [
            "Esensial",
            "Guru wajib menyiapkan satu materi/media. Pada alur saat ini siswa melihatnya sebagai informasi tanpa aktivitas/nilai LMS."
          ],
          [
            "NonEsensial",
            "Guru menyiapkan satu materi, petunjuk Resume/HOTS, serta bank Diagnostik dan Sumatif. Aktivitas siswa mengikuti hasil Diagnostik."
          ]
        ]
      },
      "important": "Status Siap saja tidak berarti terkunci. Bukti penggunaan siswa yang mengunci konten; jangan menghapus progres untuk membuka kunci."
    },
    {
      "id": "materi",
      "group": "Penyiapan pembelajaran",
      "title": "Siapkan satu materi & media",
      "desc": "Lengkapi media nyata dari rencana materi yang sudah dibuat pada TP.",
      "prep": "Siapkan berkas atau URL media, judul, dan waktu belajar. Pastikan TP masih boleh disunting.",
      "steps": [
        {
          "title": "Buka bagian Satu Materi TP",
          "text": "Dari rincian TP, gulir ke <b>2. Satu Materi TP</b>. Lengkapi record materi yang tersedia; satu TP menggunakan satu materi.",
          "images": [
            {
              "file": "GURU-16-TP-Draf-NonEsensial-02.webp",
              "caption": "Bagian Satu Materi pada rincian TP NonEsensial.",
              "pins": []
            }
          ]
        },
        {
          "title": "Pilih jenis media",
          "text": "Periksa <b>Judul Materi/Submateri</b> dan <b>Jenis media pembelajaran</b>. Gunakan YouTube, PDF, audio, atau gambar sesuai materi.",
          "images": []
        },
        {
          "title": "Lengkapi berkas atau URL",
          "text": "Untuk YouTube, masukkan URL video HTTPS yang benar. Untuk PDF/audio/gambar, pilih berkas pada <b>Upload file media</b>. PDF harus 6–40 halaman dan maksimal 15 MB.",
          "images": [
            {
              "file": "GURU-17-Editor-Materi-YouTube.webp",
              "caption": "Isian judul, jenis media, alamat YouTube, dan waktu belajar.",
              "pins": []
            },
            {
              "file": "GURU-23-Editor-Materi-PDF.webp",
              "caption": "Isian unggah PDF. Gambar ini menunjukkan formulir, bukan PDF berhasil dibuka.",
              "pins": [
                [
                  60,
                  67.5,
                  "1",
                  "Pilih jenis media"
                ],
                [
                  46,
                  78,
                  "2",
                  "Pilih berkas PDF"
                ]
              ]
            }
          ]
        },
        {
          "title": "Isi minimal waktu belajar",
          "text": "Masukkan angka dalam menit pada <b>Minimal waktu belajar</b>. Contoh 1.5 berarti satu setengah menit. Isi nilai yang sesuai kebutuhan pembelajaran, bukan membiarkan 0.00 sebagai contoh kosong.",
          "images": []
        },
        {
          "title": "Lengkapi tugas lalu simpan materi",
          "text": "Pada NonEsensial, lengkapi petunjuk Resume dan HOTS sebelum menyimpan. Gunakan tombol simpan pada bagian materi dan periksa bahwa pesan perubahan belum disimpan sudah hilang.",
          "images": []
        },
        {
          "title": "Uji media melalui pratinjau",
          "text": "Buka pratinjau yang disediakan. Pastikan media dapat dibaca/diputar. Jika PDF menampilkan Akses ditolak atau Missing PDF, periksa bersama Admin; jangan menganggap materi siap hanya karena nama file tampil.",
          "images": []
        }
      ],
      "result": "Satu materi berisi media yang dapat dibuka dan waktu belajar yang sesuai.",
      "table": {
        "headers": [
          "Media",
          "Yang disiapkan"
        ],
        "rows": [
          [
            "YouTube",
            "URL HTTPS video yang dapat dibuka. Tidak mengunggah video besar ke hosting."
          ],
          [
            "PDF",
            "File PDF 6–40 halaman; maksimal 15 MB."
          ],
          [
            "Audio",
            "File audio sesuai format dan batas pada formulir."
          ],
          [
            "Gambar",
            "File gambar sesuai format dan batas pada formulir."
          ]
        ]
      },
      "coverage": "Contoh visual tersedia untuk editor PDF dan YouTube. Arsip belum memuat editor audio/gambar atau pratinjau PDF yang berhasil.",
      "faq": [
        [
          "TP Esensial juga perlu media?",
          "Ya. Tetap satu materi/media lengkap. Petunjuk Resume/HOTS pada Esensial mengikuti status opsional yang ditampilkan formulir."
        ],
        [
          "Media tidak dapat diganti",
          "Periksa apakah TP sudah digunakan siswa. Konten yang terkunci tidak dibuka dengan menghapus progres."
        ]
      ]
    },
    {
      "id": "tugas",
      "group": "Penyiapan pembelajaran",
      "title": "Tulis petunjuk Resume & HOTS",
      "desc": "Berikan tugas yang jelas dan dapat dinilai setelah siswa mempelajari materi.",
      "prep": "Buka TP NonEsensial yang masih dapat disunting dan siapkan kriteria penilaian.",
      "steps": [
        {
          "title": "Buka kolom petunjuk tugas",
          "text": "Di bagian materi, temukan <b>Petunjuk Resume</b> dan <b>Petunjuk tugas HOTS</b>.",
          "images": [
            {
              "file": "GURU-16-TP-Draf-NonEsensial-03.webp",
              "caption": "Kolom petunjuk Resume/HOTS dan bagian akhir penyiapan TP.",
              "pins": []
            }
          ]
        },
        {
          "title": "Tulis tugas Resume yang spesifik",
          "text": "Sebutkan isi yang harus diringkas, cakupan, dan bentuk jawaban. Contoh: jelaskan tiga tokoh beserta bidang dan kontribusinya menggunakan bahasa sendiri.",
          "images": []
        },
        {
          "title": "Tulis tugas HOTS yang menuntut penalaran",
          "text": "Gunakan pertanyaan analisis, perbandingan, atau penerapan yang terkait materi. Jelaskan kebutuhan alasan atau contoh, bukan hanya menyebutkan istilah.",
          "images": []
        },
        {
          "title": "Simpan dan periksa kelengkapan",
          "text": "Simpan materi, lalu baca kembali petunjuk dari rincian TP. Tugas wajib untuk jalur siswa yang tidak lulus Diagnostik. Siswa yang lulus boleh melewati keduanya.",
          "images": []
        }
      ],
      "result": "Petunjuk tugas tersimpan dan sesuai isi materi.",
      "example": "<b>Contoh HOTS:</b> Mengapa penguasaan ilmu perlu disertai pengabdian kepada masyarakat? Jelaskan dengan alasan dan satu contoh tindakan pelajar.",
      "important": "Jangan menyamakan batas kata contoh tugas dengan batas sistem. Ketentuan jawaban mengikuti petunjuk Guru dan validasi yang tampil di formulir siswa."
    },
    {
      "id": "kkm",
      "group": "Soal & kesiapan TP",
      "title": "Atur KKM & periksa bank soal",
      "desc": "Gunakan satu KKM efektif untuk Diagnostik dan Sumatif pada TP yang sama.",
      "prep": "Buka TP NonEsensial yang belum digunakan siswa.",
      "steps": [
        {
          "title": "Buka Kelola Bank Soal",
          "text": "Dari rincian TP, buka <b>Kelola Bank Soal</b>. Periksa tab Diagnostik dan Sumatif serta ringkasan jumlah soal.",
          "images": [
            {
              "file": "GURU-13-Bank-Diagnostik-01.webp",
              "caption": "Halaman Bank Soal: dua tab ujian dalam satu halaman.",
              "pins": []
            }
          ]
        },
        {
          "title": "Baca KKM efektif",
          "text": "Di bagian <b>Pengaturan KKM TP</b>, lihat Default Admin, Khusus Guru, dan KKM efektif. Tanpa override, default Admin langsung berlaku.",
          "images": []
        },
        {
          "title": "Atur KKM khusus bila diperlukan",
          "text": "Isi angka KKM TP sesuai rentang formulir lalu simpan. Untuk kembali mengikuti default Admin, kosongkan isian khusus sesuai petunjuk formulir. Perubahan di satu tab berlaku pada kedua jenis ujian.",
          "images": [
            {
              "file": "GURU-18-KKM-Impor-Word-Diagnostik-02.webp",
              "caption": "Pengaturan satu KKM TP dan bagian penyiapan Word.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa jumlah soal yang sah",
          "text": "Diagnostik memerlukan minimal <b>10 soal</b>; Sumatif minimal <b>30 soal</b>. Soal harus lengkap, aktif, dan memiliki satu kunci. Jumlah boleh dilengkapi bertahap saat Draf.",
          "images": [
            {
              "file": "GURU-14-Bank-Sumatif-01.webp",
              "caption": "Tab Sumatif dan ringkasan kesiapan bank.",
              "pins": []
            }
          ]
        }
      ],
      "result": "KKM efektif dan kebutuhan bank Diagnostik/Sumatif sudah diketahui.",
      "important": "KKM dan konten boleh diperbaiki selama TP belum digunakan siswa. Setelah digunakan, konten serta KKM TP terkunci demi konsistensi hasil."
    },
    {
      "id": "soal-manual",
      "group": "Soal & kesiapan TP",
      "title": "Tambah & sunting soal manual",
      "desc": "Buat soal pilihan ganda A–E dengan tepat satu jawaban benar.",
      "prep": "Buka bank pada tab jenis ujian yang benar. Pastikan TP belum digunakan siswa.",
      "steps": [
        {
          "title": "Pilih tab dan Tambah Soal",
          "text": "Buka tab Diagnostik atau Sumatif sesuai soal yang akan disusun. Gunakan aksi tambah soal pada bank tersebut.",
          "images": []
        },
        {
          "title": "Isi pertanyaan dan pilihan A–E",
          "text": "Tulis pertanyaan serta semua lima pilihan. Gunakan fasilitas editor untuk tabel, teks Arab, gambar, atau rumus sesuai dukungannya.",
          "images": [
            {
              "file": "GURU-19-Editor-Soal-01.webp",
              "caption": "Bagian awal formulir soal: Pertanyaan dan pilihan jawaban.",
              "pins": []
            },
            {
              "file": "GURU-19-Editor-Soal-02.webp",
              "caption": "Lanjutan isian pilihan pada formulir soal.",
              "pins": []
            }
          ]
        },
        {
          "title": "Pilih tepat satu kunci jawaban",
          "text": "Tandai satu pilihan A–E pada <b>Jawaban benar</b>. Pastikan kunci cocok dengan soal dan pilihan yang tertulis.",
          "images": [
            {
              "file": "GURU-19-Editor-Soal-03.webp",
              "caption": "Bagian akhir formulir: kunci tunggal dan aksi pratinjau.",
              "pins": []
            }
          ]
        },
        {
          "title": "Pratinjau sebelum menyimpan",
          "text": "Gunakan <b>Pratinjau Soal</b>, lalu periksa isi, urutan pilihan, gambar, tabel, dan rumus. Pratinjau bukan penyimpanan; lanjutkan simpan jika tampilannya benar.",
          "images": []
        },
        {
          "title": "Periksa daftar dan halaman berikutnya",
          "text": "Kembali ke bank. Gunakan Lihat/Sunting sesuai kebutuhan dan pagination untuk soal di halaman berikutnya.",
          "images": [
            {
              "file": "GURU-13-Bank-Diagnostik-02.webp",
              "caption": "Contoh daftar soal Diagnostik.",
              "pins": []
            },
            {
              "file": "GURU-14-Bank-Sumatif-04.webp",
              "caption": "Bagian daftar Sumatif dan navigasi halaman.",
              "pins": []
            },
            {
              "file": "GURU-15-Sumatif-Halaman-2-02.webp",
              "caption": "Contoh lanjutan daftar Sumatif pada halaman kedua.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Soal tersimpan pada bank yang benar dan tampilannya sudah diperiksa.",
      "coverage": "Screenshot formulir diambil sebelum toolbar editor visual terpasang. Tampilan toolbar pada aplikasi yang sudah diperbarui dapat berbeda; urutan pertanyaan, opsi, dan kunci tetap sama.",
      "faq": [
        [
          "Bagaimana menambahkan gambar?",
          "Gunakan tombol Gambar pada toolbar editor pertanyaan/opsi. Ikuti format dan batas ukuran pada aplikasi, lalu periksa hasil pratinjau."
        ],
        [
          "Rumus Word tidak tampil sama",
          "Bandingkan bentuk kompleks dengan dokumen sumber sebelum menyimpan atau menerbitkan. Jangan hanya memeriksa teks hasil impor."
        ]
      ]
    },
    {
      "id": "word",
      "group": "Soal & kesiapan TP",
      "title": "Impor soal Diagnostik & Sumatif dari Word",
      "desc": "Ikuti urutan unduh, isi, unggah, review, dan konfirmasi pada bank yang sesuai.",
      "prep": "Siapkan bank TP yang belum digunakan siswa. Gunakan template unduhan dari jenis ujian yang benar.",
      "steps": [
        {
          "title": "Unduh template pada tab tujuan",
          "text": "Pada tab Diagnostik atau Sumatif, tentukan jumlah soal lalu klik unduh Word. Gunakan minimal 10 untuk Diagnostik dan 30 untuk Sumatif.",
          "images": [
            {
              "file": "word-diagnostik-unduh.webp",
              "caption": "Tab Diagnostik: isi jumlah soal, lalu unduh template.",
              "pins": []
            },
            {
              "file": "word-sumatif-unduh.webp",
              "caption": "Tab Sumatif: gunakan template Sumatif.",
              "pins": []
            }
          ]
        },
        {
          "title": "Isi setiap soal di Microsoft Word",
          "text": "Isi baris Soal serta pilihan A–E pada tabel template. Tandai <b>✓</b> hanya pada satu jawaban benar. Pertahankan identitas dan struktur dokumen.",
          "images": []
        },
        {
          "title": "Periksa gambar, tabel, rumus, dan media",
          "text": "Tempatkan gambar, Equation Word, atau tabel pada sel <b>Isi</b> untuk pertanyaan atau opsi yang sesuai. Untuk audio atau video, tulis <b>Audio:</b> atau <b>Video:</b> diikuti URL file Google Drive berizin Viewer. Uji pemutarannya saat review.",
          "images": []
        },
        {
          "title": "Unggah DOCX untuk diperiksa",
          "text": "Pilih dokumen <b>.docx</b> di tab yang sesuai. Klik <b>Periksa Word Diagnostik</b> atau <b>Periksa Word Sumatif</b> untuk memulai validasi.",
          "images": [
            {
              "file": "word-diagnostik-unggah.webp",
              "caption": "Unggah DOCX dan periksa di tab Diagnostik.",
              "pins": []
            },
            {
              "file": "word-sumatif-unggah.webp",
              "caption": "Unggah DOCX dan periksa di tab Sumatif.",
              "pins": []
            }
          ]
        },
        {
          "title": "Review seluruh butir",
          "text": "Buka tiap soal pada pratinjau. Cocokkan isi, lima pilihan, satu kunci, dan semua gambar/tabel/rumus dengan Word sumber. Jika ada galat, perbaiki DOCX dan unggah ulang.",
          "images": []
        },
        {
          "title": "Konfirmasi Simpan dan cek bank",
          "text": "Hanya konfirmasi setelah semua butir benar. Kembali ke daftar soal, periksa jumlah dan jenis bank. Jika bank berubah selama review, ulangi pemeriksaan yang diminta aplikasi.",
          "images": []
        }
      ],
      "result": "Soal hasil impor berada pada bank yang benar setelah konfirmasi eksplisit.",
      "table": {
        "headers": [
          "Bagian Word",
          "Pemeriksaan Guru"
        ],
        "rows": [
          [
            "Identitas dokumen",
            "Sesuai TP dan jenis ujian; jangan mengganti identitas template."
          ],
          [
            "Baris Soal",
            "Pertanyaan terisi dan elemen visual terbaca."
          ],
          [
            "Pilihan A–E",
            "Lima pilihan lengkap; tepat satu tanda ✓ pada kolom kunci."
          ],
          [
            "Rumus/gambar/tabel",
            "Posisi dan bentuk sama dengan sumber setelah pratinjau."
          ],
          [
            "Review",
            "Seluruh butir diperiksa sebelum Konfirmasi Simpan."
          ]
        ]
      },
      "coverage": "Arsip memuat unduh/unggah Word dan riwayat review, tetapi belum memuat pratinjau Word berhasil. Panduan review merujuk dokumen resmi.",
      "important": "Unggah dan pratinjau belum mengubah bank. Jangan memberikan dokumen Guru yang berisi kunci kepada siswa.",
      "faq": [
        [
          "Berkas sumber Word tidak ditemukan atau berubah",
          "Gunakan kembali DOCX sumber yang utuh dan jalankan pemeriksaan baru. Jangan mengandalkan tautan review lama yang sumbernya tidak tersedia."
        ],
        [
          "Bank soal berubah setelah review",
          "Ulangi unggah/review untuk mencocokkan kondisi bank terbaru sebelum konfirmasi."
        ]
      ]
    },
    {
      "id": "siap",
      "group": "Soal & kesiapan TP",
      "title": "Periksa kesiapan & siapkan TP",
      "desc": "Gunakan ringkasan progres dan pemeriksaan final sebelum konten digunakan siswa.",
      "prep": "Simpan materi, tugas, soal, dan KKM yang diperlukan.",
      "steps": [
        {
          "title": "Baca Step Progress",
          "text": "Buka rincian TP dan periksa kotak langkah persiapan. Esensial memerlukan identitas/CP dan materi; NonEsensial juga memerlukan Diagnostik serta Sumatif.",
          "images": [
            {
              "file": "GURU-22-TP-Esensial-01.webp",
              "caption": "Contoh langkah persiapan TP Esensial.",
              "pins": []
            },
            {
              "file": "GURU-16-TP-Draf-NonEsensial-01.webp",
              "caption": "Langkah persiapan TP NonEsensial.",
              "pins": []
            }
          ]
        },
        {
          "title": "Buka Pemeriksaan Kesiapan",
          "text": "Gulir ke bagian akhir rincian TP dan buka pemeriksaan kesiapan.",
          "images": [
            {
              "file": "GURU-16-TP-Draf-NonEsensial-03.webp",
              "caption": "Pintu masuk pemeriksaan kesiapan di bagian akhir rincian TP.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa setiap butir yang belum terpenuhi",
          "text": "Baca rincian masalah, bukan hanya status Siap atau jumlah centang. Periksa file media, soal, kunci, waktu, serta referensi konten.",
          "images": [
            {
              "file": "GURU-11-Rincian-Kesiapan-01.webp",
              "caption": "Contoh rincian pemeriksaan kesiapan.",
              "pins": []
            },
            {
              "file": "GURU-11-Rincian-Kesiapan-02.webp",
              "caption": "Lanjutan daftar pemeriksaan final.",
              "pins": []
            },
            {
              "file": "GURU-11-Rincian-Kesiapan-03.webp",
              "caption": "Lanjutan pemeriksaan media dan instrumen.",
              "pins": []
            },
            {
              "file": "GURU-11-Rincian-Kesiapan-04.webp",
              "caption": "Bagian akhir pemeriksaan kesiapan.",
              "pins": []
            }
          ]
        },
        {
          "title": "Perbaiki lalu periksa ulang",
          "text": "Kembali ke editor yang ditunjuk. Simpan perbaikan dan jalankan pemeriksaan lagi sampai syarat final terpenuhi.",
          "images": []
        },
        {
          "title": "Konfirmasi penyiapan TP",
          "text": "Gunakan aksi penyiapan/publikasi yang disediakan setelah pemeriksaan sah. Pastikan status terbaru tampil di rincian TP dan periksa akses siswa sesuai aturan semester.",
          "images": []
        }
      ],
      "result": "TP memenuhi pemeriksaan final dan statusnya dapat dipastikan dari aplikasi.",
      "important": "Contoh arsip memperlihatkan TP Siap dengan 21/23 pemeriksaan terpenuhi. Itu contoh masalah yang harus ditindaklanjuti, bukan contoh kesiapan yang berhasil sempurna."
    },
    {
      "id": "penilaian",
      "group": "Penilaian & ujian",
      "title": "Nilai Resume & HOTS siswa",
      "desc": "Baca kiriman siswa, masukkan skor, dan periksa hasil penyimpanan.",
      "prep": "Siapkan penilaian pada Gen–Mapel yang Anda ampu.",
      "steps": [
        {
          "title": "Buka Antrean Penilaian",
          "text": "Klik <b>Antrean Penilaian</b>. Pilih Gen–Mapel, semester, BAB dan jenis tugas sesuai kebutuhan. Pilih status <b>Belum Dinilai</b>, lalu klik <b>Terapkan Filter</b>.",
          "images": [
            {
              "file": "GURU-24-Antrean-Penilaian-01.webp",
              "caption": "Filter antrean penilaian Resume dan HOTS.",
              "pins": []
            },
            {
              "file": "GURU-24-Antrean-Penilaian-02.webp",
              "caption": "Contoh kiriman yang menunggu penilaian.",
              "pins": []
            }
          ]
        },
        {
          "title": "Buka kiriman dan baca petunjuk tugas",
          "text": "Periksa siswa, TP, jenis tugas, petunjuk Guru, serta jawaban yang dikirim. Cocokkan dengan kriteria tugas.",
          "images": [
            {
              "file": "GURU-25-Penilaian-Resume-01.webp",
              "caption": "Contoh pembacaan jawaban Resume.",
              "pins": []
            },
            {
              "file": "GURU-26-Penilaian-HOTS-01.webp",
              "caption": "Contoh pembacaan jawaban HOTS.",
              "pins": []
            }
          ]
        },
        {
          "title": "Isi skor dan umpan balik",
          "text": "Masukkan bilangan bulat <b>0–100</b>. Umpan balik boleh kosong, maksimal 1.000 karakter sesuai formulir. Indikator kemiripan membantu pemeriksaan dan tidak menentukan skor otomatis.",
          "images": [
            {
              "file": "GURU-25-Penilaian-Resume-02.webp",
              "caption": "Bagian skor dan umpan balik pada penilaian Resume.",
              "pins": []
            },
            {
              "file": "GURU-26-Penilaian-HOTS-02.webp",
              "caption": "Bagian skor dan umpan balik pada penilaian HOTS.",
              "pins": []
            }
          ]
        },
        {
          "title": "Simpan dan periksa status",
          "text": "Klik <b>Simpan & berikutnya</b> atau aksi simpan yang tersedia. Periksa kiriman pada tab <b>Sudah Dinilai</b>. Untuk memperbaiki nilai yang sudah tersimpan, gunakan Koreksi Nilai.",
          "images": []
        }
      ],
      "result": "Nilai tugas tersimpan dan kiriman berpindah ke daftar yang sudah dinilai.",
      "important": "Nilai TP final menunggu semua komponen wajib dan Sumatif sah. Nilai tugas yang belum diberikan tidak otomatis dianggap nol."
    },
    {
      "id": "koreksi",
      "group": "Penilaian & ujian",
      "title": "Koreksi nilai yang sudah tersimpan",
      "desc": "Perbaiki skor Resume/HOTS secara langsung melalui kewenangan Guru pengampu.",
      "prep": "Periksa kembali jawaban siswa dan skor yang memang perlu diperbaiki.",
      "steps": [
        {
          "title": "Buka tab Sudah Dinilai",
          "text": "Pada Antrean Penilaian, ubah filter/status ke <b>Sudah Dinilai</b>, lalu temukan siswa dan tugas yang benar.",
          "images": [
            {
              "file": "GURU-27-Sudah-Dinilai-01.webp",
              "caption": "Daftar kiriman yang sudah dinilai.",
              "pins": []
            },
            {
              "file": "GURU-27-Sudah-Dinilai-02.webp",
              "caption": "Lanjutan daftar dan aksi koreksi nilai.",
              "pins": []
            }
          ]
        },
        {
          "title": "Klik Koreksi Nilai",
          "text": "Pastikan jenis tugas Resume/HOTS, siswa, dan TP yang tampil sesuai. Baca nilai saat ini sebelum mengubahnya.",
          "images": [
            {
              "file": "GURU-28-Form-Koreksi-Nilai-01.webp",
              "caption": "Form koreksi langsung Guru: nilai saat ini, nilai koreksi, dan Proses.",
              "pins": []
            }
          ]
        },
        {
          "title": "Isi skor koreksi dan klik Proses",
          "text": "Masukkan nilai koreksi <b>0–100</b>, periksa sekali lagi, lalu klik <b>Proses</b>. Tidak ada tahap pengajuan atau persetujuan Admin.",
          "images": []
        },
        {
          "title": "Periksa hasil perhitungan ulang",
          "text": "Buka kembali rincian penilaian atau rekap. Sistem mencatat perubahan dan menghitung ulang nilai TP sesuai jalur siswa. Sertifikat yang isinya berubah diperbarui saat siswa mengaksesnya berikutnya.",
          "images": []
        }
      ],
      "result": "Skor koreksi tersimpan beserta riwayat perubahan.",
      "important": "Koreksi ini untuk skor Resume/HOTS, bukan mengubah jawaban ujian, kunci soal, atau konten TP yang sudah digunakan siswa."
    },
    {
      "id": "akses-ulang",
      "group": "Penilaian & ujian",
      "title": "Tangani permintaan akses ulang",
      "desc": "Beri izin untuk melanjutkan tahap tes mandiri yang tidak selesai akibat kendala.",
      "prep": "Buka permintaan pada Gen–Mapel yang menjadi kewenangan Anda.",
      "steps": [
        {
          "title": "Buka Permintaan Akses Ulang",
          "text": "Klik menu <b>Permintaan Akses Ulang</b>. Periksa daftar permintaan yang masuk.",
          "images": [
            {
              "file": "GURU-29-Akses-Ulang-01.webp",
              "caption": "Contoh antrean kosong: belum ada permintaan akses ulang.",
              "pins": []
            }
          ]
        },
        {
          "title": "Cocokkan siswa dan percobaan",
          "text": "Pada permintaan yang tersedia, baca siswa, TP, jenis tes, tahap normal/remedial, dan keterangan kendala. Jenis tahap ditentukan sistem dari percobaan yang terhenti.",
          "images": []
        },
        {
          "title": "Klik Izinkan Akses Ulang",
          "text": "Gunakan tombol izin pada permintaan yang tepat. Guru tidak perlu memilih jenis tes pengganti atau membuat alasan baru jika formulir tidak memintanya.",
          "images": []
        },
        {
          "title": "Periksa status dan arahkan siswa",
          "text": "Pastikan izin tercatat. Siswa kembali ke TP yang sama untuk mengikuti tahap pengganti. Izin berlaku sekali pakai dan tidak menghapus materi, tugas, atau nilai yang sudah sah.",
          "images": []
        }
      ],
      "result": "Permintaan ditangani pada tahap ujian yang benar.",
      "table": {
        "headers": [
          "Kondisi",
          "Tindakan"
        ],
        "rows": [
          [
            "Diagnostik/Sumatif tidak selesai",
            "Akses ulang tahap yang sama setelah izin Guru."
          ],
          [
            "Sumatif awal selesai sah, nilai di bawah KKM",
            "Satu remedial nilai; bukan akses ulang akibat insiden."
          ],
          [
            "Pra-Semester dibatalkan/tidak hadir",
            "Mengikuti jadwal susulan Admin; bukan izin ulang mandiri dari menu ini."
          ]
        ]
      },
      "coverage": "Arsip hanya memuat antrean kosong. Form keputusan untuk permintaan yang terisi belum terekam."
    },
    {
      "id": "pra-semester",
      "group": "Penilaian & ujian",
      "title": "Siapkan bank soal Pra-Semester",
      "desc": "Kelola bank tersendiri untuk satu Gen–Mapel–Semester dan pastikan semua BAB terwakili.",
      "prep": "Siapkan minimal 30 soal PG A–E dari seluruh BAB pada semester terkait.",
      "steps": [
        {
          "title": "Buka daftar Pra-Semester",
          "text": "Klik <b>Pra-Semester</b>, pilih Gen sesuai kebutuhan, lalu buka <b>Kelola Soal</b> pada paket yang tepat.",
          "images": [
            {
              "file": "GURU-30-Daftar-Pra-Semester-01.webp",
              "caption": "Daftar bank Pra-Semester dan paket pembelajaran.",
              "pins": []
            },
            {
              "file": "GURU-30-Daftar-Pra-Semester-02.webp",
              "caption": "Lanjutan daftar paket enam semester.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa KKM dan cakupan BAB",
          "text": "Baca jumlah soal sah dan jumlah BAB terwakili. Atur KKM khusus Pra-Semester bila diperlukan; kosongkan untuk mengikuti default Admin. KKM ini bukan menyalin KKM salah satu TP.",
          "images": [
            {
              "file": "GURU-31-Kelola-Pra-Semester-01.webp",
              "caption": "Kelola Soal Pra-Semester: kesiapan bank, cakupan BAB, dan KKM.",
              "pins": []
            }
          ]
        },
        {
          "title": "Unduh dan isi Word khusus Pra-Semester",
          "text": "Pilih jumlah soal, unduh template, lalu isi soal dan opsi A–E. Pada baris Soal, tentukan BAB asal pada kolom ketiga. Pada pilihan A–E, tandai tepat satu kunci ✓.",
          "images": [
            {
              "file": "GURU-31-Kelola-Pra-Semester-02.webp",
              "caption": "Bagian template Word, unggah, riwayat, dan awal daftar soal.",
              "pins": []
            }
          ]
        },
        {
          "title": "Unggah, review, dan konfirmasi",
          "text": "Pilih DOCX yang sudah diisi, lalu klik <b>Unggah & Pratinjau Word</b>. Periksa setiap soal beserta BAB, pilihan, kunci, dan media. Konfirmasi setelah semua benar. Impor menambahkan soal ke bank yang sudah ada.",
          "images": [
            {
              "file": "pra-word-unggah.webp",
              "caption": "Pilih DOCX dan buka pratinjau Word Pra-Semester.",
              "pins": []
            }
          ]
        },
        {
          "title": "Gunakan formulir manual bila diperlukan",
          "text": "Pada tambah/sunting soal, pilih BAB dan lengkapi pertanyaan, pilihan A–E, serta satu kunci. Simpan setelah memeriksa pratinjau.",
          "images": [
            {
              "file": "GURU-32-Form-Soal-Pra-01.webp",
              "caption": "Form manual soal Pra-Semester.",
              "pins": []
            },
            {
              "file": "GURU-32-Form-Soal-Pra-02.webp",
              "caption": "Lanjutan pilihan jawaban dan penyimpanan.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa bank dan koordinasikan jadwal",
          "text": "Pastikan minimal 30 soal sah dan seluruh BAB terwakili. Admin mengatur jadwal serta durasi ujian. Bank dibekukan setelah percobaan siswa pertama.",
          "images": [
            {
              "file": "GURU-31-Kelola-Pra-Semester-03.webp",
              "caption": "Contoh daftar soal yang mencantumkan BAB.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Bank Pra-Semester siap ditinjau; pelaksanaan mengikuti jadwal Admin.",
      "important": "Guru menyiapkan instrumen dan KKM. Jadwal utama, remedial, serta susulan Pra-Semester ditetapkan Admin.",
      "coverage": "Arsip belum memuat review Word Pra-Semester yang berhasil; contoh riwayat lama mengalami sumber Word tidak tersedia."
    },
    {
      "id": "rekap",
      "group": "Hasil & informasi",
      "title": "Rekap & ekspor nilai",
      "desc": "Bedakan nilai TP, status pembelajaran, dan hasil Pra-Semester.",
      "prep": "Pilih Gen–Mapel dan semester sesuai laporan yang diperlukan.",
      "steps": [
        {
          "title": "Buka Rekap Nilai TP",
          "text": "Klik <b>Rekap Nilai → Nilai TP</b>. Pilih Gen–Mapel, semester, jenis TP, dan BAB pada filter.",
          "images": [
            {
              "file": "GURU-34-Rekap-TP-Filter.webp",
              "caption": "Filter serta ringkasan rekap nilai TP.",
              "pins": []
            }
          ]
        },
        {
          "title": "Baca status nilai per siswa dan TP",
          "text": "Perhatikan Final, Sementara, atau Belum Ada. TP Esensial tidak memiliki nilai. Nilai kosong berbeda dari skor nol.",
          "images": []
        },
        {
          "title": "Geser tabel untuk komponen di kanan",
          "text": "Gunakan gulir horizontal jika komponen nilai tidak terlihat. Cocokkan baris siswa/TP sebelum membaca Sumatif dan nilai TP.",
          "images": []
        },
        {
          "title": "Buka Nilai Pra-Semester secara terpisah",
          "text": "Pilih <b>Nilai Pra-Semester</b> untuk skor ujian tingkat semester. Nilai ini berdiri sendiri dan tidak digabung menjadi nilai akhir semester.",
          "images": []
        },
        {
          "title": "Gunakan ekspor pada halaman nilai",
          "text": "Gunakan aksi ekspor yang tersedia untuk jenis rekap yang dibutuhkan. Nilai TP dan Pra-Semester menghasilkan berkas terpisah; ekspor dapat digunakan meski baru satu nilai TP tersedia. Periksa isi berkas setelah diunduh.",
          "images": []
        }
      ],
      "result": "Rekap dibaca pada konteks yang benar dan hasil unduhan diperiksa.",
      "table": {
        "headers": [
          "Jalur siswa",
          "Perhitungan nilai TP"
        ],
        "rows": [
          [
            "Lulus Diagnostik",
            "100% Sumatif terbaik yang sah."
          ],
          [
            "Tidak lulus Diagnostik",
            "20% Resume + 20% HOTS + 60% Sumatif terbaik yang sah."
          ],
          [
            "Remedial Sumatif",
            "Satu kali bila skor awal di bawah KKM; pakai skor tertinggi."
          ],
          [
            "Pra-Semester",
            "Nilai terpisah; tidak membentuk nilai akhir semester."
          ]
        ]
      },
      "coverage": "Cuplikan menampilkan filter dan ringkasan nilai TP. Ikuti langkah pada aplikasi untuk membaca baris siswa atau mengunduh rekap."
    },
    {
      "id": "pengumuman",
      "group": "Hasil & informasi",
      "title": "Buat & kelola pengumuman",
      "desc": "Sampaikan informasi kepada siswa pada Gen yang Anda ampu.",
      "prep": "Siapkan judul dan isi pengumuman yang jelas.",
      "steps": [
        {
          "title": "Buka Kelola Pengumuman",
          "text": "Buka <b>Informasi & Bantuan → Kelola Pengumuman</b>. Periksa daftar pengumuman yang sudah ada.",
          "images": [
            {
              "file": "GURU-38-Kelola-Pengumuman-01.webp",
              "caption": "Contoh daftar pengumuman Guru yang masih kosong.",
              "pins": []
            }
          ]
        },
        {
          "title": "Isi pengumuman baru",
          "text": "Klik tambah. Isi <b>Judul pengumuman</b> dan <b>Isi pengumuman</b>. Gunakan teks biasa; isi maksimal 5.000 karakter sesuai formulir.",
          "images": [
            {
              "file": "GURU-39-Form-Pengumuman-01.webp",
              "caption": "Form judul, isi, serta status Draf/Terbit.",
              "pins": []
            }
          ]
        },
        {
          "title": "Pilih Draf atau Terbit",
          "text": "Simpan sebagai Draf jika masih disiapkan. Pilih Terbit ketika informasi sudah siap dibaca siswa pada Gen yang Anda ampu.",
          "images": []
        },
        {
          "title": "Periksa hasil",
          "text": "Buka daftar atau halaman Pengumuman untuk memastikan judul, isi, dan status sesuai.",
          "images": [
            {
              "file": "GURU-37-Pengumuman-01.webp",
              "caption": "Halaman pembaca Pengumuman.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Pengumuman memiliki isi dan status yang sesuai sasaran.",
      "important": "Pengumuman Guru Terbit ditujukan kepada siswa pada Gen yang menjadi penugasannya, bukan otomatis seluruh madrasah."
    },
    {
      "id": "bantuan",
      "group": "Hasil & informasi",
      "title": "Notifikasi, bantuan & akun",
      "desc": "Temukan informasi tindak lanjut dan jalur bantuan aplikasi.",
      "prep": "Gunakan akun sendiri dan keluar setelah selesai memakai perangkat bersama.",
      "steps": [
        {
          "title": "Baca Notifikasi",
          "text": "Klik <b>Notifikasi</b>. Buka pemberitahuan yang memerlukan tindakan. Daftar kosong berarti belum ada pemberitahuan pada akun itu.",
          "images": [
            {
              "file": "GURU-43-Notifikasi-01.webp",
              "caption": "Contoh Notifikasi Guru dengan daftar kosong.",
              "pins": []
            }
          ]
        },
        {
          "title": "Cari jawaban di Bantuan",
          "text": "Buka <b>Informasi & Bantuan → Bantuan</b>. Baca panduan dan buka pertanyaan FAQ yang sesuai.",
          "images": [
            {
              "file": "GURU-44-Bantuan-FAQ-01.webp",
              "caption": "Pusat Bantuan Guru.",
              "pins": []
            },
            {
              "file": "GURU-44-Bantuan-FAQ-02.webp",
              "caption": "Lanjutan panduan dan FAQ.",
              "pins": []
            },
            {
              "file": "GURU-44-Bantuan-FAQ-03.webp",
              "caption": "Bagian akhir FAQ Guru.",
              "pins": []
            }
          ]
        },
        {
          "title": "Hubungi Admin jika kendala berlanjut",
          "text": "Buka <b>Hubungi Admin</b> dan gunakan kontak resmi yang ditampilkan. Sertakan halaman, kegiatan, serta pesan galat tanpa mengirimkan kata sandi.",
          "images": [
            {
              "file": "GURU-42-Hubungi-Admin-01.webp",
              "caption": "Kontak resmi pada halaman Hubungi Admin.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa profil dan keluar",
          "text": "Menu <b>Profil & peran</b> digunakan untuk pengaturan akun yang tersedia. Bila identitas resmi salah, minta perbaikan Admin. Gunakan <b>Keluar</b> setelah selesai pada perangkat bersama.",
          "images": []
        }
      ],
      "result": "Informasi bantuan ditemukan dan akun digunakan dengan aman.",
      "coverage": "Screenshot profil Guru tidak disertakan dalam arsip untuk membatasi data identitas pribadi."
    }
  ],
  "siswa": [
    {
      "id": "mulai",
      "group": "Mulai belajar",
      "title": "Masuk & kenali Beranda Siswa",
      "desc": "Masuk ke SLA-SKS, lalu lihat pembelajaran yang tersedia untuk akun Anda.",
      "prep": "Siapkan NISN yang terdaftar di madrasah.",
      "steps": [
        {
          "title": "Buka halaman Masuk",
          "text": "Buka <a href=\"https://sla-sks.mtsn4jombang.sch.id/masuk\">halaman Masuk SLA-SKS</a> di browser.",
          "images": []
        },
        {
          "title": "Isi Username dan Kata Sandi",
          "text": "Pada kolom <b>Username / NISN</b>, masukkan <b>NISN yang terdaftar di madrasah</b>. Saat pertama kali masuk, isi kolom <b>Kata Sandi</b> dengan <b>NISN yang sama</b>. Jika sandi sudah diganti, gunakan sandi terbaru.",
          "images": []
        },
        {
          "title": "Klik Masuk dan periksa Beranda Siswa",
          "text": "Klik <b>Masuk</b>. Setelah Beranda terbuka, periksa nama akun dan pastikan penanda peran menunjukkan <b>Siswa</b>. Untuk mengganti sandi awal, buka <b>Profil &amp; peran</b>.",
          "images": []
        },
        {
          "title": "Baca ringkasan Beranda",
          "text": "Periksa kartu paket, TP selesai, tugas, dan sertifikat. Tombol <b>Lanjut Belajar</b> mengarahkan ke kegiatan yang dapat diakses akun Anda.",
          "images": [
            {
              "file": "SISWA-01-DASHBOARD-01.webp",
              "caption": "Beranda akun simulasi: ringkasan pembelajaran dan progres.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa progres dan informasi penting",
          "text": "Gulir ke ringkasan mapel dan hasil belajar. Angka 1/2 atau 50% pada contoh menunjukkan kondisi akun simulasi saat diambil, bukan nilai yang harus dicapai semua siswa.",
          "images": [
            {
              "file": "SISWA-01-DASHBOARD-02.webp",
              "caption": "Lanjutan Beranda: progres mapel dan informasi capaian.",
              "pins": []
            }
          ]
        },
        {
          "title": "Kenali sidebar",
          "text": "Gunakan <b>Pembelajaran</b> untuk belajar, <b>Laporan Akademik</b> untuk hasil, dan <b>Sertifikat</b> untuk dokumen capaian. Tombol di dekat logo meringkas atau membuka sidebar.",
          "images": [
            {
              "file": "SISWA-01-DASHBOARD-SIDEBAR-RINGKAS-01.webp",
              "caption": "Contoh sidebar Siswa dalam keadaan ringkas.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Anda mengenali halaman awal dan tempat melanjutkan pembelajaran.",
      "faq": [
        [
          "Gagal masuk",
          "Periksa kembali nomor yang terdaftar dan kata sandi. Jika tetap gagal, hubungi Admin madrasah."
        ],
        [
          "Tidak ada pembelajaran yang tampil",
          "Minta Guru/Admin memeriksa penetapan Gen, mata pelajaran, dan kesiapan paket."
        ]
      ]
    },
    {
      "id": "pilih-tp",
      "group": "Mulai belajar",
      "title": "Pilih mapel, semester & TP",
      "desc": "Buka pembelajaran melalui daftar yang tersedia sesuai hak akses akun Anda.",
      "prep": "Masuk sebagai Siswa dan pilih menu Pembelajaran.",
      "steps": [
        {
          "title": "Pilih mata pelajaran",
          "text": "Buka <b>Pembelajaran</b>, lalu pilih mata pelajaran yang tersedia pada Gen Anda.",
          "images": [
            {
              "file": "SISWA-02-MAPEL-01.webp",
              "caption": "Daftar mata pelajaran yang tersedia untuk akun simulasi.",
              "pins": []
            }
          ]
        },
        {
          "title": "Pilih semester terbuka",
          "text": "Periksa kartu Semester 1–6. Buka semester yang dapat diakses. Semester sebelum semester mulai dapat berstatus Dilewati; semester terkunci belum dapat dikerjakan.",
          "images": [
            {
              "file": "SISWA-03-PILIH-SEMESTER-01.webp",
              "caption": "Pemilihan semester dan status akses pada akun Siswa.",
              "pins": []
            }
          ]
        },
        {
          "title": "Baca daftar BAB dan TP",
          "text": "Periksa nama BAB, nama/kode TP, jenis, dan status. TP Esensial tampil sebagai informasi tanpa kewajiban aktivitas/nilai LMS pada alur saat ini.",
          "images": [
            {
              "file": "SISWA-03-DAFTAR-BAB-TP-01.webp",
              "caption": "Daftar BAB/TP dan ringkasan semester.",
              "pins": []
            },
            {
              "file": "SISWA-03-DAFTAR-BAB-TP-02.webp",
              "caption": "Lanjutan daftar TP dan statusnya.",
              "pins": []
            }
          ]
        },
        {
          "title": "Buka TP NonEsensial yang tersedia",
          "text": "Gunakan tautan TP yang sudah dapat dibuka. Jika tertulis <b>Menunggu TP disiapkan Guru</b>, tunggu penyiapan Guru; jangan mencoba membuka melalui URL tebakan.",
          "images": [
            {
              "file": "SISWA-03-DAFTAR-BAB-TP-03.webp",
              "caption": "Contoh TP belum siap serta bagian Pra-Semester.",
              "pins": []
            }
          ]
        },
        {
          "title": "Baca rincian TP",
          "text": "Periksa rumusan TP, tahapan, dan status kegiatan. Pada TP yang tuntas, rincian menampilkan hasil dan tidak membuka ujian baru.",
          "images": [
            {
              "file": "SISWA-04-TP23-TUNTAS-01.webp",
              "caption": "Contoh rincian TP yang sudah selesai pada akun simulasi.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Mata pelajaran, semester, dan TP yang dapat dipelajari sudah dipilih.",
      "important": "Progres semester dihitung dari TP NonEsensial yang selesai, bukan dari rata-rata nilai. TP Esensial tidak menambah persentase progres.",
      "faq": [
        [
          "Semester terkunci",
          "Ikuti syarat akses dan urutan pembelajaran yang ditampilkan. Hubungi Guru jika status tidak sesuai."
        ],
        [
          "TP belum disiapkan Guru",
          "Tunggu penyiapan konten atau tanyakan kepada Guru pengampu."
        ]
      ]
    },
    {
      "id": "alur",
      "group": "Mulai belajar",
      "title": "Pahami dua jalur pembelajaran",
      "desc": "Hasil Diagnostik menentukan kewajiban belajar berikutnya; kedua jalur tetap wajib Sumatif.",
      "prep": "Buka TP NonEsensial dan baca petunjuknya.",
      "steps": [
        {
          "title": "Kerjakan Diagnostik terlebih dahulu",
          "text": "Diagnostik menjadi gerbang awal. Skornya dibandingkan dengan KKM untuk menentukan jalur; skor Diagnostik tidak dihitung menjadi nilai TP.",
          "images": []
        },
        {
          "title": "Jika lulus Diagnostik",
          "text": "Materi, Resume, dan HOTS boleh dilewati. Anda tetap mengikuti <b>Sumatif</b>. Materi yang dibuka sukarela tidak menambah komponen nilai tugas.",
          "images": []
        },
        {
          "title": "Jika tidak lulus Diagnostik",
          "text": "Pelajari satu materi, kirim Resume final, lalu kirim HOTS final. Setelah persyaratan jalur terpenuhi, lanjutkan Sumatif.",
          "images": []
        },
        {
          "title": "Baca hasil Sumatif dan kesempatan remedial",
          "text": "Jika Sumatif awal sah di bawah KKM, tersedia satu remedial. Skor Sumatif terbaik yang sah digunakan. TP dapat selesai walaupun hasil akhirnya belum mencapai KKM.",
          "images": []
        }
      ],
      "result": "Anda mengetahui urutan belajar sesuai hasil Diagnostik.",
      "flow": true,
      "table": {
        "headers": [
          "Jalur",
          "Kewajiban",
          "Nilai TP"
        ],
        "rows": [
          [
            "Lulus Diagnostik",
            "Sumatif tetap wajib; materi/Resume/HOTS boleh dilewati.",
            "100% Sumatif terbaik."
          ],
          [
            "Tidak lulus Diagnostik",
            "Materi → Resume → HOTS → Sumatif.",
            "20% Resume + 20% HOTS + 60% Sumatif terbaik."
          ]
        ]
      },
      "important": "Akses ulang karena ujian terhenti berbeda dari remedial nilai. Diagnostik tidak memiliki remedial nilai."
    },
    {
      "id": "diagnostik",
      "group": "Kegiatan pembelajaran",
      "title": "Ikuti tes Diagnostik",
      "desc": "Baca petunjuk, periksa persyaratan, dan gunakan hasil untuk memilih kegiatan berikutnya.",
      "prep": "Siapkan waktu, koneksi, daya perangkat, serta browser yang mendukung fullscreen.",
      "steps": [
        {
          "title": "Buka petunjuk Diagnostik",
          "text": "Dari rincian TP, buka Diagnostik. Baca jumlah soal, durasi, KKM, dan syarat pelaksanaan yang ditampilkan untuk TP Anda.",
          "images": [
            {
              "file": "SISWA-05-PETUNJUK-DIAGNOSTIK-01.webp",
              "caption": "Petunjuk Diagnostik dan syarat pelaksanaan.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa persyaratan server dan perangkat",
          "text": "Pastikan semua persyaratan terpenuhi sebelum pemeriksaan perangkat. Diagnostik dari HP/tablet hanya dapat digunakan bila fullscreen benar-benar didukung; gunakan desktop/laptop bila tidak.",
          "images": [
            {
              "file": "SISWA-05-PETUNJUK-DIAGNOSTIK-02.webp",
              "caption": "Contoh persyaratan belum terpenuhi karena akun sudah melewati tahap Diagnostik.",
              "pins": []
            }
          ]
        },
        {
          "title": "Mulai saat syarat terpenuhi",
          "text": "Jalankan pemeriksaan perangkat dan masuk fullscreen melalui tombol yang tersedia. Siapkan diri sebelum memulai agar tidak perlu berpindah tab atau keluar dari fullscreen.",
          "images": []
        },
        {
          "title": "Kerjakan dan periksa penyimpanan jawaban",
          "text": "Pilih satu jawaban pada setiap soal. Perhatikan indikator tersimpan dan sisa waktu. Jawaban baru dianggap tersimpan setelah mendapat konfirmasi server.",
          "images": []
        },
        {
          "title": "Kirim dan baca hasil",
          "text": "Gunakan aksi kirim/selesai, baca konfirmasinya, lalu periksa hasil. Pada percobaan selesai, gunakan tombol hasil; jangan memulai percobaan baru.",
          "images": [
            {
              "file": "SISWA-05-DIAGNOSTIK-SELESAI-01.webp",
              "caption": "Halaman Diagnostik yang telah selesai.",
              "pins": []
            },
            {
              "file": "SISWA-05-HASIL-DIAGNOSTIK-01.webp",
              "caption": "Contoh hasil Diagnostik akun simulasi; skor dan KKM mengikuti TP.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Hasil Diagnostik sah menentukan tahapan selanjutnya.",
      "important": "Jangan menganggap timer yang tampak pada screenshot hasil sebagai ujian yang masih berjalan. Gambar menunjukkan percobaan historis yang telah selesai.",
      "coverage": "Petunjuk dan hasil Diagnostik tersedia. Ruang ujian aktif, pemilihan jawaban, dan konfirmasi kirim belum terekam.",
      "faq": [
        [
          "Tombol mulai belum tersedia",
          "Baca persyaratan yang belum terpenuhi. TP selesai atau tahap yang sudah dilewati tidak membuka tes baru."
        ],
        [
          "Ujian terhenti akibat insiden",
          "Periksa status tes dan minta akses ulang kepada Guru jika aplikasi mengharuskannya."
        ]
      ]
    },
    {
      "id": "materi",
      "group": "Kegiatan pembelajaran",
      "title": "Pelajari materi & gunakan pembaca media",
      "desc": "Penuhi syarat belajar sesuai media; bedakan materi wajib dengan baca sukarela.",
      "prep": "Buka materi dari rincian TP. Pastikan berkas atau tautan dapat dimuat.",
      "steps": [
        {
          "title": "Buka satu materi pada TP",
          "text": "Klik materi yang tersedia. Periksa judul, jenis media, waktu minimum, dan apakah statusnya wajib atau sukarela.",
          "images": [
            {
              "file": "SISWA-06-MATERI-SUKARELA-01.webp",
              "caption": "Contoh halaman materi sukarela. Area PDF pada arsip mengalami gagal muat, bukan contoh PDF berhasil terbuka.",
              "pins": []
            }
          ]
        },
        {
          "title": "Pelajari media secara aktif",
          "text": "Untuk PDF/gambar, gunakan navigasi halaman, zoom, atau fullscreen yang tersedia agar terbaca. Penuhi waktu dan syarat halaman yang ditampilkan. Zoom/fullscreen sendiri tidak otomatis menambah waktu belajar.",
          "images": []
        },
        {
          "title": "Ikuti aturan pemutaran untuk video/audio",
          "text": "Putar media secara aktif. Melompati posisi video/audio atau hanya membiarkan tab di latar tidak setara dengan mempelajari media. Ikuti progres yang diakui aplikasi.",
          "images": []
        },
        {
          "title": "Tunggu syarat materi diakui",
          "text": "Pada jalur wajib, periksa progres dan tombol kegiatan berikutnya. Jika koneksi sempat terputus, tetap gunakan perangkat/browser yang sama agar catatan sementara dapat disinkronkan.",
          "images": []
        },
        {
          "title": "Buka tugas atau unduh setelah tersedia",
          "text": "Setelah syarat terpenuhi, lanjutkan Resume/HOTS sesuai urutan. Unduh Materi untuk PDF, gambar, atau audio dibuka sesuai syarat; YouTube tidak menyediakan unduh internal.",
          "images": [
            {
              "file": "SISWA-06-MATERI-SUKARELA-02.webp",
              "caption": "Lanjutan materi sukarela dan pengantar kegiatan. Pada jalur ini waktu tidak dihitung sebagai tugas.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Materi dipelajari dan kegiatan lanjutan dibuka sesuai jalur Anda.",
      "table": {
        "headers": [
          "Media",
          "Cara belajar"
        ],
        "rows": [
          [
            "PDF",
            "Baca halaman yang diwajibkan dan penuhi waktu aktif; gunakan zoom/fullscreen bila tersedia."
          ],
          [
            "Gambar",
            "Amati materi, gunakan zoom untuk detail, dan penuhi waktu aktif."
          ],
          [
            "Audio/YouTube",
            "Putar secara nyata dan ikuti progres; jangan melompati durasi sebagai pengganti belajar."
          ],
          [
            "Baca sukarela",
            "Untuk siswa lulus Diagnostik; tidak menambah tugas atau nilai Resume/HOTS."
          ]
        ]
      },
      "coverage": "Arsip hanya memuat materi PDF sukarela yang gagal dimuat. Kontrol media berhasil dan contoh audio/gambar/YouTube siswa belum terekam.",
      "faq": [
        [
          "PDF gagal dibuka atau Missing PDF",
          "Laporkan kepada Guru dengan nama TP dan pesan yang tampil. Muat ulang setelah berkas/akses diperbaiki; jangan menganggap tugas selesai dari area PDF yang kosong."
        ],
        [
          "Waktu terasa tidak bertambah",
          "Pastikan media aktif, halaman yang diwajibkan sudah dibaca, dan koneksi dapat mengirim pengakuan progres. Ikuti pesan aplikasi."
        ]
      ]
    },
    {
      "id": "resume-hots",
      "group": "Kegiatan pembelajaran",
      "title": "Kirim Resume & HOTS",
      "desc": "Kerjakan tugas dengan bahasa sendiri dan periksa jawaban sebelum mengirim final.",
      "prep": "Bagian ini berlaku bagi jalur tidak lulus Diagnostik setelah syarat materi terpenuhi.",
      "steps": [
        {
          "title": "Baca petunjuk Resume",
          "text": "Buka tugas Resume yang telah tersedia dan baca cakupan jawaban. Gunakan pemahaman materi, bukan menyalin petunjuk sebagai jawaban.",
          "images": [
            {
              "file": "SISWA-07-PETUNJUK-RESUME-HOTS-01.webp",
              "caption": "Contoh petunjuk Resume dan HOTS pada mode baca sukarela; tidak memuat formulir kirim.",
              "pins": []
            }
          ]
        },
        {
          "title": "Tulis dan periksa Resume",
          "text": "Isi jawaban pada formulir tugas yang dibuka aplikasi. Penuhi batas dan ketentuan yang ditampilkan; baca kembali sebelum mengirim.",
          "images": []
        },
        {
          "title": "Kirim Resume final",
          "text": "Gunakan aksi pengiriman dan konfirmasinya. Pastikan status sudah terkirim. Jangan mengandalkan teks yang baru diketik sebagai bukti tugas sudah dikumpulkan.",
          "images": []
        },
        {
          "title": "Lanjutkan HOTS sesuai urutan",
          "text": "Buka HOTS setelah persyaratannya terpenuhi. Tulis analisis, alasan, serta contoh yang diminta Guru. Periksa lalu kirim sebagai jawaban final.",
          "images": []
        },
        {
          "title": "Periksa status kiriman dan lanjutkan",
          "text": "Kembali ke rincian TP. Status kiriman menunjukkan tugas sudah terkumpul. Sumatif mengikuti syarat jalur; nilai TP final menunggu semua komponen wajib dinilai Guru.",
          "images": []
        }
      ],
      "result": "Resume dan HOTS final tercatat pada TP yang sesuai.",
      "important": "Siswa lulus Diagnostik boleh melewati Resume/HOTS. Jika halaman hanya berisi petunjuk baca sukarela, Anda tidak sedang berada pada formulir pengumpulan.",
      "coverage": "Arsip belum memuat formulir pengisian, konfirmasi kirim, atau hasil penilaian tugas pada jalur wajib.",
      "faq": [
        [
          "Form jawaban tidak ada",
          "Periksa jalur Diagnostik dan syarat materi. Pada jalur lulus, petunjuk dapat tampil untuk dibaca tanpa kewajiban pengumpulan."
        ],
        [
          "Sudah mengirim tetapi belum ada nilai",
          "Guru perlu menilai kiriman. Status Sementara tidak berarti jawaban otomatis bernilai nol."
        ]
      ]
    },
    {
      "id": "sumatif",
      "group": "Ujian & hasil",
      "title": "Ikuti Sumatif TP",
      "desc": "Selesaikan penilaian wajib pada setiap TP NonEsensial sesuai jalur belajar.",
      "prep": "Gunakan desktop/laptop, browser yang mendukung fullscreen, koneksi stabil, dan daya cukup.",
      "steps": [
        {
          "title": "Periksa syarat Sumatif",
          "text": "Buka rincian TP. Siswa lulus Diagnostik tetap wajib Sumatif. Siswa tidak lulus harus menuntaskan materi serta kiriman final Resume/HOTS terlebih dahulu.",
          "images": []
        },
        {
          "title": "Baca petunjuk dan mulai",
          "text": "Buka Sumatif ketika tersedia. Baca jumlah soal, durasi, KKM, dan persyaratan perangkat pada aplikasi. Jalankan pemeriksaan fullscreen sebelum percobaan dibuat.",
          "images": []
        },
        {
          "title": "Kerjakan tanpa berpindah fokus",
          "text": "Jawab setiap soal, perhatikan indikator tersimpan dan timer. Ikuti petunjuk jeda bila koneksi atau fullscreen terganggu.",
          "images": []
        },
        {
          "title": "Periksa lalu kirim jawaban",
          "text": "Tinjau soal yang belum dijawab dan gunakan aksi kirim/selesai sesuai konfirmasi aplikasi. Jangan menutup halaman sebelum memastikan status hasil.",
          "images": []
        },
        {
          "title": "Baca hasil dan status TP",
          "text": "Periksa Sumatif terbaik, nilai TP, dan status Final/Sementara. TP yang selesai tidak membuka percobaan normal baru.",
          "images": [
            {
              "file": "SISWA-08-STATUS-SUMATIF-HASIL-01.webp",
              "caption": "Contoh TP tuntas: jalur lulus Diagnostik, Sumatif 90,00, dan nilai TP Final.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Sumatif tercatat sah dan hasil tindak lanjutnya diketahui.",
      "important": "Nilai contoh 90,00 pada screenshot milik akun simulasi. Nilai dan KKM Anda mengikuti hasil serta pengaturan TP masing-masing.",
      "coverage": "Arsip memuat hasil Sumatif dari rincian TP. Petunjuk Sumatif baru dan ruang ujian aktif belum terekam."
    },
    {
      "id": "remedial",
      "group": "Ujian & hasil",
      "title": "Remedial & akses ulang",
      "desc": "Pilih tindak lanjut yang sesuai: perbaikan nilai atau pengganti tes yang terhenti.",
      "prep": "Baca status percobaan terakhir sebelum meminta bantuan.",
      "steps": [
        {
          "title": "Bedakan hasil sah dan tes tidak selesai",
          "text": "Jika Sumatif awal <b>selesai sah</b> tetapi nilainya di bawah KKM, ikuti satu kesempatan remedial yang disediakan. Jika tes terhenti tanpa skor sah, ikuti jalur akses ulang.",
          "images": []
        },
        {
          "title": "Ikuti remedial bila berhak",
          "text": "Buka kesempatan remedial pada TP sesuai petunjuk. Gunakan perangkat dan aturan keamanan Sumatif. Nilai yang dipakai adalah skor tertinggi antara tes awal sah dan remedial sah.",
          "images": []
        },
        {
          "title": "Ajukan akses ulang bila tes terhenti",
          "text": "Jika aplikasi menampilkan kebutuhan akses ulang Diagnostik/Sumatif, gunakan aksi permintaan yang tersedia pada TP tersebut. Jenis dan tahap tes ditentukan sistem; jangan meminta remedial untuk mengganti tes normal yang belum selesai.",
          "images": []
        },
        {
          "title": "Tunggu izin Guru dan lanjutkan tahap yang sama",
          "text": "Pantau status permintaan. Setelah diizinkan, kembali ke TP dan mulai pengganti tahap yang terhenti. Izin dipakai sekali dan tidak menghapus materi/tugas sah sebelumnya.",
          "images": []
        },
        {
          "title": "Periksa hasil akhir",
          "text": "Satu remedial sah tidak memberi remedial kedua. TP dapat berstatus selesai walaupun skor terbaik masih di bawah KKM. Jika ujian Pra-Semester bermasalah, ikuti jadwal Admin, bukan alur izin mandiri ini.",
          "images": []
        }
      ],
      "result": "Anda mengetahui jenis pengulangan yang sesuai dengan status tes.",
      "table": {
        "headers": [
          "Keadaan",
          "Yang dilakukan"
        ],
        "rows": [
          [
            "Diagnostik tidak selesai",
            "Minta akses ulang Guru untuk Diagnostik pengganti."
          ],
          [
            "Sumatif normal tidak selesai",
            "Minta akses ulang untuk Sumatif normal pengganti."
          ],
          [
            "Sumatif normal sah di bawah KKM",
            "Ikuti satu remedial nilai."
          ],
          [
            "Remedial terhenti",
            "Minta akses ulang tahap remedial yang sama, bukan kesempatan remedial baru."
          ],
          [
            "Pra-Semester dibatalkan",
            "Ikuti jadwal susulan yang ditetapkan Admin."
          ]
        ]
      },
      "coverage": "Screenshot formulir remedial dan permintaan akses ulang Siswa belum tersedia di arsip."
    },
    {
      "id": "keamanan",
      "group": "Ujian & hasil",
      "title": "Perangkat, fullscreen & koneksi",
      "desc": "Siapkan kondisi ujian agar jawaban dan waktu tercatat dengan benar.",
      "prep": "Baca petunjuk aktual di halaman ujian sebelum memulai.",
      "steps": [
        {
          "title": "Pilih perangkat yang sesuai",
          "text": "Sumatif dan Pra-Semester menggunakan desktop/laptop. Diagnostik dari HP hanya diperbolehkan bila pemeriksaan fullscreen berhasil.",
          "images": []
        },
        {
          "title": "Jaga layar penuh dan fokus",
          "text": "Masuk fullscreen melalui tombol aplikasi. Hindari berpindah tab, aplikasi, atau keluar fullscreen selama tes. Bila jeda muncul, ikuti tombol pemulihan yang tersedia.",
          "images": []
        },
        {
          "title": "Perhatikan indikator koneksi dan jawaban",
          "text": "Pastikan jawaban mendapat konfirmasi tersimpan. Jawaban ketika offline tidak otomatis dianggap tersimpan oleh server.",
          "images": []
        },
        {
          "title": "Ikuti batas yang tertulis pada ujian",
          "text": "Baca durasi, ambang jeda, dan status terbaru pada petunjuk akun Anda. Screenshot merupakan contoh historis; pengaturan efektif mengikuti layar ujian yang sedang Anda akses.",
          "images": []
        },
        {
          "title": "Baca status jika percobaan berakhir",
          "text": "Tes mandiri yang tidak selesai memerlukan akses ulang Guru. Pra-Semester mengikuti mekanisme susulan Admin. Laporkan kendala beserta nama TP/ujian dan pesan galat tanpa membagikan sandi.",
          "images": []
        }
      ],
      "result": "Perangkat siap dan cara menangani gangguan ujian dipahami.",
      "important": "Waktu materi dan pengamanan ujian berbeda. Membuka tab materi tidak sama dengan menjalankan sesi ujian.",
      "faq": [
        [
          "Fullscreen tidak berhasil",
          "Gunakan browser/perangkat yang mendukung dan ikuti pemeriksaan ulang. Jangan memulai lewat cara yang melewati persyaratan."
        ],
        [
          "Sudah kembali online tetapi tes tidak dapat dilanjutkan",
          "Periksa status percobaan; tes mungkin memerlukan izin akses ulang atau jadwal susulan sesuai jenisnya."
        ]
      ]
    },
    {
      "id": "pra-semester",
      "group": "Ujian & hasil",
      "title": "Ikuti ujian Pra-Semester",
      "desc": "Ujian tingkat semester dibuka sesuai jadwal Admin setelah semua TP NonEsensial selesai.",
      "prep": "Selesaikan seluruh TP NonEsensial semester terkait dan siapkan desktop/laptop.",
      "steps": [
        {
          "title": "Buka Pra-Semester dari semester terkait",
          "text": "Pada halaman semester, buka bagian atau tautan Pra-Semester. Periksa Gen–Mapel–Semester yang tampil.",
          "images": []
        },
        {
          "title": "Baca jadwal dan durasi",
          "text": "Perhatikan <b>jendela boleh mulai</b>, durasi, KKM, dan perangkat. Jadwal pada contoh adalah data demonstrasi, bukan jadwal yang berlaku bagi semua siswa.",
          "images": [
            {
              "file": "SISWA-09-PRA-SEMESTER-TERKUNCI-01.webp",
              "caption": "Contoh ujian belum dapat dimulai: TP belum seluruhnya selesai dan jadwal belum dibuka.",
              "pins": []
            }
          ]
        },
        {
          "title": "Penuhi semua syarat sebelum mulai",
          "text": "Jika masih terkunci, baca alasannya. Setelah syarat dan jadwal terpenuhi, lakukan pemeriksaan perangkat serta fullscreen lalu mulai melalui tombol aplikasi.",
          "images": []
        },
        {
          "title": "Kerjakan dan kirim sesuai timer pribadi",
          "text": "Waktu pengerjaan dihitung sejak Anda benar-benar mulai, bukan sejak jendela jadwal dibuka. Perhatikan indikator jawaban tersimpan dan kirim sesuai instruksi.",
          "images": []
        },
        {
          "title": "Ikuti hasil dan jadwal lanjutan",
          "text": "Hasil Pra-Semester berdiri sendiri. Remedial/susulan mengikuti jadwal serta peserta yang ditetapkan Admin; tidak dapat dimulai kapan saja.",
          "images": []
        }
      ],
      "result": "Pra-Semester diikuti sesuai syarat dan jadwal pada akun Anda.",
      "example": "<b>Contoh:</b> jendela boleh mulai 08.00–09.00, durasi 60 menit. Jika mulai 08.45, durasi dihitung dari 08.45. Batas jendela mulai bukan pemotongan otomatis durasi yang sudah dimulai.",
      "important": "Pra-Semester bukan syarat penerbitan sertifikat dan nilainya tidak dicetak dalam sertifikat.",
      "coverage": "Arsip memuat petunjuk Pra-Semester terkunci. Ruang ujian aktif, hasil sah, dan sesi remedial/susulan belum terekam."
    },
    {
      "id": "laporan",
      "group": "Laporan & akun",
      "title": "Baca nilai & Laporan Akademik",
      "desc": "Pantau progres dan komponen nilai tanpa menyamakan status selesai dengan nilai Final.",
      "prep": "Pilih mata pelajaran serta semester yang ingin dibaca.",
      "steps": [
        {
          "title": "Buka Laporan Akademik",
          "text": "Klik <b>Laporan Akademik</b> pada sidebar, lalu pilih paket/mapel–semester yang tersedia.",
          "images": [
            {
              "file": "SISWA-10-DAFTAR-LAPORAN-01.webp",
              "caption": "Daftar laporan yang dapat diakses akun Siswa.",
              "pins": []
            }
          ]
        },
        {
          "title": "Baca ringkasan progres semester",
          "text": "Perhatikan jumlah TP NonEsensial, jumlah selesai, dan persentase progres. Progres berbeda dari nilai TP.",
          "images": [
            {
              "file": "SISWA-10-RINCIAN-LAPORAN-01.webp",
              "caption": "Ringkasan semester serta awal rincian nilai.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa baris BAB dan TP",
          "text": "Baca jenis TP, progres, hasil Diagnostik, dan jalur. Esensial ditampilkan tanpa nilai. Resume/HOTS yang dilewati sesuai jalur bukan nilai nol.",
          "images": [
            {
              "file": "SISWA-10-RINCIAN-LAPORAN-02.webp",
              "caption": "Lanjutan rincian TP dan hasil Pra-Semester.",
              "pins": []
            }
          ]
        },
        {
          "title": "Geser tabel untuk membaca nilai di kanan",
          "text": "Gunakan gulir horizontal untuk Sumatif normal/remedial, Sumatif terbaik, serta nilai TP dan status Final/Sementara. Cocokkan barisnya agar tidak tertukar.",
          "images": [
            {
              "file": "SISWA-10-TABEL-NILAI-KANAN-01.webp",
              "caption": "Kolom nilai di sisi kanan tabel laporan.",
              "pins": []
            }
          ]
        },
        {
          "title": "Pisahkan hasil Pra-Semester",
          "text": "Baca panel Hasil Pra-Semester tersendiri. Tidak ada nilai akhir semester hasil penggabungan dengan nilai TP. Jika nilai tugas belum final, tunggu penilaian Guru atau tanyakan kiriman yang belum dinilai.",
          "images": []
        }
      ],
      "result": "Anda dapat membaca progres, nilai TP, dan hasil Pra-Semester dengan tepat.",
      "table": {
        "headers": [
          "Label",
          "Makna"
        ],
        "rows": [
          [
            "Selesai",
            "Tahap pembelajaran TP telah dituntaskan sesuai syarat."
          ],
          [
            "Final",
            "Komponen nilai wajib sudah lengkap dan hasilnya final."
          ],
          [
            "Sementara",
            "Masih ada penilaian/ketentuan yang belum final; bukan otomatis nol."
          ],
          [
            "Kosong / Belum Ada",
            "Belum tersedia skor; berbeda dari nilai 0 yang sah."
          ],
          [
            "Dilewati sesuai jalur",
            "Komponen tidak wajib karena lulus Diagnostik."
          ]
        ]
      }
    },
    {
      "id": "sertifikat",
      "group": "Laporan & akun",
      "title": "Buka & unduh sertifikat",
      "desc": "Sertifikat pribadi tersedia ketika syarat TP dan nilai final terpenuhi.",
      "prep": "Selesaikan seluruh TP NonEsensial dan pastikan semua penilaian wajib sudah Final.",
      "steps": [
        {
          "title": "Buka menu Sertifikat",
          "text": "Klik <b>Sertifikat</b> pada sidebar. Sistem memeriksa kelayakan dan menerbitkan atau memperbarui dokumen otomatis saat diakses.",
          "images": []
        },
        {
          "title": "Periksa syarat jika belum tersedia",
          "text": "Pastikan seluruh TP NonEsensial selesai, nilai wajib final, serta identitas dan tanda tangan madrasah siap. Jika belum ada, baca keterangan atau hubungi Guru/Admin.",
          "images": []
        },
        {
          "title": "Periksa dokumen milik Anda",
          "text": "Pilih sertifikat yang tersedia. Cocokkan identitas, mapel, semester, daftar BAB/TP, dan nilai. TP Esensial dicantumkan tanpa nilai.",
          "images": []
        },
        {
          "title": "Unduh PDF melalui aksi yang tersedia",
          "text": "Simpan dokumen untuk keperluan pribadi. Bila biodata atau nilai yang tercetak berubah secara sah, buka kembali menu Sertifikat untuk versi terbaru.",
          "images": []
        },
        {
          "title": "Gunakan versi yang berlaku",
          "text": "Nomor/QR versi lama tetap menjadi riwayat dengan status Digantikan. Gunakan dokumen yang berlaku setelah perbaikan identitas/nilai.",
          "images": []
        }
      ],
      "result": "Sertifikat pribadi yang berlaku dapat diperiksa dan diunduh bila layak.",
      "important": "Tidak perlu menunggu Pra-Semester. Nilai Pra-Semester dan nilai akhir semester tidak dicetak pada sertifikat.",
      "coverage": "Arsip screenshot Siswa tidak memuat halaman sertifikat. Langkah ini berdasarkan dokumen resmi; tidak ditampilkan gambar pengganti dari halaman lain."
    },
    {
      "id": "informasi",
      "group": "Laporan & akun",
      "title": "Pengumuman, Notifikasi & Bantuan",
      "desc": "Ikuti informasi madrasah dan temukan bantuan saat ada kendala.",
      "prep": "Periksa informasi secara berkala selama memakai aplikasi.",
      "steps": [
        {
          "title": "Buka menu Informasi & Bantuan",
          "text": "Klik menu tersebut untuk membuka submenu Pengumuman, Bantuan, dan Hubungi Admin.",
          "images": [
            {
              "file": "SISWA-12-SUBMENU-INFORMASI-01.webp",
              "caption": "Submenu Informasi & Bantuan pada akun Siswa.",
              "pins": []
            }
          ]
        },
        {
          "title": "Baca Pengumuman",
          "text": "Buka pengumuman yang ditujukan kepada Anda. Periksa judul dan isi sebelum menjalankan arahan pembelajaran.",
          "images": [
            {
              "file": "SISWA-12-PENGUMUMAN-01.webp",
              "caption": "Halaman Pengumuman Siswa.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa Notifikasi",
          "text": "Klik <b>Notifikasi</b> untuk pemberitahuan terkait kegiatan akun Anda. Daftar kosong berarti belum ada notifikasi.",
          "images": [
            {
              "file": "SISWA-12-NOTIFIKASI-01.webp",
              "caption": "Contoh daftar Notifikasi yang masih kosong.",
              "pins": []
            }
          ]
        },
        {
          "title": "Cari jawaban di Bantuan/FAQ",
          "text": "Buka <b>Bantuan</b>, lalu baca petunjuk dan pertanyaan yang sesuai kendala.",
          "images": [
            {
              "file": "SISWA-12-BANTUAN-FAQ-01.webp",
              "caption": "Pusat Bantuan untuk Siswa.",
              "pins": []
            },
            {
              "file": "SISWA-12-BANTUAN-FAQ-02.webp",
              "caption": "Lanjutan petunjuk dan FAQ Siswa.",
              "pins": []
            },
            {
              "file": "SISWA-12-BANTUAN-FAQ-03.webp",
              "caption": "Bagian akhir FAQ Siswa.",
              "pins": []
            }
          ]
        },
        {
          "title": "Hubungi Admin bila perlu",
          "text": "Gunakan kontak resmi pada <b>Hubungi Admin</b>. Sertakan nama halaman, kegiatan, dan pesan galat. Jangan membagikan kata sandi.",
          "images": [
            {
              "file": "SISWA-12-HUBUNGI-ADMIN-01.webp",
              "caption": "Halaman kontak resmi institusi.",
              "pins": []
            }
          ]
        }
      ],
      "result": "Informasi terkini dan jalur bantuan sudah ditemukan."
    },
    {
      "id": "profil",
      "group": "Laporan & akun",
      "title": "Profil, guru pengampu & keluar akun",
      "desc": "Periksa identitas akun dan pengaturan sandi yang tersedia.",
      "prep": "Gunakan akun sendiri; jaga kerahasiaan sandi terutama di perangkat bersama.",
      "steps": [
        {
          "title": "Buka Profil & peran",
          "text": "Klik <b>Profil & peran</b> pada sidebar. Baca nama resmi, username, Gen, dan semester mulai.",
          "images": [
            {
              "file": "SISWA-12-PROFIL-01.webp",
              "caption": "Identitas akun simulasi dan daftar Guru pengampu.",
              "pins": []
            }
          ]
        },
        {
          "title": "Periksa Guru pengampu",
          "text": "Baca Guru yang ditugaskan aktif pada Gen Anda. Gunakan informasi ini ketika perlu menanyakan pembelajaran atau nilai.",
          "images": []
        },
        {
          "title": "Minta Admin memperbaiki identitas resmi",
          "text": "Nama resmi, NISN/username, dan peran dikelola Admin. Jangan mengganti akun atau memakai data orang lain untuk memperbaiki identitas yang salah.",
          "images": []
        },
        {
          "title": "Ganti sandi melalui formulir jika diperlukan",
          "text": "Isi sandi saat ini, sandi baru, dan konfirmasi sesuai petunjuk halaman. Periksa pesan berhasil. Jangan menuliskan kata sandi di laporan kendala.",
          "images": [
            {
              "file": "SISWA-12-PROFIL-02.webp",
              "caption": "Lanjutan formulir ganti sandi; semua kolom pada contoh kosong.",
              "pins": []
            }
          ]
        },
        {
          "title": "Keluar setelah selesai",
          "text": "Gunakan tombol <b>Keluar</b>, terutama pada komputer bersama. Pastikan sesi berakhir sebelum meninggalkan perangkat.",
          "images": []
        }
      ],
      "result": "Identitas diketahui dan akun dapat digunakan dengan aman."
    }
  ]
};
