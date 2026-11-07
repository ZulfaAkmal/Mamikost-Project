
import { useState } from "react";

function useBooking() {
    const [showBooking, setShowBooking] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const [bookingData, setBookingData] = useState({
        name: "",
        phone: "",
        startDate: "",
        duration: "1",
        message: ""
    });

    const [errors, setErrors] = useState({});

    // Mendapatkan tanggal hari ini
    const getMinDate = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    // Mengubah nilai input
    const handleBookingChange = (event) => {
        const { name, value } = event.target;

        setBookingData((previous) => ({
            ...previous,
            [name]: value
        }));

        // Menghapus error ketika input diperbaiki
        setErrors((previous) => ({
            ...previous,
            [name]: ""
        }));
    };

    // Validasi seluruh input reservasi
    const validateBooking = () => {
        const newErrors = {};

        // Validasi nama
        if (!bookingData.name.trim()) {
            newErrors.name = "Nama lengkap wajib diisi.";
        }

        // Validasi nomor WhatsApp
        if (!bookingData.phone.trim()) {
            newErrors.phone = "Nomor WhatsApp wajib diisi.";
        } else if (!/^[0-9+\-\s]{9,16}$/.test(bookingData.phone.trim())) {
            newErrors.phone = "Nomor WhatsApp tidak valid.";
        }

        // Validasi tanggal mulai
        if (!bookingData.startDate) {
            newErrors.startDate = "Tanggal mulai wajib diisi.";
        } else if (bookingData.startDate < getMinDate()) {
            newErrors.startDate = "Tanggal tidak boleh sebelum hari ini.";
        }

        // Validasi durasi sewa
        if (!bookingData.duration) {
            newErrors.duration = "Durasi sewa wajib dipilih.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit reservasi
    const handleBookingSubmit = (event) => {
        event.preventDefault();

        // Hentikan submit jika validasi gagal
        if (!validateBooking()) {
            return;
        }

        // Simulasi pengiriman reservasi
        setShowBooking(false);
        setShowSuccess(true);

        // Reset form
        setBookingData({
            name: "",
            phone: "",
            startDate: "",
            duration: "1",
            message: ""
        });

        setErrors({});
    };

    // Membuka modal reservasi
    const openBooking = () => {
        setShowBooking(true);
    };

    // Menutup modal reservasi
    const closeBooking = () => {
        setShowBooking(false);
        setErrors({});
    };

    // Menutup notifikasi berhasil
    const closeSuccess = () => {
        setShowSuccess(false);
    };

    return {
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
    };
}

export default useBooking;