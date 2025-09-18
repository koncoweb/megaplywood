# Struktur Folder Aset Gambar - MegaPlywood Indonesia

## 📁 Struktur Folder

```
public/images/
├── static/                 # Gambar statis yang tidak berubah
│   ├── logos/             # Logo perusahaan dan brand assets
│   ├── products/          # Gambar produk plywood
│   ├── hero/              # Gambar untuk hero section
│   ├── gallery/           # Galeri foto perusahaan
│   └── icons/             # Ikon custom dan favicon
│
└── dynamic/               # Gambar dinamis yang berubah
    ├── blog/              # Gambar artikel blog
    ├── news/              # Gambar berita dan press release
    ├── projects/          # Gambar proyek pelanggan
    └── user-uploads/      # Upload dari user (samples, dll)
```

## 📋 Panduan Penggunaan

### **Static Images**
Gambar statis digunakan untuk elemen yang jarang berubah:
- **logos/**: Logo perusahaan, watermark, brand assets
- **products/**: Foto produk plywood, spesifikasi visual
- **hero/**: Background hero section, banner utama
- **gallery/**: Galeri showroom, fasilitas, tim
- **icons/**: Favicon, ikon custom, social media icons

### **Dynamic Images**
Gambar dinamis untuk konten yang sering berubah:
- **blog/**: Header artikel, gambar ilustrasi blog
- **news/**: Gambar berita, press release
- **projects/**: Foto proyek pelanggan, case study
- **user-uploads/**: Upload dari customer (samples, testimoni)

## 🎨 Spesifikasi Gambar

### **Format yang Didukung:**
- JPEG (.jpg, .jpeg) - untuk foto dengan warna banyak
- PNG (.png) - untuk gambar dengan transparansi
- WebP (.webp) - untuk optimasi performa
- SVG (.svg) - untuk ikon dan logo vektor

### **Ukuran Rekomendasi:**
- **Hero Images**: 1920x1080px (16:9)
- **Product Images**: 800x600px (4:3)
- **Logo**: 400x400px (1:1) atau sesuai aspek ratio
- **Gallery**: 1200x800px (3:2)
- **Blog/News**: 1200x630px (1.91:1)

## 🚀 Cara Menggunakan

### **Static Images:**
```jsx
import Image from 'next/image'

// Logo
<Image src="/images/static/logos/logo-main.png" alt="MegaPlywood" />

// Product
<Image src="/images/static/products/plywood-construction.jpg" alt="Plywood Konstruksi" />

// Hero Background
<Image src="/images/static/hero/factory-background.jpg" alt="Pabrik Plywood" />
```

### **Dynamic Images:**
```jsx
// Blog
<Image src="/images/dynamic/blog/article-header.jpg" alt="Artikel" />

// News
<Image src="/images/dynamic/news/company-news.jpg" alt="Berita" />

// User Upload
<Image src="/images/dynamic/user-uploads/sample-request.jpg" alt="Sample" />
```

## 📝 Best Practices

1. **Optimasi Gambar**: Gunakan Next.js Image component untuk optimasi otomatis
2. **Naming Convention**: Gunakan nama file yang deskriptif dan konsisten
3. **Alt Text**: Selalu sertakan alt text untuk accessibility
4. **File Size**: Kompres gambar untuk performa optimal
5. **Responsive**: Sediakan berbagai ukuran untuk responsive design

## 🔧 Maintenance

- **Static Images**: Update sesuai kebutuhan brand dan produk
- **Dynamic Images**: Regular cleanup untuk menghindari file yang tidak terpakai
- **Backup**: Backup regular untuk gambar penting
- **CDN**: Pertimbangkan CDN untuk gambar yang sering diakses

---
*Dokumentasi ini akan diperbarui sesuai perkembangan proyek MegaPlywood Indonesia*
