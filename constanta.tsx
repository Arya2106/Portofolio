// Project yang sudah live dan dipakai orang — tampil paling atas di section Project.
const featuredProject = {
    title: "Ngalenyap",
    tagline: "Sewa villa privat di Puncak & Cisarua, Bogor",
    description: "Website untuk bisnis sewa villa di kawasan Puncak. Tamu bisa cek villa yang masih kosong berdasarkan tanggal check-in dan check-out, lihat kalender ketersediaan, lalu lanjut booking lewat chat admin.",
    image: "/assets/projects/ngalenyap.png",
    url: "https://ngalenyap.site",
    domain: "ngalenyap.site",
    stack: ["Laravel", "Alpine.js", "Tailwind CSS", "Vite"],
    features: [
        "Cek villa kosong berdasarkan tanggal",
        "Kalender ketersediaan villa",
        "Tiga bahasa: Indonesia, Inggris, Arab",
        "Galeri, artikel & panduan booking",
        "Program affiliate",
    ],
}

const projects = [
    {
    id: 1,
    title: "Pemesanan Villa Online",
    description: "Booking villa dan pengaturan jadwal menginap, lengkap dengan pembayaran lewat Midtrans dan panel admin.",
    image: "/assets/projects/villa-app.jpeg",
    year: "2025",
    stack: ["Laravel", "Filament", "MySQL", "Midtrans"],
    },
    {
    id: 2,
    title: "Dashboard Monitor Realtime",
    description: "Dashboard untuk memantau data secara langsung, dengan grafik dan notifikasi saat ada nilai yang perlu diperhatikan.",
    image: "/assets/projects/monitor.png",
    year: "2024",
    stack: ["React", "Node.js", "WebSocket"],
    },
    {
    id: 3,
    title: "Peminjaman Buku",
    description: "Sistem perpustakaan untuk meminjam, mengembalikan, dan mencari buku, plus pengingat jatuh tempo dan rekap peminjaman.",
    image: "/assets/projects/perpustakaan.png",
    year: "2024",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    },
    {
    id: 4,
    title: "Pengaduan Masyarakat",
    description: "Warga bisa melapor keluhan di daerahnya secara online dan memantau status laporannya sampai ditindaklanjuti.",
    image: "/assets/projects/pengaduan-masyarakat.png",
    year: "2024",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    },
    {
    id: 5,
    title: "Warung Madura",
    description: "Pencatatan stok barang, transaksi pembelian, dan akun pengguna untuk membantu pemilik warung mengelola jualan harian.",
    image: "/assets/projects/warung-app.png",
    year: "2024",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    },
    {
    id: 6,
    title: "Weather App",
    description: "Cari cuaca berdasarkan nama kota: suhu, kelembapan, dan kondisi cuaca dari OpenWeatherMap API.",
    image: "/assets/projects/weatherApp.jpg",
    year: "2024",
    stack: ["JavaScript", "HTML", "CSS", "OpenWeatherMap"],
    }
]

