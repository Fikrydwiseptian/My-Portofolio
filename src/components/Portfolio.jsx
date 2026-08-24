import React, { useState, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  User,
  ChevronLeft,
  ChevronRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Code2,
  Server,
  Palette,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Sparkles,
  Globe,
  FolderKanban,
  Terminal,
  Layers,
  Award,
  ShieldCheck,
  FileCheck2,
  Building2,
  Zap,
  PlayCircle,
  BadgeCheck,
  Camera,
  Image as ImageIcon,
  ZoomIn,
  Users,
} from "lucide-react";

import fotoFikry from "../assets/tim/fikry.jpeg";
import logoSucofindo from "../assets/images/Sucofindo_Putih.png";
import logoIdsurvey from "../assets/images/logo_IDSURVEY.png";
import logoDanantara from "../assets/images/Logo_Danantara.png";

// Import Foto Bersama Client
import clientPhoto1 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.43.jpeg";
import clientPhoto2 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.45.jpeg";
import clientPhoto3 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.45 (1).jpeg";
import clientPhoto4 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.46.jpeg";
import clientPhoto5 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.46 (1).jpeg";
import clientPhoto6 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.46 (2).jpeg";
import clientPhoto7 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.47 (1).jpeg";
import clientPhoto8 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.48.jpeg";
import clientPhoto9 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.49.jpeg";
import clientPhoto10 from "../assets/Foto Bersama Klient/WhatsApp Image 2026-08-24 at 10.08.51.jpeg";

// Import Foto Pengalaman & Inspeksi Lapangan
import expPhoto1 from "../assets/Foto Pengalaman/WhatsApp Image 2026-08-24 at 10.08.48 (2).jpeg";
import expPhoto2 from "../assets/Foto Pengalaman/WhatsApp Image 2026-08-24 at 10.08.49 (1).jpeg";
import expPhoto3 from "../assets/Foto Pengalaman/WhatsApp Image 2026-08-24 at 10.08.49 (2).jpeg";
import expPhoto4 from "../assets/Foto Pengalaman/WhatsApp Image 2026-08-24 at 10.08.50.jpeg";
import expPhoto5 from "../assets/Foto Pengalaman/WhatsApp Image 2026-08-24 at 10.08.50 (1).jpeg";
import expPhoto6 from "../assets/Foto Pengalaman/WhatsApp Image 2026-08-24 at 10.08.50 (2).jpeg";
import expPhoto7 from "../assets/Foto Pengalaman/WhatsApp Image 2026-08-24 at 10.08.51 (1).jpeg";

// ─── DATA PORTOFOLIO PERSONAL ───
const PERSONAL_INFO = {
  name: "Fikry Dwi Septian, S.T.",
  role: "Technical Inspector & K3 Specialist",
  subtitle: "Inspection, K3 Certification & Technical Engineering Specialist",
  tagline:
    "Profesional Inspeksi Teknik dan Keselamatan Kerja (K3) dengan lisensi sertifikasi resmi. Berpengalaman dalam pengujian peralatan industri, Sertifikat Laik Operasi (SLO), dan manajemen risiko K3.",
  status: "Available for Technical Inspection & Consulting",
  email: "fikri.septian47@gmail.com",
  phone: "+62 895-6097-51903 / +62 811-159-915",
  location: "Bandar Lampung, Indonesia",
  github: "https://github.com/fikriseptian47",
  linkedin: "https://linkedin.com",
  bio: [
    "Saya adalah seorang Technical Inspector dan Spesialis Keselamatan Kerja (K3) berlatar belakang Teknik. Memiliki komitmen tinggi terhadap keselamatan operasional dan keandalan aset industri.",
    "Berpengalaman dalam melakukan inspeksi kelayakan peralatan pabrik, verifikasi Sertifikat Laik Operasi (SLO) pembangkit listrik, serta pengujian keselamatan kerja sesuai standar Kemenaker dan EBTKE.",
  ],
  highlights: [
    "AK3 Pesawat Tenaga & Produksi",
    "Tenaga Teknis Sertifikasi SLO PLTD",
    "Tenaga Teknis Sertifikasi SLO PLTS",
    "Assesment & Pengawasan Pekerjaan",
  ],
};

