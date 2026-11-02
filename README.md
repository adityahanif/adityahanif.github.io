# adityahanif.github.io

Website pribadi Aditya Hanif — live di https://adityahanif.github.io/

Satu halaman statis murni HTML + CSS + JavaScript vanilla (tanpa framework, tanpa build step):

- **Hero** — nama, peran (Data Science • Web Tools Builder • Digital Marketing), tautan sosial
- **Tentang** — latar belakang dan pendekatan kerja
- **Keahlian** — daftar skill
- **Portofolio** — 8 proyek nyata dengan filter kategori (Web App / Desktop / Tools & Ekstensi) dan tautan demo live / GitHub yang terverifikasi
- **Kontak** — email dan LinkedIn

Mode gelap lembut secara default dan mode terang otomatis mengikuti `prefers-color-scheme` perangkat.

## Menjalankan lokal

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## Struktur

```
index.html   → seluruh konten (portofolio ditulis langsung di HTML agar tetap tampil tanpa JS)
style.css    → semua gaya
script.js    → tahun footer, menu mobile, filter portofolio
```

Catatan: naikkan query `?v=` pada `style.css` / `script.js` di `index.html` setiap kali file itu diubah, agar browser pengunjung tidak memakai salinan lama dari cache GitHub Pages.
