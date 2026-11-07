
// Menyimpan data reservasi sementara
let inquiries = [];

// Menangani pengiriman reservasi
export const createInquiry = (req, res) => {
    const { kostId, name, phone, startDate, duration, message } = req.body;

    // Validasi input wajib
    if (!kostId || !name || !phone || !startDate || !duration) {
        return res.status(400).json({
            success: false,
            message: "Nama, nomor telepon, tanggal mulai, durasi, dan kost wajib diisi."
        });
    }

    // Validasi nama
    if (typeof name !== "string" || name.trim().length < 3) {
        return res.status(400).json({
            success: false,
            message: "Nama minimal harus terdiri dari 3 karakter."
        });
    }

    // Validasi nomor telepon
    if (typeof phone !== "string" || !/^[0-9+\-\s]{9,16}$/.test(phone.trim())) {
        return res.status(400).json({
            success: false,
            message: "Nomor telepon tidak valid."
        });
    }

    // Validasi tanggal mulai
    if (typeof startDate !== "string" || isNaN(Date.parse(startDate))) {
        return res.status(400).json({
            success: false,
            message: "Tanggal mulai tidak valid."
        });
    }

    // Validasi durasi
    const bookingDuration = Number(duration);

    if (!Number.isInteger(bookingDuration) || bookingDuration < 1 || bookingDuration > 12) {
        return res.status(400).json({
            success: false,
            message: "Durasi reservasi harus antara 1 sampai 12 bulan."
        });
    }

    // Membuat data reservasi
    const newInquiry = {
        id: inquiries.length + 1,
        kostId,
        name: name.trim(),
        phone: phone.trim(),
        startDate,
        duration: bookingDuration,
        message: typeof message === "string" ? message.trim() : "",
        createdAt: new Date().toISOString()
    };

    // Menyimpan data ke penyimpanan sementara
    inquiries.push(newInquiry);

    return res.status(201).json({
        success: true,
        message: "Reservasi berhasil dikirim.",
        data: newInquiry
    });
};