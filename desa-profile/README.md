# Website Profil Padukuhan Panjul

Website profil padukuhan modern dan responsif yang dibangun menggunakan **Astro** dan **Tailwind CSS**.

## 🚀 Cara Menjalankan Project

Pastikan Anda sudah menginstal **Node.js**.

1. Buka terminal dan masuk ke folder proyek ini.
2. Instal dependencies (jika belum):
   ```bash
   npm install
   ```
3. Jalankan server lokal untuk masa pengembangan:
   ```bash
   npm run dev
   ```
4. Buka browser dan akses URL yang tertera di terminal (biasanya `http://localhost:4321`).

## 🛠 Cara Membangun dan Deploy

Untuk mem-build website menjadi file HTML statis yang siap di-deploy ke hosting (Cloudflare Pages, Vercel, Netlify, atau cPanel biasa):

```bash
npm run build
```

Hasil build akan berada di dalam folder `dist/`. Anda tinggal mengunggah isi folder `dist/` ke server hosting Anda.

## 📝 Panduan Mengubah Data

Website ini dirancang agar Anda bisa mengubah konten tanpa perlu mengerti banyak soal kode. Berikut daftar file yang perlu Anda edit:

### 1. Data Statis & Kontak
Ubah file ini untuk mengganti Nama, Visi, Misi, Data Wilayah, dan Kontak (WhatsApp, Email, Alamat, dll).
* **Buka file:** `src/data/desa.ts`

### 2. Data Perangkat Desa (Pemerintahan)
Untuk menambah/mengubah data Dukuh atau perangkat lainnya:
* **Buka folder:** `src/content/perangkat/`
* **Cara ubah:** Edit file `.md` yang ada atau buat file `.md` baru mengikuti format yang sudah ada.

### 3. Data UMKM / Potensi
Untuk menambah daftar produk warga atau UMKM unggulan:
* **Buka folder:** `src/content/umkm/`

### 4. Data Fasilitas
Untuk menambah data Masjid, Sekolah, Posyandu, dll:
* **Buka folder:** `src/content/fasilitas/`

### 5. Data Kegiatan
Untuk menambah jadwal kegiatan atau organisasi warga:
* **Buka folder:** `src/content/kegiatan/`

### 6. Galeri Foto
Untuk menambah foto-foto ke halaman galeri:
* **Buka folder:** `src/content/galeri/`

> **Catatan:** Saat ini sebagian besar foto menggunakan gambar *placeholder* (https://placehold.co). Anda dapat mengganti URL gambar tersebut dengan link gambar Anda sendiri, atau menyimpan gambar Anda di folder `public/` dan menggunakan path seperti `/foto-kades.jpg`.
