# Maafku Buat Kamu ❤️

Halaman apologi interaktif dengan tema pink romantis, countdown timer, dan integrasi WhatsApp.

## 🎨 Fitur

- ✨ Efek typing animation di pembuka
- 📸 Gallery foto dengan caption
- ⏱️ Countdown timer (hitung berapa lama jadian)
- 🎮 Tombol interaktif "Mau ❤️" dan "Gak!" (Gak tombol lari!)
- 💖 Efek confetti hati saat mengklik "Mau"
- 📱 Modal popup dengan redirect ke WhatsApp
- 📲 Mobile-first responsive design
- 🎭 Smooth section transitions

## 📁 Struktur Project

```
bucin/
├── maaf-sayang.html       # File HTML utama
├── css/
│   └── style.css          # Semua styling
├── js/
│   ├── script.js          # Semua logika JavaScript
│   ├── config.js          # Konfigurasi sensitif (gitignored)
│   └── config.example.js  # Template config
├── assets/
│   ├── c.jpeg             # Foto 1
│   ├── c2.jpeg            # Foto 2
│   ├── p.jpeg             # Foto 3
│   └── README.txt         # Panduan foto
├── .gitignore             # File untuk diabaikan Git
└── README.md              # File ini
```

## 🚀 Cara Menggunakan

### 1. Setup Awal

Clone atau download project ini:
```bash
git clone https://github.com/YOUR_USERNAME/maaf-sayang.git
cd maaf-sayang
```

### 2. Konfigurasi WhatsApp

Copy file template konfigurasi:
```bash
cp js/config.example.js js/config.js
```

Edit `js/config.js` dan masukkan nomor WhatsApp kamu:
```javascript
// Format internasional (tanpa +)
// Contoh Indonesia: 6281234567890 (ganti 0 di depan dengan 62)
window.WHATSAPP_NUMBER = "6281234567890";
window.WHATSAPP_MESSAGE = "Pesan custom kamu (opsional)";
```

### 3. Ganti Konten

Edit `maaf-sayang.html`:
- **Teks surat**: Cari `<div class="letter-text">` dan ganti isi
- **Tanggal jadian**: Cari `startedAt` di `js/script.js` dan ubah ke tanggal jadian
- **Foto**: Ganti file di folder `assets/`
- **Caption foto**: Ubah `photo-caption` di HTML

### 4. Buka di Browser

Buka `maaf-sayang.html` di browser atau hosting via XAMPP:
```
http://localhost/bucin/maaf-sayang.html
```

## 🎨 Customize

### Warna
Edit warna di `css/style.css` bagian `:root`:
```css
:root {
  --pink: #ffbad2;      /* Warna pink utama */
  --rose: #f0b7d5;      /* Warna rose */
  --accent: #b6739d;    /* Warna accent */
  /* ... */
}
```

### Typography
Font yang digunakan: **Caveat** (judul), **Quicksand** (body)
Ubah di `css/style.css` atau gunakan font lain dari Google Fonts

### Animasi
Durasi animasi bisa diatur di `css/style.js`:
- Transition section: `0.7s`
- Pulse hati: `1.8s`
- Confetti: `1.6s`

## 📱 Format Nomor WhatsApp

Pastikan nomor WhatsApp dalam format internasional:

| Negara | Format | Contoh |
|--------|--------|--------|
| Indonesia | `62xxxxxxxxxx` | `6281234567890` |
| USA | `1xxxxxxxxxx` | `12125552368` |
| UK | `44xxxxxxxxx` | `442071234567` |

**Tip**: Hapus `+` dan `0` di depan, ganti dengan kode negara (62 untuk Indonesia).

## 🐛 Troubleshooting

### Tombol WhatsApp tidak bekerja
- Pastikan `js/config.js` sudah dibuat dan nomor terisi
- Check browser console (F12 > Console) untuk error

### Foto tidak muncul
- Pastikan file ada di `assets/` folder
- Check nama file di HTML (`assets/c.jpeg`, `assets/c2.jpeg`, `assets/p.jpeg`)

### CSS/JS tidak load
- Buat folder `css/` dan `js/` jika belum ada
- Pastikan file ada: `css/style.css` dan `js/script.js`

## 🔒 Keamanan

File sensitif yang diabaikan Git:
- `js/config.js` - Nomor WhatsApp pribadi
- `.env` - Environment variables (jika perlu)

Lihat `.gitignore` untuk daftar lengkap.

## 💡 Tips

1. **Buat versi untuk berbeda orang**: Copy seluruh folder, ganti nama folder, dan update config
2. **Preview perubahan**: Reload browser (Ctrl+F5 untuk hard refresh)
3. **Test di mobile**: Buka di browser mobile atau gunakan device emulation (F12 > Toggle device toolbar)
4. **Share**: Host di GitHub Pages, Netlify, atau Vercel untuk link sharable

## 📜 License

Feel free to use, modify, and share untuk keperluan pribadi! 💕

## 🎁 Credits

- Font: [Google Fonts](https://fonts.google.com)
- Icons: Unicode emoji
- Inspirasi: Cinta dan kreativitas ✨

---

**Made with ❤️ by: [Your Name]**

> Update file ini dengan info kamu sebelum push ke GitHub!
