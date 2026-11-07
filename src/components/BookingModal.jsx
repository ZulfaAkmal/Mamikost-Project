
import { useState } from "react";
import {
    Check,
    CalendarDays,
    Phone,
    UserRound,
    X,
    Send,
    Clock,
    House,
    Info
} from "lucide-react";

import apiRequest from "../services/api";
import "../css/booking-modal.css";

function BookingModal({ kost, isOpen, onClose }) {
    // State formulir reservasi
    const [bookingData, setBookingData] = useState({
        name: "",
        phone: "",
        startDate: "",
        duration: "1",
        message: ""
    });

    // State validasi dan notifikasi
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Format harga ke Rupiah
    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(price);
    };

    // Mendapatkan tanggal hari ini untuk batas minimum
    const getMinDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    // Memperbarui nilai input
    const handleBookingChange = (event) => {
        const { name, value } = event.target;

        setBookingData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: ""
        }));

        setSubmitError("");
    };

    // Validasi formulir di frontend
    const validateBooking = () => {
        const newErrors = {};

        if (!bookingData.name.trim()) {
            newErrors.name = "Nama lengkap wajib diisi.";
        } else if (bookingData.name.trim().length < 3) {
            newErrors.name = "Nama minimal 3 karakter.";
        }

        if (!bookingData.phone.trim()) {
            newErrors.phone = "Nomor WhatsApp wajib diisi.";
        } else if (!/^[0-9+\-\s]{9,16}$/.test(bookingData.phone.trim())) {
            newErrors.phone = "Nomor WhatsApp tidak valid.";
        }

        if (!bookingData.startDate) {
            newErrors.startDate = "Tanggal mulai wajib diisi.";
        } else if (
            bookingData.startDate < getMinDate()
        ) {
            newErrors.startDate = "Tanggal mulai tidak boleh di masa lalu.";
        }

        if (!bookingData.duration) {
            newErrors.duration = "Durasi sewa wajib dipilih.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Mengirim data reservasi ke backend
    const handleBookingSubmit = async (event) => {
        event.preventDefault();

        if (!validateBooking()) {
            return;
        }

        setSubmitting(true);
        setSubmitError("");

        try {
            const result = await apiRequest("/inquiries", {
                method: "POST",
                body: JSON.stringify({
                    kostId: kost.id,
                    name: bookingData.name.trim(),
                    phone: bookingData.phone.trim(),
                    startDate: bookingData.startDate,
                    duration: bookingData.duration,
                    message: bookingData.message.trim()
                })
            });

            if (result.success) {
                setBookingData({
                    name: "",
                    phone: "",
                    startDate: "",
                    duration: "1",
                    message: ""
                });

                setErrors({});
                onClose();
                setShowSuccess(true);
            }
        } catch (error) {
            setSubmitError(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    // Menutup formulir
    const closeBooking = () => {
        if (submitting) return;

        setErrors({});
        setSubmitError("");
        onClose();
    };

    // Menutup notifikasi sukses
    const closeSuccess = () => {
        setShowSuccess(false);
    };

    if (!kost) return null;

    return (
        <>
            {/* Booking Modal */}
            {isOpen && (
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
                                disabled={submitting}
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

                            {/* Backend Error */}
                            {submitError && (
                                <p className="booking-error">
                                    {submitError}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="booking-submit-button"
                                disabled={submitting}
                            >
                                <Send size={17} />
                                {submitting
                                    ? "Mengirim..."
                                    : "Kirim Permintaan Reservasi"}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Notification */}
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
                            Permintaan Anda telah diterima oleh sistem.
                            Silakan tunggu konfirmasi ketersediaan kamar
                            dari pengelola kost.
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
        </>
    );
}

export default BookingModal;
