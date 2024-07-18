// Tambahkan event listener pada form dengan ID 'bmiForm' untuk mencegah submit default dan menghitung BMI
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dari submit default

    // Ambil nilai dari input berat dan tinggi
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    // Hitung BMI dan format hasilnya menjadi 1 desimal
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

    // Tampilkan hasil BMI
    document.getElementById('bmiValue').textContent = bmi;

    // Variabel untuk kategori BMI, pesan, saran, dan daftar penyakit
    let category = '';
    let message = '';
    let adviceMessage = '';
    let adviceContent = '';
    let diseasesList = document.getElementById('diseasesList');

    // Tentukan kategori, pesan, dan saran berdasarkan nilai BMI
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
        message = 'Anda memiliki berat badan kurang';
        adviceMessage = 'Hasil BMI di bawah 18.5';
        adviceContent = 'Cara terbaik untuk menambah berat badan adalah dengan meningkatkan asupan kalori makanan yang dikonsumsi dan melakukan latihan kekuatan.';
        diseasesList.innerHTML = `
            <h3>Beberapa penyakit yang berasal dari kurus</h3>
            <ul>
                <li>Sakit Jantung</li>
                <li>Tekanan Darah Tinggi</li>
                <li>Masalah Kesuburan</li>
            </ul>
            <button>Konsultasi Dokter Via Aplikasi</button>
            <button>Registrasi Online Sekarang</button>
        `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal (ideal)';
        message = 'Anda memiliki berat badan normal';
        adviceMessage = 'Hasil BMI diantara 18.5 dan 24.9';
        adviceContent = 'Pertahankan pola makan seimbang dan berolahraga secara teratur untuk menjaga berat badan ideal.';
        diseasesList.innerHTML = `
            <h3>Beberapa penyakit yang terhindar</h3>
            <ul>
                <li>Diabetes</li>
                <li>Hipertensi</li>
                <li>Sakit Jantung</li>
                <li>Osteoarthritis</li>
            </ul>
            <button>Konsultasi Dokter Via Aplikasi</button>
            <button>Registrasi Online Sekarang</button>
        `;
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan berat badan';
        message = 'Anda memiliki berat badan berlebih';
        adviceMessage = 'Hasil BMI diantara 25 dan 29.9';
        adviceContent = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.';
        diseasesList.innerHTML = `
            <h3>Beberapa penyakit yang berasal dari gemuk</h3>
            <ul>
                <li>Diabetes</li>
                <li>Hipertensi</li>
                <li>Sakit Jantung</li>
                <li>Osteoarthritis</li>
            </ul>
            <button>Konsultasi Dokter Via Aplikasi</button>
            <button>Registrasi Online Sekarang</button>
        `;
    } else {
        category = 'Kegemukan (Obesitas)';
        message = 'Anda mengalami obesitas';
        adviceMessage = 'Hasil BMI di atas 30';
        adviceContent = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.';
        diseasesList.innerHTML = `
            <h3>Beberapa penyakit yang berasal dari obesitas</h3>
            <ul>
                <li>Diabetes</li>
                <li>Hipertensi</li>
                <li>Sakit Jantung</li>
                <li>Osteoarthritis</li>
            </ul>
            <button>Konsultasi Dokter Via Aplikasi</button>
            <button>Registrasi Online Sekarang</button>
        `;
    }

    // Tampilkan kategori BMI, pesan, saran, dan daftar penyakit
    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('bmiMessage').textContent = message;
    document.getElementById('adviceMessage').textContent = adviceMessage;
    document.getElementById('adviceContent').textContent = adviceContent;
    document.getElementById('resultSection').style.display = 'block'; // Tampilkan bagian hasil
});

// Tambahkan event listener pada tombol reset untuk menyembunyikan bagian hasil
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('resultSection').style.display = 'none'; // Sembunyikan bagian hasil
});
