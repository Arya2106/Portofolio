const projects = [
    {
    id: 1,
    title: "Peminjaman Buku",
    description: "Project Saya Kali ini Adalah Membuat Website Peminjaman Buku Bertujuan Untuk Membantu User Untuk Mengelola Buku Di Perpustakaan",
    image: "/assets/projects/perpustakaan.png",
    link : "https://github.com/Aditya-Pratama/portfolio"
    },
     {
    id: 2,
    title: "Pengaduan Masyarakat",
    description: "Project Saya Kali ini Adalah membuat Website Pengaduan Masyarakat Terhadap Pemerintah Bertujuan Untuk memudahkan Masyarkat untuk mengadukan keluhan di daerahnya",
    image: "/assets/projects/pengaduan-masyarakat.png",
    link : "https://github.com/Aditya-Pratama/portfolio"
    },
    {
    id: 3,
    title: "Warung Madura",
    description: "Project Saya Kali ini Adalah membuat Website Warung Madura Bertujuan untuk membantu mengelola daftar barang dan membuat data pembelian beserta mengelola akun",
    image: "/assets/projects/warung-app.png",
    link : "https://github.com/Aditya-Pratama/portfolio"
    },
     {
    id: 4,
    title: "Dashboard Monitor Realtime",
    description: "Dashboard Monitor Realtime ",
    image: "/assets/projects/monitor.png",
    link : "https://github.com/Aditya-Pratama/portfolio"
    },
     {
    id: 5,
    title: "Pemesanan VIlla Online",
    description: "Project Saya Kali ini Adalah membuat Website Pemesanan Villa Online Bertujuan untuk memudahkan pemesanan villa dan mengelola jadwal pemesanan",
    image: "/assets/projects/villa-app.jpeg",
    link : "https://github.com/Aditya-Pratama/portfolio"
    },
   
     {
    id: 6,
    title: "Weather App",
    description: "Mencoba Membuat Web Weather App dengan menggunakan API Open Weather Map",
    image: "/assets/projects/weatherApp.jpg",
    link : "https://github.com/Aditya-Pratama/portfolio"
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
    id : 2,
    position : "TEFA WIKRAMA",
    description : "-",
    company : "SMK WIKRAMA BOGOR",
    duration : "2025",
    },
    {
    id : 1,
    position : "Web Developer",
    description: "Berpengalaman sebagai Web Developer Intern di PT FourBest Synergi, mengerjakan pengembangan fitur, perbaikan bug, integrasi database, dan peningkatan performa aplikasi web.",
    company : "PT FourBest Synergi",
    duration : "2025 - Now",
    },

]

const skill = [
   {
    id: 1,
    title: "Javascript",
    description: "Javascript",
    image: "/next.svg",
    },
    {
    id: 2,
    title: "PHP",
    description: "HTML",
    image: "/next.svg",
    },
    {
    id: 3,
    title: "Laravel",
    description: "HTML",
    image: "/next.svg",
    },
        {
    id: 4,
    title: "fillament",
    description: "HTML",
    image: "/next.svg",
    },
        {
    id: 5,
    title: "CodeIgniter",
    description: "HTML",
    image: "/next.svg",
    },
        {
    id: 6,
    title: "React",
    description: "HTML",
    image: "/next.svg",
    },
    {
    id: 7,
    title: "NextJS",
    description: "HTML",
    image: "/next.svg",
    },
     {
    id: 8,
    title: "AI",
    description: "HTML",
    image: "/next.svg",
    },
    {
    id: 9,
    title: "PostgreSQL",
    description: "HTML",
    image: "/next.svg",
    },
    {
     id: 10,
    title: "MySql",
    description: "HTML",
    image: "/next.svg",
    }
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

export {projects, skill, experiences,sosmed,detailProjects};
