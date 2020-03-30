const dataFaq = [
  {
    title: 'Apa itu Novel Coronavirus (2019-nCoV)?',
    text:
      'Novel coronavirus (2019-nCoV) adalah jenis baru coronavirus yang belum pernah diidentifikasi sebelumnya pada manusia. Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit pada manusia dan hewan. Pada manusia menyebabkan penyakit mulai flu biasa hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom Pernapasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS). Pada 11 Februari 2020, World Health Organization (WHO) mengumumkan nama penyakit yang disebabkan 2019-nCov, yaitu Coronavirus Disease (COVID-19).',
  },
  {
    title: 'Bagaimana cara mencegah penularan COVID-19?',
    text:
      'Penularan terjadi melalui droplet (butir-butir tetesan cairan) dari hidung atau mulut yang menyebar saat pembawa virus COVID-19 batuk, bersin atau meler. Tetesan cairan tersebut akan menempel pada benda atau permukaan di sekitarnya. Dan kemudian masuk ke mulut, hidung atau mata. Atau menyentuh permukaan bekas terkena butir cairannya dengan tangan lalu tangan mengusap mulut, hidung atau mata. Inilah alasan pentingnya sering-sering cuci tangan dan jangan menyentuh muka dengan tangan.Orang sehat dapat tertular saat tangan mereka menyentuh permukaan yang terkena tetesan tersebut dan kemudian tanpa sadar menyentuh mata, mulut, ataupun hidung (selaput lendir). Virus juga bisa masuk saat orang sehat secara tidak sengaja menghirup tetesan cairan saat si pembawa virus batuk atau bersin. Kita harus bagaimana? \n\n Rajinlah mencuci tangan dengan sabun atau pembersih tangan berbasis alkohol minimal 60% Jaga jarak dengan orang yang tampak sakit sepanjang kurang lebih 1 meter. Jika sakit, pastikan untuk tidak menyebarkan virus ke orang lain dengan mengurangi bepergian. Ketika keluar rumah, pakailah masker. Jika bersin, tutup mulut dan hidung dengan tisu dan buang tisunya sesegera mungkin.',
  },
  {
    title:
      'Berapa lama tetesan cairan berisi virus itu bisa hidup di permukaan atau menempel pada benda? ',
    text:
      'Masih belum pasti berapa lama virus ini dapat bertahan di permukaan, tetapi tampaknya virus ini memiliki karakteristik yang sama dengan virus korona lainnya. Studi menunjukkan bahwa virus korona (termasuk beberapa informasi awal tentang COVID-19) dapat bertahan selama beberapa jam di permukaan. Ini dapat bervariasi di dalam kondisi yang berbeda (mis. jenis permukaan, suhu atau kelembaban lingkungan). Tetapi sabun maupun cairan disinfektan sederhana dapat membunuhnya.',
  },
  {
    title: 'Apa saja gejala COVID-19?',
    text:
      'Gejala umum berupa demam ≥38C, batuk, pilek, nyeri tenggorokan dan sesak napas. Jika ada orang dengan gejala tersebut pernah melakukan perjalanan ke Tiongkok (terutama Wuhan), atau pernah merawat/kontak dengan penderita COVID-19, maka terhadap orang tersebut akan dilakukan pemeriksaan laboratorium lebih lanjut untuk memastikan diagnosisnya.',
  },
  {
    title: 'Seberapa bahaya COVID-19 ini?',
    text:
      'Seperti penyakit pernapasan lainnya, infeksi 2019-nCoV dapat menyebabkan gejala ringan termasuk pilek, sakit tenggorokan, batuk, dan demam. Beberapa orang mungkin akan menderita sakit yang parah, seperti disertai pneumonia atau kesulitan bernafas. Walaupun fatalitas penyakit ini masih jarang, namun bagi orang yang berusia lanjut, dan orang-orang dengan kondisi medis yang sudah ada sebelumnya (seperti, diabetes dan penyakit jantung), mereka biasanya lebih rentan untuk menjadi sakit parah.',
  },
  {
    title: 'Bagaimana manusia bisa terinfeksi COVID-19?',
    text:
      'Sampai saat ini, belum diketahui bagaimana manusia bisa terinfeksi virus ini. Para ahli masih sedang melakukan penyelidikan untuk menentukan sumber virus, jenis paparan, cara penularan dan pola klinis serta perjalanan penyakit. Hasil penyelidikan sementara dari beberapa institusi di kota Wuhan, sebagian kasus terjadi pada orang yang bekerja di pasar hewan/ikan, namun belum dapat dipastikan jenis hewan penular virus ini. Hingga saat ini dilaporkan adanya penularan antar manusia yang terbatas (antar keluarga dekat dan petugas kesehatan yang merawat kasus).',
  },
  {
    title: 'Bisakah manusia terinfeksi novel coronavirus dari hewan?',
    text:
      'Saat ini sumber hewan penular COVID-19 belum diketahui, WHO terus menyelidiki berbagai kemungkinan jenis hewan penularnya. Sangat dimungkinkan hewan dari pasar hewan hidup di Tiongkok bertanggung jawab atas terinfeksinya manusia yang dilaporkan pertama kali. Untuk itu, disarankan pada saat berkunjung ke pasar hewan  hidup, hindari kontak langsung dengan hewan dan permukaan yang bersentuhan dengan hewan tanpa alat pelindung diri. \n Hindari juga konsumsi produk hewani mentah atau setengah matang. Penanganan daging mentah, susu, atau produk hewani harus diperhatikan, untuk menghindari kontaminasi silang dengan makanan mentah yang lain, lakukanlah dengan memperhatikan keamanan pangan yang baik.',
  },
  {
    title: 'Bisakah COVID-19 terdeteksi dari orang yang tidak menunjukkan gejala?',
    text:
      'Sangat penting untuk memahami kapan orang yang terinfeksi dapat menyebarkan virus ke orang lain untuk upaya pengendalian. Informasi medis terperinci dari orang yang terinfeksi diperlukan untuk menentukan periode infeksi COVID-19. Menurut laporan terbaru, ada kemungkinan orang yang terinfeksi COVID-19 dapat menular sebelum menunjukkan gejala yang signifikan. Namun, berdasarkan data yang tersedia saat ini, sebagian besar yang menyebabkan penyebaran adalah orang-orang yang memiliki gejala.',
  },
  {
    title:
      'Berapa lama waktu yang diperlukan sejak tertular/terinfeksi hingga muncul gejala COVID-19?',
    text:
      'Waktu yang diperlukan sejak tertular/terinfeksi hingga muncul gejala disebut masa inkubasi. Saat ini masa inkubasi COVID-19 diperkirakan antara 2-11 hari, dan perkiraan ini dapat berubah sewaktu-waktu sesuai perkembangan kasus. Berdasarkan data dari penyakit akibat coronavirus sebelumnya, seperti MERS dan SARS, masa inkubasi COVID-19 juga bisa mencapai 14 hari.',
  },
];

export { dataFaq };
