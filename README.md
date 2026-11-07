# MamiKost – Website Pencarian dan Reservasi Kost

MamiKost merupakan proyek pengembangan website frontend yang mengkloning dan terinspirasi dari website resmi [Mamikos](https://mamikos.com/), sebuah platform pencarian dan penyewaan kost di Indonesia.

Proyek ini dikembangkan sebagai bagian dari **Frontend Engineer Technical Test – MagangHub**. Aplikasi bertujuan menghadirkan pengalaman sederhana dalam mencari informasi kost, melihat detail properti, serta mengirimkan reservasi melalui formulir yang terhubung dengan REST API yang dikembangkan secara mandiri.

## Project Overview

- **Nama Proyek:** MamiKost
- **Jenis Proyek:** Website Clone / Inspired Project
- **Website Referensi:** [Mamikos.com](https://mamikos.com/)
- **Tujuan:** Frontend Engineer Technical Test – MagangHub
- **Repository GitHub:** [Mamikost-Project](https://github.com/ZulfaAkmal/Mamikost-Project)
- **Website Demo:** [https://mamikost.vercel.app](https://mamikost.vercel.app)
- **Backend API:** [https://mamikost-backend.vercel.app/api](https://mamikost-backend.vercel.app/api)

## Fitur Aplikasi

- Halaman utama responsif yang terinspirasi dari website Mamikos.
- Menampilkan daftar kost beserta informasi akomodasi.
- Halaman detail untuk menampilkan informasi kost.
- Formulir reservasi atau pengajuan informasi kost.
- Pengambilan data kost secara dinamis melalui REST API.
- Pengiriman data reservasi melalui POST API.
- Penanganan loading dan error pada pengambilan data API.
- Notifikasi keberhasilan dan kegagalan pengiriman formulir.
- Validasi input pada formulir reservasi.
- Penanganan kesalahan koneksi ketika API tidak dapat diakses.

## Teknologi yang Digunakan

### 1. Frontend

- React.js
- Vite
- JavaScript (ES6+)
- React Router DOM
- HTML5
- CSS3
- Tailwind CSS
- Lucide React

### 2. Backend

- Node.js
- Express.js
- REST API
- CORS
- JSON

### 3. Pengelolaan Data

- JavaScript Static Data (`kosts.js`)
- In-memory storage untuk data reservasi
- Tidak menggunakan database eksternal

### 4. Development Tools

- Visual Studio Code
- Git
- GitHub
- npm
- Vercel

### 5. AI-Assisted Development

- ChatGPT
- Google Gemini

AI digunakan untuk membantu proses perencanaan proyek, pembuatan dan pengembangan kode, panduan implementasi, debugging, serta penyempurnaan antarmuka. Kode yang dihasilkan melalui AI ditinjau, diuji, dan disesuaikan selama proses pengembangan.

## Struktur Project

```text
mamikost/
│
├── backend/
│   ├── controllers/
│   │   ├── kostController.js
│   │   └── inquiryController.js
│   │
│   ├── data/
│   │   └── kosts.js
│   │
│   ├── routes/
│   │   ├── kostRoutes.js
│   │   └── inquiryRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── BookingModal.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   └── ...
│   │
│   ├── assets/
│   │   └── ...
│   │
│   ├── css/
│   │   └── ...
│   │
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

## Dokumentasi API

Backend menyediakan dua endpoint utama untuk mendukung pengambilan data kost dan pengiriman reservasi.

### 1. GET – Daftar Kost

**Endpoint:**

```http
GET /api/kosts
```

Digunakan untuk mengambil daftar kost yang tersedia dari backend.

**Contoh Request:**

```http
GET https://mamikost-backend.vercel.app/api/kosts
```

**Contoh Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Kost Green Residence",
      "price": 1500000
    }
  ]
}
```

Response di atas merupakan ilustrasi struktur data. Data aktual berisi informasi kost yang tersedia pada aplikasi.

### 2. POST – Pengiriman Reservasi

**Endpoint:**

```http
POST /api/inquiries
```

Digunakan untuk mengirimkan data reservasi kost melalui formulir pada halaman detail kost.

**Contoh Request:**

```http
POST https://mamikost-backend.vercel.app/api/inquiries
Content-Type: application/json
```

**Request Body:**

```json
{
  "kostId": 1,
  "name": "Akmal Testing",
  "phone": "081234567890",
  "startDate": "2026-12-01",
  "duration": "3",
  "message": "Saya ingin melakukan reservasi kost."
}
```

**Response Berhasil (201 Created):**

```json
{
  "success": true,
  "message": "Reservasi berhasil dikirim.",
  "data": {
    "id": 1,
    "kostId": 1,
    "name": "Akmal Testing",
    "phone": "081234567890",
    "startDate": "2026-12-01",
    "duration": 3,
    "message": "Saya ingin melakukan reservasi kost.",
    "createdAt": "2026-11-07T00:00:00.000Z"
  }
}
```

**Response Validasi Error (400 Bad Request):**

```json
{
  "success": false,
  "message": "Nama, nomor telepon, tanggal mulai, durasi, dan kost wajib diisi."
}
```

Pesan error dapat berbeda sesuai jenis input yang tidak valid.

## Frontend Request States

Frontend menangani beberapa kondisi selama proses komunikasi dengan backend:

| Request | Kondisi |
|---|---|
| GET | Loading |
| GET | Error |
| POST | Success |
| POST | Validation Error |
| POST | Network Error |

Penanganan kondisi tersebut bertujuan memberikan informasi yang jelas kepada pengguna ketika data sedang dimuat, berhasil dikirim, atau mengalami kegagalan.

## Instalasi dan Menjalankan Project

### Prasyarat

Pastikan perangkat telah memiliki:

- Node.js
- npm
- Git

### 1. Clone Repository

```bash
git clone https://github.com/ZulfaAkmal/Mamikost-Project.git
```

Masuk ke direktori project:

```bash
cd Mamikost-Project
```

### 2. Instalasi Frontend

Pada direktori utama project, jalankan:

```bash
npm install
```

### 3. Instalasi Backend

Masuk ke direktori backend:

```bash
cd backend
npm install
```

### 4. Menjalankan Backend

Pada direktori backend, jalankan:

```bash
npm run dev
```

Backend berjalan pada:

```text
http://localhost:5000
```

### 5. Menjalankan Frontend

Buka terminal baru pada direktori utama project, kemudian jalankan:

```bash
npm run dev
```

Frontend dapat diakses melalui alamat yang ditampilkan oleh Vite, biasanya:

```text
http://localhost:5173
```

Frontend dan backend dijalankan secara terpisah selama pengembangan lokal.

**Local API Base URL:**

```text
http://localhost:5000/api
```

## Pengelolaan dan Penyimpanan Data

Project ini menggunakan data statis berbasis JavaScript dan penyimpanan sementara untuk pengajuan reservasi.

- Data daftar kost disimpan dalam file `backend/data/kosts.js`.
- Data reservasi disimpan menggunakan in-memory storage pada backend.
- Data reservasi tidak disimpan secara permanen.
- Data reservasi dapat hilang ketika proses backend dimulai ulang atau ketika instance backend berubah.
- Project tidak menggunakan database eksternal seperti MySQL atau PostgreSQL.

Pendekatan ini digunakan untuk memenuhi kebutuhan technical test yang memperbolehkan penyimpanan sementara tanpa database permanen.

## Deployment

Aplikasi frontend dan backend dideploy menggunakan Vercel.

- **Frontend:** [https://mamikost.vercel.app](https://mamikost.vercel.app)
- **Backend API:** [https://mamikost-backend.vercel.app/api](https://mamikost-backend.vercel.app/api)
- **GitHub Repository:** [https://github.com/ZulfaAkmal/Mamikost-Project](https://github.com/ZulfaAkmal/Mamikost-Project)

Frontend production terhubung dengan backend production melalui konfigurasi environment variable:

```env
VITE_API_BASE_URL=https://mamikost-backend.vercel.app/api
```

Dengan konfigurasi tersebut, frontend dapat mengambil data kost dan mengirimkan reservasi melalui backend yang telah dideploy.

## Pengujian Aplikasi

Pengujian dilakukan untuk memastikan fitur utama aplikasi berjalan sesuai dengan kebutuhan.

- GET API Success Testing
- GET API Error Testing
- POST API Success Testing
- POST API Validation Error Testing
- POST API Network Error Testing

Pengujian mencakup pemeriksaan respons API, validasi formulir, penanganan loading, serta penanganan kesalahan komunikasi dengan backend.

## Catatan Proyek

MamiKost merupakan proyek independen untuk keperluan edukasi dan technical assessment yang mengkloning website resmi Mamikos sebagai referensi. Proyek ini tidak berafiliasi atau memiliki hubungan resmi dengan Mamikos.

Fokus utama pengembangan meliputi implementasi frontend menggunakan React.js, integrasi REST API, penanganan request, validasi formulir, dasar pengembangan backend menggunakan Express.js, serta pemanfaatan AI dalam proses pengembangan.

---

**Dikembangkan untuk:** MagangHub – Frontend Engineer Technical Test

**Nama Proyek:** MamiKost

**Developer:** Zulfa Bahrul Akmal