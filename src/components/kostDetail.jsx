import { Link, useParams } from "react-router-dom";
import useKostDetail from "../hooks/useKostDetail";
import useBooking from "../hooks/useBooking";
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
    CalendarDays,
    Phone,
    UserRound,
    X,
    Send,
    Clock
} from "lucide-react";

function KostDetailContent() {
    const { id } = useParams();
    const { kost, loading, error, fetchKostDetail } = useKostDetail(id);

    // Booking Hook
    const {
        showBooking,
        showSuccess,
        bookingData,
        errors,
        getMinDate,
        handleBookingChange,
        handleBookingSubmit,
        openBooking,
        closeBooking,
        closeSuccess
    } = useBooking();

    // Format harga
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
                                        onClick={openBooking}
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

            {/* =================================
                BOOKING MODAL
            ================================= */}
            {showBooking && kost && (
                <div
                    className="booking-modal-overlay"
                    onClick={closeBooking}
                >
                    <div
                        className="booking-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="booking-modal-header">
                            <div>
                                <span className="booking-modal-eyebrow">
                                    FORMULIR RESERVASI
                                </span>
                                <h2>Reservasi Kost</h2>
                                <p>
                                    Lengkapi informasi berikut untuk mengajukan
                                    reservasi hunian.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="booking-modal-close"
                                onClick={closeBooking}
                                aria-label="Tutup formulir"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Kost Summary */}
                        <div className="booking-kost-summary">
                            <div className="booking-kost-icon">
                                <House size={21} />
                            </div>

                            <div>
                                <strong>{kost.name}</strong>
                                <span>
                                    {kost.area}, {kost.city}
                                </span>
                            </div>

                            <strong className="booking-kost-price">
                                {formatPrice(kost.price)}
                                <small>/bln</small>
                            </strong>
                        </div>

                        {/* Booking Form */}
                        <form
                            className="booking-form"
                            onSubmit={handleBookingSubmit}
                            noValidate
                        >
                            <div className="booking-form-group">
                                <label htmlFor="booking-name">
                                    Nama Lengkap
                                </label>

                                <div className="booking-input-wrapper">
                                    <UserRound size={17} />
                                    <input
                                        type="text"
                                        id="booking-name"
                                        name="name"
                                        placeholder="Masukkan nama lengkap"
                                        value={bookingData.name}
                                        onChange={handleBookingChange}
                                        required
                                    />
                                </div>

                                {errors.name && (
                                    <small className="booking-error">
                                        {errors.name}
                                    </small>
                                )}
                            </div>

                            <div className="booking-form-group">
                                <label htmlFor="booking-phone">
                                    Nomor WhatsApp
                                </label>

                                <div className="booking-input-wrapper">
                                    <Phone size={17} />
                                    <input
                                        type="tel"
                                        id="booking-phone"
                                        name="phone"
                                        placeholder="Contoh: 081234567890"
                                        value={bookingData.phone}
                                        onChange={handleBookingChange}
                                        pattern="[0-9+\-\s]{9,16}"
                                        title="Masukkan nomor telepon yang valid"
                                        required
                                    />
                                </div>

                                {errors.phone && (
                                    <small className="booking-error">
                                        {errors.phone}
                                    </small>
                                )}
                            </div>

                            <div className="booking-form-row">
                                <div className="booking-form-group">
                                    <label htmlFor="booking-date">
                                        Tanggal Mulai
                                    </label>

                                    <div className="booking-input-wrapper">
                                        <CalendarDays size={17} />
                                        <input
                                            type="date"
                                            id="booking-date"
                                            name="startDate"
                                            min={getMinDate()}
                                            value={bookingData.startDate}
                                            onChange={handleBookingChange}
                                            required
                                        />
                                    </div>

                                    {errors.startDate && (
                                        <small className="booking-error">
                                            {errors.startDate}
                                        </small>
                                    )}
                                </div>

                                <div className="booking-form-group">
                                    <label htmlFor="booking-duration">
                                        Durasi Sewa
                                    </label>

                                    <div className="booking-input-wrapper">
                                        <Clock size={17} />
                                        <select
                                            id="booking-duration"
                                            name="duration"
                                            value={bookingData.duration}
                                            onChange={handleBookingChange}
                                            required
                                        >
                                            <option value="1">1 Bulan</option>
                                            <option value="3">3 Bulan</option>
                                            <option value="6">6 Bulan</option>
                                            <option value="12">12 Bulan</option>
                                        </select>
                                    </div>

                                    {errors.duration && (
                                        <small className="booking-error">
                                            {errors.duration}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="booking-form-group">
                                <label htmlFor="booking-message">
                                    Catatan Tambahan
                                    <span className="booking-optional">
                                        (Opsional)
                                    </span>
                                </label>

                                <textarea
                                    id="booking-message"
                                    name="message"
                                    rows="3"
                                    placeholder="Tuliskan pertanyaan atau kebutuhan tambahan..."
                                    value={bookingData.message}
                                    onChange={handleBookingChange}
                                />
                            </div>

                            <div className="booking-form-note">
                                <Info size={16} />
                                <p>
                                    Pengajuan ini merupakan permintaan reservasi.
                                    Konfirmasi ketersediaan kamar dilakukan
                                    secara terpisah.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="booking-submit-button"
                            >
                                <Send size={17} />
                                Kirim Permintaan Reservasi
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* =================================
                SUCCESS NOTIFICATION
            ================================= */}
            {showSuccess && (
                <div
                    className="booking-modal-overlay booking-success-overlay"
                    onClick={closeSuccess}
                >
                    <div
                        className="booking-success-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="booking-modal-close booking-success-close"
                            onClick={closeSuccess}
                            aria-label="Tutup notifikasi"
                        >
                            <X size={20} />
                        </button>

                        <div className="booking-success-icon">
                            <Check size={34} />
                        </div>

                        <h2>Permintaan Berhasil Dikirim!</h2>

                        <p>
                            Terima kasih telah mengajukan reservasi.
                            Permintaan Anda telah diterima dalam simulasi
                            ini. Silakan tunggu konfirmasi ketersediaan
                            kamar dari pengelola kost.
                        </p>

                        <button
                            type="button"
                            className="booking-success-button"
                            onClick={closeSuccess}
                        >
                            Mengerti
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default KostDetailContent;
