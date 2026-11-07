import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useKostDetail from "../hooks/useKostDetail";
import BookingModal from "./BookingModal";
import "../css/kost-detail.css";

import {
    MapPin,
    Home,
    Building2,
    MapPinned,
    Check,
    ChevronRight,
    ArrowLeft,
    Info,
    Wallet,
    Users,
    House,
    CalendarDays
} from "lucide-react";

function KostDetailContent() {
    const { id } = useParams();
    const { kost, loading, error, fetchKostDetail } = useKostDetail(id);

    const [showBooking, setShowBooking] = useState(false);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <section className="kost-detail-section">
            <div className="app-container">

                {/* Loading State */}
                {loading && (
                    <div className="kost-detail-state">
                        <div className="kost-loading-spinner"></div>
                        <p>Memuat informasi kost...</p>
                    </div>
                )}

                {/* Error State */}
                {!loading && error && (
                    <div className="kost-detail-state">
                        <h2>Informasi Kost Tidak Tersedia</h2>
                        <p>{error}</p>

                        <button type="button" onClick={fetchKostDetail}>
                            Coba Lagi
                        </button>

                        <Link to="/" className="kost-detail-back">
                            <ArrowLeft size={17} />
                            Kembali ke Beranda
                        </Link>
                    </div>
                )}

                {/* Kost Detail */}
                {!loading && !error && kost && (
                    <>
                        {/* Breadcrumb */}
                        <div className="kost-detail-breadcrumb">
                            <Link to="/">Beranda</Link>
                            <ChevronRight size={15} />
                            <Link to="/#kost">Daftar Kost</Link>
                            <ChevronRight size={15} />
                            <span>{kost.name}</span>
                        </div>

                        {/* Header */}
                        <div className="kost-detail-header">
                            <div>
                                <span className="kost-detail-eyebrow">
                                    INFORMASI HUNIAN
                                </span>

                                <h1>{kost.name}</h1>

                                <div className="kost-detail-location">
                                    <MapPin size={18} />
                                    <span>
                                        {kost.address}, {kost.city}
                                    </span>
                                </div>
                            </div>

                            <span
                                className={`kost-detail-type kost-type-${kost.type.toLowerCase()}`}
                            >
                                Kost {kost.type}
                            </span>
                        </div>

                        {/* Main Layout */}
                        <div className="kost-detail-layout">

                            {/* Main Content */}
                            <div className="kost-detail-main">

                                {/* Kost Image */}
                                <div className="kost-detail-image">
                                    <img
                                        src={kost.image}
                                        alt={kost.name}
                                    />
                                </div>

                                {/* About Kost */}
                                <div className="kost-detail-card">
                                    <h2>
                                        <House size={21} />
                                        Tentang Kost
                                    </h2>

                                    <p className="kost-detail-description">
                                        {kost.description ||
                                            `${kost.name} merupakan pilihan hunian yang berlokasi di ${kost.area}, ${kost.city}. Kost ini menyediakan berbagai fasilitas untuk menunjang kebutuhan tempat tinggal sehari-hari.`}
                                    </p>
                                </div>

                                {/* Kost Information */}
                                <div className="kost-detail-card">
                                    <h2>
                                        <Info size={21} />
                                        Informasi Kost
                                    </h2>

                                    <div className="kost-detail-info-grid">
                                        <div className="kost-detail-info-item">
                                            <span>
                                                <Building2 size={16} />
                                                Nama Kost
                                            </span>
                                            <strong>{kost.name}</strong>
                                        </div>

                                        <div className="kost-detail-info-item">
                                            <span>
                                                <Users size={16} />
                                                Tipe Kost
                                            </span>
                                            <strong>{kost.type}</strong>
                                        </div>

                                        <div className="kost-detail-info-item">
                                            <span>
                                                <MapPin size={16} />
                                                Wilayah
                                            </span>
                                            <strong>{kost.area}</strong>
                                        </div>

                                        <div className="kost-detail-info-item">
                                            <span>
                                                <MapPinned size={16} />
                                                Kota
                                            </span>
                                            <strong>{kost.city}</strong>
                                        </div>
                                    </div>
                                </div>

                                {/* Kost Facilities */}
                                <div className="kost-detail-card">
                                    <h2>
                                        <Home size={21} />
                                        Fasilitas Kost
                                    </h2>

                                    <div className="kost-detail-facilities">
                                        {kost.facilities.map((facility, index) => (
                                            <div
                                                className="kost-detail-facility"
                                                key={`${facility}-${index}`}
                                            >
                                                <span className="kost-facility-check">
                                                    <Check size={15} />
                                                </span>
                                                {facility}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Kost Address */}
                                <div className="kost-detail-card">
                                    <h2>
                                        <MapPinned size={21} />
                                        Lokasi dan Alamat
                                    </h2>

                                    <div className="kost-detail-address">
                                        <div className="kost-address-icon">
                                            <MapPin size={22} />
                                        </div>

                                        <div>
                                            <strong>Alamat Kost</strong>
                                            <p>
                                                {kost.address}, {kost.area}, {kost.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="kost-detail-sidebar">
                                <div className="kost-detail-price-card">

                                    <span className="kost-price-label">
                                        <Wallet size={17} />
                                        Harga Sewa
                                    </span>

                                    <div className="kost-detail-price">
                                        <strong>
                                            {formatPrice(kost.price)}
                                        </strong>
                                        <span>/ bulan</span>
                                    </div>

                                    <div className="kost-price-divider"></div>

                                    <div className="kost-price-summary">
                                        <span>Tipe Hunian</span>
                                        <strong>{kost.type}</strong>
                                    </div>

                                    <div className="kost-price-summary">
                                        <span>Lokasi</span>
                                        <strong>{kost.area}</strong>
                                    </div>

                                    {/* Booking Button */}
                                    <button
                                        type="button"
                                        className="kost-booking-button"
                                        onClick={() => setShowBooking(true)}
                                    >
                                        <CalendarDays size={18} />
                                        Reservasi Sekarang
                                    </button>

                                    <Link
                                        to="/#kost"
                                        className="kost-detail-button"
                                    >
                                        <ArrowLeft size={17} />
                                        Kembali ke Daftar Kost
                                    </Link>

                                    <p className="kost-detail-disclaimer">
                                        Informasi harga dan fasilitas ditampilkan
                                        berdasarkan data kost yang tersedia.
                                    </p>
                                </div>
                            </aside>
                        </div>
                    </>
                )}
            </div>

            {/* Booking Modal Component */}
            {kost && (
                <BookingModal
                    kost={kost}
                    isOpen={showBooking}
                    onClose={() => setShowBooking(false)}
                />
            )}
        </section>
    );
}

export default KostDetailContent;