// ─── DAFTAR CLIENT & MITRA STRATEGIS ───
const CLIENTS_LIST = [
  { name: "PT. PLN (Persero)", type: "Kelistrikan & Pembangkit", badge: "PLN" },
  { name: "PT. Pertamina Geothermal Energy", type: "Energi Panas Bumi & EBTKE", badge: "PGE" },
  { name: "PT. Cargill Indonesia", type: "Manufaktur & Industri Agro", badge: "Cargill" },
  { name: "PT. SUCOFINDO (Persero)", type: "Testing, Inspection & Certification", logo: logoSucofindo },
  { name: "IDSurvey", type: "Survey & Inspection Holding", logo: logoIdsurvey },
  { name: "Danantara Indonesia", type: "Investasi & Infrastruktur", logo: logoDanantara },
];

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactAlert, setContactAlert] = useState(null);
  const sliderRef = useRef(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactLoading(true);
    setContactAlert(null);

    setTimeout(() => {
      setContactAlert({
        type: "success",
        message: "Pesan Anda telah berhasil terkirim! Terima kasih telah menghubungi kami.",
      });
      setContactForm({ name: "", email: "", subject: "", message: "" });
      setContactLoading(false);
    }, 800);
  };

  // ─── DAFTAR GALERI DOKUMENTASI ───
  const galleryItems = useMemo(
    () => [
      {
        id: "c1",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto1,
      },
      {
        id: "c2",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto2,
      },
      {
        id: "c3",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto3,
      },
      {
        id: "c4",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto4,
      },
      {
        id: "c5",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto5,
      },
      {
        id: "c6",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto6,
      },
      {
        id: "c7",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto7,
      },
      {
        id: "c8",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto8,
      },
      {
        id: "c9",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto9,
      },
      {
        id: "c10",
        category: "client",
        categoryLabel: "Foto Bersama Client",
        image: clientPhoto10,
      },

      // Foto Pengalaman Lapangan
      {
        id: "e1",
        category: "field",
        categoryLabel: "Inspeksi Lapangan",
        image: expPhoto1,
      },
      {
        id: "e2",
        category: "field",
        categoryLabel: "Inspeksi Lapangan",
        image: expPhoto2,
      },
      {
        id: "e3",
        category: "field",
        categoryLabel: "Inspeksi Lapangan",
        image: expPhoto3,
      },
      {
        id: "e4",
        category: "field",
        categoryLabel: "Inspeksi Lapangan",
        image: expPhoto4,
      },
      {
        id: "e5",
        category: "field",
        categoryLabel: "Inspeksi Lapangan",
        image: expPhoto5,
      },
      {
        id: "e6",
        category: "field",
        categoryLabel: "Inspeksi Lapangan",
        image: expPhoto6,
      },
      {
        id: "e7",
        category: "field",
        categoryLabel: "Inspeksi Lapangan",
        image: expPhoto7,
      },
    ],
    []
  );

  const filteredGallery = useMemo(() => {
    if (galleryFilter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === galleryFilter);
  }, [galleryItems, galleryFilter]);

  // ─── DAFTAR KEAHLIAN TEKNIS & LISENSI K3 ───
  const skillsList = useMemo(
    () => [
      {
        icon: ShieldCheck,
        title: "Ahli K3 Pesawat Tenaga & Produksi",
        desc: "Ahli K3 Spesialis Pesawat Tenaga dan Produksi (PTP) untuk pengawasan keselamatan mesin, penggerak mula, dan peralatan produksi industri.",
        tags: ["Ahli K3 PTP", "Inspeksi Mesin", "Manajemen Risiko K3"],
      },
      {
        icon: FileCheck2,
        title: "Sertifikasi Laik Operasi (SLO) PLTD",
        desc: "Tenaga Teknis Sertifikasi Laik Operasi untuk Pembangkit Listrik Tenaga Diesel (PLTD), pengujian parameter listrik dan keselamatan pembangkit.",
        tags: ["SLO PLTD", "Pengujian Pembangkit", "Tenaga Teknis Resmi"],
      },
      {
        icon: Cpu,
        title: "Sertifikasi Laik Operasi (SLO) PLTS",
        desc: "Tenaga Teknis Sertifikasi Laik Operasi Pembangkit Listrik Tenaga Surya (PLTS), inspeksi modul fotovoltaik, inverter, dan instalasi surya.",
        tags: ["SLO PLTS", "Energi Terbarukan", "Inspeksi Solar PV"],
      },
      {
        icon: Award,
        title: "Assestment dan Pengawasan",
        desc: "Pengawas Pekerjaan memastikan pekerjaan anda sesuai dengan design dan kontrak secara realtime dan transparan.",
        tags: ["Assesment", "Laporan Hasil Pengawasan", "Pengawas Pekerjaan"],
      },
    ],
    []
  );

  // ─── DAFTAR PROYEK / INSPEKSI PORTOFOLIO ───
  const projectsList = useMemo(
    () => [
      {
        id: 1,
        title: "Sertifikasi Laik Operasi (SLO) PLTD",
        role: "Lead Technical Inspector",
        category: "Pembangkit Listrik",
        shortDesc: "Riksa uji dan sertifikasi laik operasi sistem pembangkit diesel industri.",
        fullDesc:
          "Pelaksanaan inspeksi teknis komprehensif pada sistem pembangkit listrik tenaga diesel (PLTD) mencakup uji keandalan genset, proteksi kelistrikan, emisi buang, dan pengesahan SLO resmi.",
        techStack: ["Genset Industri", "Load Bank Testing", "SLO PLTD", "K3 Listrik"],
        features: [
          "Pengujian Beban (Load Test) PLTD",
          "Uji Laik Operasi PLTD",
          "Verifikasi Dokumen Sertifikat Laik Operasi (SLO)",
          "Laporan Hasil Pemeriksaan",
        ],
        demoUrl: "",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Inspeksi K3 Pesawat Tenaga & Produksi Industri",
        role: "Ahli K3 Pesawat Tenaga & Produksi",
        category: "Manufaktur & Pabrik",
        shortDesc: "Pemeriksaan berkala K3 mesin produksi pabrik pengolahan skala besar.",
        fullDesc:
          "Pemeriksaan dan pengujian K3 secara menyeluruh pada mesin-mesin pabrik (boiler pendukung, kompresor, conveyor, dan penggerak utama) guna memastikan kepatuhan terhadap regulasi K3 nasional.",
        techStack: ["Ahli K3 PTP", "Risk Assessment"],
        features: ["Pemeriksaan Sistem Pengaman Safety Device", "Audit K3"],
        demoUrl: "",
        githubUrl: "#",
      },
      {
        id: 3,
        title: "Audit & Verifikasi SLO PLTS",
        role: "Tenaga Teknis Sertifikasi SLO PLTS",
        category: "Energi Terbarukan",
        shortDesc: "Riksa uji dan verifikasi keandalan instalasi solar PV sistem.",
        fullDesc:
          "Pengujian keandalan sistem Pembangkit Listrik Tenaga Surya (PLTS). Meliputi uji isolasi kabel DC/AC, efisiensi inverter, grounding protection, dan verifikasi sertifikasi SLO.",
        techStack: ["Solar PV System", "Inverter", "SLO PLTS", "Thermovision"],
        features: [
          "Inspeksi Thermovision Panel Surya & Array Cable",
          "Pengujian Inverter & Sistem Proteksi",
          "Verifikasi Grounding Resistance (Uji Pentanahan)",
        ],
        demoUrl: "",
        githubUrl: "#",
      },
      {
        id: 4,
        title:
          "Pengawasan Pembangunan Saluran Kabel Laut Tegangan Menengah (SKLTM) Sumatera - Pulau Pisang dan Pulau Batam - Pulau Buluh",
        role: "Pengawas Pekerjaan",
        category: "Konstruksi & SKLTM",
        shortDesc: "Pengawasan Pembangunan hingga commissioning dari SKLTM dan Gardu Induk.",
        fullDesc:
          "Pengawasan pembangunan saluran kabel bawah laut tegangan menengah antara sumatera dan pulau pisang, serta pulau batam dan pulau buluh, juga pembangunan gardu induk yang berkaitan dengan proyek tersebut.",
        techStack: ["Konstruksi", "Inspeksi Pekerjaan", "SKLTM", "Gardu Induk"],
        features: [
          "Pemantauan dan Pengawasan Pembangunan",
          "Koordinasi Tim",
          "Inspeksi Visual",
          "Commissioning",
        ],
        demoUrl: "https://youtu.be/PNRMS5Y8FaA?si=gIHW32bqZEpaKF8G",
        githubUrl: "#",
      },
      {
        id: 5,
        title:
          "Pengawasan Pembangunan dan Perbaikan Saluran Kabel Tegangan Menengah (SKTM) dan Gardu Induk PT. Cargill Bandar Lampung",
        role: "Pengawas Pekerjaan",
        category: "Konstruksi & SKTM",
        shortDesc: "Pengawasan Pembangunan hingga commissioning dari SKTM dan Gardu Induk.",
        fullDesc:
          "Pengawasan pembangunan saluran kabel tegangan menengah dan pembangunan gardu induk yang berkaitan dengan proyek tersebut di area industri PT. Cargill Bandar Lampung.",
        techStack: ["Konstruksi", "Inspeksi Pekerjaan", "SKTM", "Gardu Induk"],
        features: [
          "Pengawasan Pembangunan SKTM",
          "Koordinasi Tim",
          "Inspeksi Visual",
          "Commissioning",
        ],
        demoUrl: "",
        githubUrl: "#",
      },
    ],
    []
  );

  const displayProjects = useMemo(() => {
    return [...projectsList, ...projectsList, ...projectsList, ...projectsList];
  }, [projectsList]);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.scrollLeft === 0) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 4;
    }
  }, [displayProjects]);

  useEffect(() => {
    let animationId;
    let lastTime = performance.now();
    let exactScroll = null;

    const scrollStep = (time) => {
      const dt = time - lastTime;
      lastTime = time;

      const speed = 0.025;

      if (sliderRef.current) {
        let currentScroll = sliderRef.current.scrollLeft;
        if (exactScroll === null || Math.abs(currentScroll - exactScroll) > 2) {
          exactScroll = currentScroll;
        }

        if (!isSliderHovered) {
          exactScroll += dt * speed;

          const setWidth = sliderRef.current.scrollWidth / 4;
          if (exactScroll > setWidth * 2.5) {
            exactScroll -= setWidth;
          } else if (exactScroll < setWidth * 0.5) {
            exactScroll += setWidth;
          }

          sliderRef.current.scrollLeft = exactScroll;
        }
      }

      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [isSliderHovered]);

  const handleSliderScroll = (e) => {
    const el = e.target;
    if (!el) return;
    const setWidth = el.scrollWidth / 4;
    if (el.scrollLeft > setWidth * 2.5) {
      el.scrollLeft -= setWidth;
    } else if (el.scrollLeft < setWidth * 0.5) {
      el.scrollLeft += setWidth;
    }
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 350;
      sliderRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const stars = useMemo(() => {
    return [...Array(60)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  const gradientStyle = {
    background: "linear-gradient(90deg, #2dd4bf 0%, #38bdf8 40%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="min-h-screen bg-[#0B1120] font-sans antialiased relative overflow-x-hidden text-slate-100">
      {/* Background visual */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, rgba(148,163,184,0.03) 35%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.05) 0%, rgba(99,102,241,0.03) 40%, transparent 70%)",
          }}
        />

        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.width,
              height: star.height,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              repeat: Infinity,
              duration: star.duration,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#0B1120]/95 backdrop-blur-sm border-b border-slate-800/50"
          : "bg-transparent"
          }`}
      >
        <div className="w-full px-4 sm:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo Initials & Brand */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="shrink-0 flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-teal-400 via-sky-400 to-blue-600 flex items-center justify-center font-extrabold text-slate-950 text-xs sm:text-sm font-tech shadow-md group-hover:scale-105 transition-transform">
                FD
              </div>
              <div className="w-px h-6 sm:h-7 bg-slate-700/60 mx-0.5" />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1 sm:gap-1.5 leading-none uppercase">
                  <span
                    className="text-xs sm:text-base font-tech font-extrabold tracking-wider"
                    style={gradientStyle}
                  >
                    FIKRY DWI SEPTIAN
                  </span>
                </div>
                <span className="text-[7px] sm:text-[9px] font-extrabold text-blue-400 tracking-widest uppercase mt-0.5 leading-none font-display">
                  PORTFOLIO & INSPECTION
                </span>
              </div>
            </button>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <button
                onClick={() => scrollTo("about")}
                className="text-sm text-slate-400 hover:text-white transition-colors font-medium cursor-pointer"
              >
                Tentang Saya
              </button>
              <button
                onClick={() => scrollTo("skills")}
                className="text-sm text-slate-400 hover:text-white transition-colors font-medium cursor-pointer"
              >
                Keahlian & Lisensi
              </button>
              <button
                onClick={() => scrollTo("gallery")}
                className="text-sm text-slate-400 hover:text-white transition-colors font-medium cursor-pointer"
              >
                Dokumentasi
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="text-sm text-slate-400 hover:text-white transition-colors font-medium cursor-pointer"
              >
                Pengalaman Proyek
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-sm text-slate-400 hover:text-white transition-colors font-medium cursor-pointer"
              >
                Kontak
              </button>
            </nav>

            <div className="hidden md:block">
              <button
                onClick={() => scrollTo("contact")}
                className="text-xs sm:text-sm font-bold hover:opacity-80 transition-opacity cursor-pointer border border-teal-500/30 rounded-lg px-3.5 py-1.5 bg-teal-500/10 text-teal-400"
              >
                Hubungi Inspector
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0F172A] border-t border-slate-800 overflow-hidden"
            >
              <div className="px-5 py-4 space-y-1">
                <button
                  onClick={() => scrollTo("about")}
                  className="block w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  Tentang Saya
                </button>
                <button
                  onClick={() => scrollTo("skills")}
                  className="block w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  Keahlian & Lisensi
                </button>
                <button
                  onClick={() => scrollTo("gallery")}
                  className="block w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  Dokumentasi Lapangan
                </button>
                <button
                  onClick={() => scrollTo("projects")}
                  className="block w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  Pengalaman Proyek
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="block w-full text-left px-3 py-2.5 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  Kontak
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── ELEGANT HERO SECTION (2-COLUMN SPLIT LAYOUT) ─── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 pt-24 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT COLUMN — Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest">
                {PERSONAL_INFO.status}
              </span>
            </motion.div>

            <h1 className="leading-tight mb-3">
              <span
                className="font-tech text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal inline-block"
                style={{
                  background: "linear-gradient(90deg, #60a5fa 0%, #bfdbfe 45%, #2dd4bf 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-bold tracking-wide mb-4">
              {PERSONAL_INFO.role}
            </p>

            <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 w-full">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <FolderKanban className="w-4 h-4" />
                <span>Pengalaman Proyek</span>
              </button>
              <button
                onClick={() => scrollTo("gallery")}
                className="px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <Camera className="w-4 h-4 text-teal-400" />
                <span>Galeri Dokumen</span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2">
              {PERSONAL_INFO.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] sm:text-xs text-slate-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Profile Image Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 sm:w-72 lg:w-80 group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative rounded-3xl bg-[#0F172A] border border-slate-700/80 p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col items-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-teal-500/40 group-hover:border-teal-400 transition-colors shadow-inner mb-4">
                  <img
                    src={fotoFikry}
                    alt="Fikry Dwi Septian, S.T."
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold mb-2">
                  <BadgeCheck className="w-4 h-4 text-teal-400" />
                  <span>Certified Technical Inspector</span>
                </div>

                <h3 className="text-sm font-bold text-white mb-0.5">Fikry Dwi Septian, S.T.</h3>
                <p className="text-[11px] text-slate-400 font-medium mb-3">Bidang Inspeksi Teknik & General</p>

                <div className="w-full grid grid-cols-2 gap-2 text-left bg-slate-900/80 rounded-xl p-2.5 border border-slate-800 text-[10px]">
                  <div>
                    <span className="text-slate-500 uppercase font-semibold block">Spesialisasi</span>
                    <span className="text-slate-200 font-medium">SLO & K3 PTP</span>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase font-semibold block">Pengawasan</span>
                    <span className="text-slate-200 font-medium">SKLTM & SKTM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce transition-opacity duration-500 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          <ChevronDown className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        </div>
      </section>

      {/* ─── CLIENT & MITRA ENTERPRISE SECTION ─── */}
      <section
        id="clients"
        className="relative z-10 py-12 sm:py-16 px-5 sm:px-6 bg-slate-900/30 border-y border-slate-800/80 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs text-teal-400 font-bold uppercase tracking-widest mb-2">
            Clients & Enterprise Partners
          </p>
          <h2 className="text-lg sm:text-2xl font-bold text-white mb-8">Client & Pengalaman Mitra</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center justify-center">
            {CLIENTS_LIST.map((client, cIdx) => (
              <div
                key={cIdx}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-teal-500/40 hover:bg-slate-800/80 transition-all shadow-sm group h-24"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 sm:h-10 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all mb-1"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center font-bold text-teal-400 text-xs mb-1">
                    {client.badge}
                  </div>
                )}
                <span className="text-[10px] font-bold text-slate-300 text-center line-clamp-1">{client.name}</span>
                <span className="text-[8px] text-slate-500 text-center line-clamp-1">{client.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS & CERTIFICATIONS SECTION ─── */}
      <section id="skills" className="relative z-10 py-16 sm:py-20 px-5 sm:px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center sm:text-left mb-8 sm:mb-10">
            <p className="text-[10px] sm:text-xs text-teal-400 font-bold uppercase tracking-widest mb-1.5">
              Certifications & Technical Competencies
            </p>
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-2">Keahlian & Lisensi K3</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Kompetensi resmi dan keahlian spesialisasi teknis dalam bidang Inspeksi & K3 Industri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {skillsList.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col justify-between p-5 rounded-xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-all hover:shadow-lg group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:border-teal-500/50 transition-colors">
                      <skill.icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white">{skill.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{skill.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/50 text-[10px] sm:text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <hr className="border-slate-800" />
      </div>

      {/* ─── DOKUMENTASI & GALERI LAPANGAN (NEW SECTION) ─── */}
      <section id="gallery" className="relative z-10 py-16 sm:py-20 px-5 sm:px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[10px] sm:text-xs text-teal-400 font-bold uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
              <Camera className="w-4 h-4" />
              <span>Field Records & Documentation</span>
            </p>
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-2">Dokumentasi & Galeri Lapangan</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Dokumentasi kegiatan riksa uji K3, pengawasan konstruksi gardu induk / SKLTM, dan pertemuan koordinasi bersama pihak client.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "all", label: "Semua Dokumentasi", icon: ImageIcon },
              { id: "client", label: "Foto Bersama Client", icon: Users },
              { id: "field", label: "Inspeksi & Pengalaman Lapangan", icon: ShieldCheck },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setGalleryFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${galleryFilter === tab.id
                  ? "bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/20"
                  : "bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800"
                  }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-video sm:aspect-square overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 backdrop-blur-sm text-[9px] font-bold text-teal-400 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Center Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-teal-500/80 text-slate-950 flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/90 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-teal-300 transition-colors line-clamp-1 mb-1">
                    {item.title || item.categoryLabel}
                  </h4>
                  {item.desc && (
                    <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">{item.desc}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <hr className="border-slate-800" />
      </div>

      {/* ─── ABOUT ME SECTION ─── */}
      <section id="about" className="relative z-10 py-16 sm:py-20 px-5 sm:px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-[10px] sm:text-xs text-teal-400 font-bold uppercase tracking-widest mb-1.5">
              Profile & Background
            </p>
            <h2 className="text-xl sm:text-3xl font-bold text-white">Tentang Saya</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-slate-900 border-2 border-teal-500/40 shrink-0 overflow-hidden shadow-lg">
              <img src={fotoFikry} alt="Fikry Dwi Septian" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#111827] border border-slate-800 p-5 sm:p-8 relative overflow-hidden">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              Informasi Kontak & Status Profesional
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Siap melayani kebutuhan inspeksi teknik, pengujian keselamatan K3, dan konsultasi Sertifikasi Laik Operasi (SLO).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 pt-5">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Lokasi / Domisili</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email Kontak</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-slate-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Status Layanan</p>
                  <p className="text-xs sm:text-sm text-emerald-400 font-medium">{PERSONAL_INFO.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <hr className="border-slate-800" />
      </div>

      {/* ─── PROJECTS / INSPECTION SHOWCASE ─── */}
      <section id="projects" className="relative z-10 py-16 sm:py-20 px-5 sm:px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[10px] sm:text-xs text-teal-400 font-bold uppercase tracking-widest mb-1.5">
              Projects & Inspection Records
            </p>
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-2">Pengalaman Proyek & Inspeksi</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Dokumentasi riksa uji K3, pengawasan pekerjaan, dan inspeksi teknik di berbagai sektor industri.
            </p>
          </div>

          <div className="w-full flex flex-col gap-6 py-4">
            <style dangerouslySetInnerHTML={{ __html: `div::-webkit-scrollbar { display: none; }` }} />

            <div
              className="relative group w-full"
              onMouseEnter={() => setIsSliderHovered(true)}
              onMouseLeave={() => setIsSliderHovered(false)}
            >
              <button
                onClick={() => scrollSlider("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-600 text-white flex items-center justify-center shadow-lg hover:bg-slate-700 hover:border-slate-500 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div
                ref={sliderRef}
                onScroll={handleSliderScroll}
                className="overflow-x-auto overflow-y-hidden"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex gap-4 sm:gap-6 w-max px-2">
                  {displayProjects.map((project, i) => (
                    <button
                      key={`project-${i}`}
                      onClick={() => setSelectedProject(project)}
                      className="w-64 sm:w-72 shrink-0 group/card flex flex-col justify-between text-left p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/80 transition-all shadow-md hover:shadow-xl focus:outline-none cursor-pointer relative overflow-hidden"
                    >
                      <div>
                        {/* Project Thumbnail Image */}
                        {project.image && (
                          <div className="w-full h-32 rounded-xl overflow-hidden mb-4 border border-slate-700/60 relative">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                            {project.category}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover/card:text-teal-400 transition-colors">
                            {project.demoUrl ? <PlayCircle className="w-4 h-4 text-teal-400 animate-pulse" /> : <Layers className="w-4 h-4" />}
                          </div>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover/card:text-teal-300 transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-[11px] font-medium text-blue-400 mb-3">{project.role}</p>

                        <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                          {project.shortDesc}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.techStack.slice(0, 3).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-400 group-hover/card:translate-x-1 transition-transform">
                          <span>Detail Inspeksi</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollSlider("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-600 text-white flex items-center justify-center shadow-lg hover:bg-slate-700 hover:border-slate-500 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <hr className="border-slate-800" />
      </div>

      {/* ─── CONTACT FORM SECTION ─── */}
      <section id="contact" className="relative z-10 py-12 sm:py-16 px-5 sm:px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-2/5">
            <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">Hubungi Saya</h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
              Konsultasikan kebutuhan inspeksi teknik, K3, dan Sertifikat Laik Operasi (SLO) perusahaan Anda.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Email Direct</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Telepon / WhatsApp</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Lokasi</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:w-3/5">
            {contactAlert && (
              <div
                className={`mb-4 p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 transition-all ${contactAlert.type === "success"
                  ? "bg-emerald-950/60 border-emerald-800 text-emerald-300"
                  : "bg-rose-950/60 border-rose-800 text-rose-300"
                  }`}
              >
                {contactAlert.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">{contactAlert.message}</div>
                <button
                  type="button"
                  onClick={() => setContactAlert(null)}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <form className="space-y-3 sm:space-y-4" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[10px] sm:text-xs font-semibold text-slate-400 mb-1 sm:mb-1.5 uppercase tracking-wider"
                  >
                    Nama Anda
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Nama lengkap"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    disabled={contactLoading}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[10px] sm:text-xs font-semibold text-slate-400 mb-1 sm:mb-1.5 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="email@perusahaan.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    disabled={contactLoading}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[10px] sm:text-xs font-semibold text-slate-400 mb-1 sm:mb-1.5 uppercase tracking-wider"
                >
                  Subjek / Nama Perusahaan
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Contoh: Permohonan Inspeksi SLO / Riksa Uji K3"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  disabled={contactLoading}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] sm:text-xs font-semibold text-slate-400 mb-1 sm:mb-1.5 uppercase tracking-wider"
                >
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tuliskan kebutuhan inspeksi Anda..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  disabled={contactLoading}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={contactLoading}
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-medium px-4 py-2 sm:py-2.5 text-xs sm:text-sm transition-colors mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {contactLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Mengirim Pesan...</span>
                  </>
                ) : (
                  <span>Kirim Pesan</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-teal-400 to-blue-500 flex items-center justify-center font-extrabold text-slate-950 text-[10px] font-tech">
              FD
            </div>
            <span className="text-xs text-slate-500">
              © 2026 {PERSONAL_INFO.name}. All rights reserved.
            </span>
          </div>

          <div className="flex gap-5">
            <button
              onClick={() => scrollTo("about")}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            >
              Tentang Saya
            </button>
            <button
              onClick={() => scrollTo("skills")}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            >
              Keahlian
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            >
              Dokumentasi
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            >
              Pengalaman
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
            >
              Kontak
            </button>
          </div>
        </div>
      </footer>

      {/* ─── LIGHTBOX MODAL DETAIL GAMBAR ─── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-[#0F172A] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 text-slate-300 hover:text-white bg-slate-900/80 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col">
                <div className="max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img src={selectedImage.image} alt={selectedImage.title} className="max-h-[70vh] w-auto object-contain" />
                </div>
                <div className="p-6 bg-[#0F172A] border-t border-slate-800">
                  <div className="inline-flex px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase mb-2">
                    {selectedImage.categoryLabel}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedImage.desc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── POPUP DETAIL PROYEK ─── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0F172A] border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-[11px] text-blue-400 font-semibold">{selectedProject.role}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>

                {/* Photos Gallery Inside Project Modal */}
                {selectedProject.photos && selectedProject.photos.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {selectedProject.photos.map((pImg, pIdx) => (
                      <div key={pIdx} className="h-20 rounded-lg overflow-hidden border border-slate-700/60 bg-slate-950">
                        <img src={pImg} alt="Dokumentasi Inspeksi" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-b border-slate-800 py-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Deskripsi Inspeksi & Pekerjaan
                    </h4>
                    <p>{selectedProject.fullDesc}</p>
                  </div>

                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Ruang Lingkup & Detail Pekerjaan
                      </h4>
                      <ul className="space-y-1.5">
                        {selectedProject.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {selectedProject.demoUrl && (
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Tonton Video Proyek / Dokumentasi</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
