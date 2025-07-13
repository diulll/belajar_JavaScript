<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Belajar Tipe Data JavaScript (Polos)</title>
    <!-- Tidak ada link CSS atau styling di sini -->
</head>
<body>

    <h1>Hello JavaScript!</h1>
    <p>
        Mari kita pelajari berbagai jenis data (tipe data) di JavaScript.
        Lihat contoh dan penjelasannya langsung di bawah ini!
    </p>

    <!-- Area ini akan menampilkan hasil JavaScript langsung di halaman -->
    <div id="dataTypesOutput">
        <!-- JavaScript akan mengisi konten di sini -->
        Memuat contoh tipe data...
    </div>

    <script>
        // Mendapatkan elemen div tempat kita akan menampilkan output
        const dataTypesOutputDiv = document.getElementById('dataTypesOutput');

        // Fungsi untuk menambahkan bagian tipe data ke div output
        function addDataTypeSection(title, explanation, codeExample, value, type) {
            const sectionDiv = document.createElement('div');
            // Menambahkan gaya dasar inline untuk keterbacaan, tanpa kelas CSS eksternal
            sectionDiv.style.marginBottom = '15px';
            sectionDiv.style.paddingBottom = '15px';
            sectionDiv.style.borderBottom = '1px dashed #ccc';

            const titleElem = document.createElement('div');
            titleElem.style.fontWeight = 'bold';
            titleElem.style.marginBottom = '5px';
            titleElem.textContent = title;
            sectionDiv.appendChild(titleElem);

            const explanationElem = document.createElement('div');
            explanationElem.style.fontSize = '0.95em';
            explanationElem.style.color = '#555';
            explanationElem.style.marginBottom = '5px';
            explanationElem.innerHTML = explanation; // Menggunakan innerHTML untuk <br>
            sectionDiv.appendChild(explanationElem);

            const codeOutputElem = document.createElement('div');
            codeOutputElem.style.backgroundColor = '#f0f0f0';
            codeOutputElem.style.padding = '8px';
            codeOutputElem.style.borderRadius = '5px';
            codeOutputElem.style.border = '1px solid #e0e0e0';
            codeOutputElem.style.fontSize = '0.9em';
            codeOutputElem.innerHTML = `
                Kode: <code>${codeExample}</code><br>
                Nilai: <span>${JSON.stringify(value)}</span><br>
                Tipe: <span>${type}</span>
            `;
            sectionDiv.appendChild(codeOutputElem);

            dataTypesOutputDiv.appendChild(sectionDiv);

            // Juga tampilkan di konsol browser (tekan F12, lalu pilih tab "Console")
            console.log(`${title}:`);
            console.log(`  Kode: ${codeExample}`);
            console.log(`  Nilai: ${JSON.stringify(value)}`);
            console.log(`  Tipe: ${type}`);
            console.log('---');
        }

        // Membersihkan output awal
        dataTypesOutputDiv.innerHTML = '';

        console.log('--- Belajar Tipe Data JavaScript untuk Pemula ---');
        console.log('');

        // 1. TIPE DATA: STRING (Teks)
        let nama = "Dunia";
        addDataTypeSection(
            "Ini adalah contoh Tipe Data STRING (Teks)",
            "Digunakan untuk menyimpan kata atau kalimat. Selalu diapit tanda kutip (tunggal, ganda, atau backtick).",
            `let nama = "Dunia";`,
            nama,
            typeof nama
        );

        // 2. TIPE DATA: NUMBER (Angka)
        let angka = 123;
        let desimal = 45.67;
        addDataTypeSection(
            "Ini adalah contoh Tipe Data NUMBER (Angka)",
            "Digunakan untuk menyimpan angka, baik bilangan bulat maupun desimal. Tidak perlu tanda kutip.",
            `let angka = 123; let desimal = 45.67;`,
            angka,
            typeof angka
        );
        // Tambahan untuk desimal
        addDataTypeSection(
            "   (Lanjutan) NUMBER (Angka Desimal)",
            "JavaScript tidak membedakan angka bulat dan desimal secara ketat, keduanya adalah 'number'.",
            `let desimal = 45.67;`,
            desimal,
            typeof desimal
        );

        // 3. TIPE DATA: BOOLEAN (Benar/Salah)
        let isBenar = true;
        let isSalah = false;
        addDataTypeSection(
            "Ini adalah contoh Tipe Data BOOLEAN (Benar/Salah)",
            "Hanya memiliki dua nilai: `true` (benar) atau `false` (salah). Sangat penting untuk membuat keputusan dalam kode.",
            `let isBenar = true; let isSalah = false;`,
            isBenar,
            typeof isBenar
        );

        // 4. TIPE DATA: UNDEFINED (Belum Didefinisikan)
        let variabelKosong;
        addDataTypeSection(
            "Ini adalah contoh Tipe Data UNDEFINED (Belum Didefinisikan)",
            "Terjadi ketika Anda mendeklarasikan variabel (membuat 'kotak') tetapi belum memberinya nilai. JavaScript secara otomatis akan mengisinya dengan `undefined`.",
            `let variabelKosong;`,
            variabelKosong,
            typeof variabelKosong
        );

        // 5. TIPE DATA: NULL (Tidak Ada Nilai)
        let nilaiNull = null;
        addDataTypeSection(
            "Ini adalah contoh Tipe Data NULL (Tidak Ada Nilai)",
            "Ini adalah nilai yang Anda berikan secara sengaja untuk menunjukkan 'tidak ada nilai'. Berbeda dengan `undefined` yang otomatis, `null` ini Anda yang memasukkannya. <br><b>Penting:</b> `typeof null` akan menghasilkan 'object', ini adalah keunikan historis di JavaScript.",
            `let nilaiNull = null;`,
            nilaiNull,
            typeof nilaiNull
        );

        // 6. TIPE DATA: OBJECT (Kumpulan Data)
        // Ini adalah tipe data yang lebih kompleks, bisa berisi banyak data.
        // Array dan objek biasa adalah contoh Object.
        let dataOrang = {
            nama: "Alice",
            umur: 28
        };
        let daftarBuah = ["Apel", "Pisang", "Ceri"]; // Array juga Object
        addDataTypeSection(
            "Ini adalah contoh Tipe Data OBJECT (Kumpulan Data)",
            "Digunakan untuk menyimpan koleksi data yang lebih kompleks, seperti daftar barang atau informasi tentang seseorang. Objek bisa berisi banyak 'pasangan kunci-nilai'. Array (daftar berurutan) juga termasuk Object.",
            `let dataOrang = { nama: "Alice", umur: 28 };`,
            dataOrang,
            typeof dataOrang
        );
        addDataTypeSection(
            "   (Lanjutan) OBJECT (Array)",
            "Array adalah jenis Object yang menyimpan daftar item dalam urutan tertentu.",
            `let daftarBuah = ["Apel", "Pisang", "Ceri"];`,
            daftarBuah,
            typeof daftarBuah
        );

        // 7. TIPE DATA: FUNCTION (Fungsi)
        // Blok kode yang bisa dipanggil untuk melakukan tugas tertentu.
        function sapaPengguna(nama) {
            return `Halo, ${nama}!`;
        }
        addDataTypeSection(
            "Ini adalah contoh Tipe Data FUNCTION (Fungsi)",
            "Fungsi adalah blok kode yang bisa Anda beri nama dan panggil berulang kali untuk melakukan tugas tertentu. Meskipun `typeof`nya 'function', fungsi di JavaScript juga dianggap sebagai jenis Object.",
            `function sapaPengguna(nama) { /* ... */ }`,
            sapaPengguna,
            typeof sapaPengguna
        );
        console.log(`   Hasil pemanggilan fungsi sapaPengguna("Pengguna"): ${sapaPengguna("Pengguna")}`);


        // 8. TIPE DATA: SYMBOL (Unik dan Immutable - ES6)
        // Ini adalah tipe data yang lebih baru, setiap Symbol yang dibuat selalu unik.
        const idUnik = Symbol('deskripsi_unik');
        addDataTypeSection(
            "Ini adalah contoh Tipe Data SYMBOL (Unik)",
            "Tipe data ini digunakan untuk membuat 'kunci' atau pengenal yang benar-benar unik. Meskipun Anda membuat dua Symbol dengan deskripsi yang sama, keduanya akan tetap berbeda.",
            `const idUnik = Symbol('deskripsi_unik');`,
            idUnik.toString(), // Mengubah ke string agar bisa ditampilkan
            typeof idUnik
        );

        // 9. TIPE DATA: BIGINT (Angka Sangat Besar - ES11)
        // Untuk angka bulat yang sangat besar, di luar kemampuan 'Number' biasa.
        // Ditandai dengan 'n' di akhir angka.
        const populasiKota = 12345678901234567890n;
        addDataTypeSection(
            "Ini adalah contoh Tipe Data BIGINT (Angka Sangat Besar)",
            "Digunakan untuk merepresentasikan bilangan bulat yang sangat, sangat besar, melebihi batas yang bisa ditangani oleh tipe `Number` biasa. Anda menambahkan huruf 'n' di akhir angka untuk membuatnya menjadi BigInt.",
            `const populasiKota = 12345678901234567890n;`,
            populasiKota,
            typeof populasiKota
        );

        console.log('');
        console.log('--- Selesai Belajar Tipe Data JavaScript! ---');
    </script>

</body>
</html>
