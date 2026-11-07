// URL backend API
const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// Fungsi utama untuk mengirim request ke backend
async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            }
        });

        // Mengambil response dari server
        const result = await response.json();

        // Memeriksa apakah request berhasil
        if (!response.ok) {
            throw new Error(
                result.message || "Terjadi kesalahan pada server."
            );
        }

        return result;

    } catch (error) {
        // Menangani masalah koneksi ke backend
        if (error instanceof TypeError) {
            throw new Error(
                "Tidak dapat terhubung ke server. Periksa koneksi backend."
            );
        }

        throw error;
    }
}

export default apiRequest;