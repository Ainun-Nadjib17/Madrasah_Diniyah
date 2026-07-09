---

Tech yang di gunakan:
HTML,CSS dan js 


## 🏠 1. Folder: `/beranda`
**Agent:** `BerandaAgent`
**Fungsi:** Halaman utama sebagai pintu masuk pengunjung.

**Konten & Aset:**
- 🖼️ **Banner / Hero Image** + Deskripsi singkat lembaga
- 📢 **Informasi Unggulan** TPQ & MADIN
- 🔗 **Quick Link** → tombol langsung ke halaman Pendaftaran
- 📱 **Widget Sosial Media:** FB, YouTube, TikTok, IG, Website
- 🏛️ **Struktur Organisasi** (preview singkat)
- 📍 **Footer** (global)

---

## 🏢 2. Folder: `/profil`
**Agent:** `ProfilAgent`
**Fungsi:** Identitas lengkap lembaga, visi misi, dan kepengurusan.

**Sub-Konten:**
### 2.1 Identitas TPQ
- Nama Lembaga *(deskripsi)*
- Lokasi *(gambar peta/foto)*
- Tahun Berdiri *(gambar + deskripsi)*
- Pendiri *(foto + deskripsi)*
- Sejarah Singkat *(deskripsi)*

### 2.2 Visi & Misi
- Visi TPQ & MADIN *(deskripsi)*
- Misi TPQ & MADIN *(deskripsi)*

### 2.3 Struktur Kepengurusan TPQ
| Jabatan | Format |
|---|---|
| Kepala / Ketua | Foto + Deskripsi |
| Wakil Ketua | Foto + Deskripsi |
| Sekretaris | Foto + Deskripsi |
| Bendahara | Foto + Deskripsi |

### 2.4 Struktur Kepengurusan MADIN
| Jabatan | Format |
|---|---|
| Kepala / Ketua | Foto + Deskripsi |
| Wakil Ketua | Foto + Deskripsi |
| Sekretaris | Foto + Deskripsi |
| Bendahara | Foto + Deskripsi |

---

## 📝 3. Folder: `/pendaftaran`
**Agent:** `PendaftaranAgent`
**Fungsi:** Alur pendaftaran santri baru.

**Konten & Aset:**
- ✅ **Syarat Pendaftaran** → Link Form + Deskripsi
- 💰 **Biaya & Registrasi** → Gambar + Deskripsi rincian
- 🕐 **Jam Aktif Belajar** → Gambar jadwal + Deskripsi

---

## 📚 4. Folder: `/pendidikan`
**Agent:** `PendidikanAgent`
**Fungsi:** Sistem pembelajaran dan daftar pengajar.

**Konten & Aset:**
- 🎓 **Sistem Pendidikan MADIN** → Informasi deskripsi kurikulum
- 👨‍🏫 **Tenaga Pengajar TPQ** → List ustadz/ustadzah
  - Format: *Foto + Deskripsi profil pengajar*

---

## 🎯 5. Folder: `/kegiatan`
**Agent:** `KegiatanAgent`
**Fungsi:** Dokumentasi kegiatan rutin & fasilitas.

**Sub-Konten:**
### 5.1 Kegiatan Rutin
- Mingguan / Bulanan / Tahunan
- Format: *Foto + Deskripsi*

### 5.2 Ekstrakurikuler
- List ekskul aktif
- Format: *Foto + Deskripsi*

### 5.3 Fasilitas
- Daftar fasilitas TPQ & MADIN
- Format: *Foto + Deskripsi*

---

## 🏆 6. Folder: `/program-unggulan`
**Agent:** `ProgramUnggulanAgent`
**Fungsi:** Showcase program khas lembaga.

**Konten & Aset (tiap program = 1 card/section):**

| Program | Format |
|---|---|
| 📖 Tartil Qur'an | Foto + Deskripsi |
| 🥋 Pencak Silat | Foto + Deskripsi |
| 🎶 Al-Banjari | Foto + Deskripsi |

---

## 🖼️ 7. Folder: `/dokumentasi`
**Agent:** `DokumentasiAgent`
**Fungsi:** Galeri foto & portofolio prestasi.

**Sub-Konten:**
### 7.1 Dokumentasi TPQ
- Galeri foto kegiatan
- Format: *Foto + Caption deskripsi*

### 7.2 Dokumentasi Ekstrakurikuler
- Galeri foto ekskul
- Format: *Foto + Caption deskripsi*

### 7.3 Prestasi MADIN & TPQ
- Daftar pencapaian santri & lembaga
- Format: *Foto piala/sertifikat + Deskripsi prestasi*

---

## 📊 8. Folder: `/data`
**Agent:** `DataAgent`
**Fungsi:** Manajemen data internal & EMIS.

**Konten & Aset:**
- 👥 **Data Santri TPQ** → Foto + Deskripsi / tabel
- 🎓 **Data Alumni** → Foto + Deskripsi
- 📡 **Data EMIS** → Informasi & deskripsi status
- 🔗 **Link EMIS** → Tombol/link ke portal EMIS Kemenag

---

## 📞 9. Folder: `/kontak`
**Agent:** `KontakAgent`
**Fungsi:** Informasi kontak & lokasi.

**Konten & Aset:**
- 📱 **Kontak Person** (WhatsApp / Telepon)
- 📍 **Alamat Lengkap**
- 🗺️ **Embed Google Maps**
- 📧 **Email Lembaga**

---

## 🧩 10. Folder: `/_components` (Global)
**Agent:** `GlobalComponentAgent`
**Fungsi:** Komponen yang muncul di SEMUA halaman.

**Komponen:**
- 🔝 **Header / Navbar** → Menu: Beranda, Profil, Pendaftaran, Pendidikan, Kegiatan, Program Unggulan, Dokumentasi, Data, Kontak
- 🔻 **Footer** → Link navigasi, sosial media, copyright
- 📱 **Floating Sosmed** → FB, YouTube, TikTok, IG, Web

---

## 🛠️ Aturan Pengembangan (Rules)
1. ✅ **Setiap folder = 1 halaman** dengan route sesuai nama folder.
2. ✅ **Format konsisten:** Semua konten profil/pengajar/program WAJIB pakai pola `Foto/Gambar + Informasi Deskripsi`.
3. ✅ **Reusable component:** Header, Footer, Sosmed widget diambil dari `/_components`.
4. ✅ **Form pendaftaran:** Support 2 mode → *Embed PDF* atau *Link Form eksternal*.
5. ✅ **EMIS:** Harus ada tombol CTA jelas ke portal EMIS resmi.
6. ✅ **Responsive:** Semua halaman wajib mobile-friendly.

---

## 🗺️ Sitemap Ringkas