const detailProjects = [
  {
    id: 1,
    title: "Peminjaman Buku",
    description: "Aplikasi manajemen perpustakaan berbasis web yang memungkinkan pengguna untuk meminjam, mengembalikan, dan mencari buku secara digital. Dilengkapi dengan sistem notifikasi jatuh tempo dan laporan rekap peminjaman.",
    image: "/assets/projects/perpustakaan.png",
    images: [],
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    features: ["Manajemen data buku & anggota", "Sistem peminjaman & pengembalian", "Notifikasi jatuh tempo", "Laporan rekap peminjaman"],
    link: "https://github.com/Arya2106",
    demoUrl: null,
    role: "Full Stack Developer",
    duration: "1 bulan",
    year: "2024",
    status: "Completed",
  },
  {
    id: 2,
    title: "Pengaduan Masyarakat",
    description: "Website pengaduan masyarakat terhadap pemerintah yang memudahkan warga untuk melaporkan keluhan di daerahnya secara online. Dilengkapi fitur tracking status laporan.",
    image: "/assets/projects/pengaduan-masyarakat.png",
    images: [],
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    features: ["Form pengaduan online", "Tracking status laporan", "Dashboard admin", "Notifikasi update status"],
    link: "https://github.com/Arya2106",
    demoUrl: null,
    role: "Full Stack Developer",
    duration: "1 bulan",
    year: "2024",
    status: "Completed",
  },
  {
    id: 3,
    title: "Warung Madura",
    description: "Aplikasi manajemen warung berbasis web untuk mengelola daftar barang, data pembelian, dan akun pengguna. Membantu pemilik warung dalam pencatatan stok dan transaksi harian.",
    image: "/assets/projects/warung-app.png",
    images: [],
    techStack: ["Laravel", "MySQL", "Tailwind CSS"],
    features: ["Manajemen stok barang", "Pencatatan transaksi pembelian", "Manajemen akun pengguna", "Laporan penjualan"],
    link: "https://github.com/Arya2106",
    demoUrl: null,
    role: "Full Stack Developer",
    duration: "1 bulan",
    year: "2024",
    status: "Completed",
  },
  {
    id: 4,
    title: "Dashboard Monitor Realtime",
    description: "Dashboard monitoring realtime untuk memantau data secara langsung dengan tampilan yang informatif dan mudah dipahami.",
    image: "/assets/projects/monitor.png",
    images: [],
    techStack: ["React", "Node.js", "WebSocket"],
    features: ["Monitor data realtime", "Visualisasi grafik", "Alert notifikasi", "Responsive layout"],
    link: "https://github.com/Arya2106",
    demoUrl: null,
    role: "Frontend Developer",
    duration: "2 minggu",
    year: "2024",
    status: "Completed",
  },
  {
    id: 5,
    title: "Pemesanan Villa Online",
    description: "Website pemesanan villa online yang memudahkan tamu untuk memesan villa dan mengelola jadwal pemesanan secara digital. Dilengkapi dengan sistem pembayaran dan konfirmasi booking.",
    image: "/assets/projects/villa-app.jpeg",
    images: [],
    techStack: ["Laravel", "Filament", "MySQL", "Midtrans"],
    features: ["Pemesanan villa online", "Manajemen jadwal & ketersediaan", "Integrasi pembayaran Midtrans", "Panel admin Filament"],
    link: "https://github.com/Arya2106",
    demoUrl: null,
    role: "Full Stack Developer",
    duration: "2 bulan",
    year: "2025",
    status: "Completed",
  },
  {
    id: 6,
    title: "Weather App",
    description: "Aplikasi cuaca berbasis web yang menampilkan informasi cuaca terkini menggunakan OpenWeatherMap API. Pengguna dapat mencari cuaca berdasarkan nama kota.",
    image: "/assets/projects/weatherApp.jpg",
    images: [],
    techStack: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
    features: ["Cari cuaca by kota", "Tampilan suhu & kelembaban", "Ikon kondisi cuaca", "Responsive design"],
    link: "https://github.com/Arya2106",
    demoUrl: null,
    role: "Frontend Developer",
    duration: "1 minggu",
    year: "2024",
    status: "Completed",
  },
]



const experiences = [
    {
    id : 1,
    position : "Web Developer",
    description: "Mengerjakan pengembangan fitur, perbaikan bug, integrasi database, dan peningkatan performa aplikasi web.",
    company : "PT FourBest Synergi",
    duration : "2025 — Sekarang",
    },
    {
    id : 2,
    position : "TEFA Wikrama",
    description : "",
    company : "SMK Wikrama Bogor",
    duration : "2025",
    },
]

const skillGroups = [
    { label: "Backend", items: ["PHP", "Laravel", "Filament", "CodeIgniter", "Golang"] },
    { label: "Frontend", items: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Alpine.js"] },
    { label: "Database", items: ["MySQL", "PostgreSQL"] },
    { label: "Lainnya", items: ["Midtrans", "REST API", "WebSocket", "AI tools"] },
]

const sosmed = [
    {
        id :1,
        title: "Github",
        image: "/assets/sosmed/github.png",
        link : "https://github.com/Arya2106"
    },
    {
        id :2,
        title: "Tiktok",
        image: "/assets/sosmed/tiktok.png",
        link : "https://www.tiktok.com/@rya21108?_r=1&_t=ZS-96rsJT6jPlt"
    },
    {
        id :3,
        title: "Instagram",
        image: "/assets/sosmed/instagram.png",
        link : "https://www.instagram.com/ryaa.211?igsh=MXBzOXFvZHNxN3luMg%3D%3D&utm_source=qr"
    },
    {
        id :4,
        title: "Linkedin",
        image: "/assets/sosmed/linkedin.png",
        link : "https://www.linkedin.com/in/muhamad-arya-saputra-58740b413/?skipRedirect=true"
    },
]

export {featuredProject, projects, skillGroups, experiences, sosmed, detailProjects};
