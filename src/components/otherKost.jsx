
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { getKosts } from "../services/kostService";
import KostCard from "./KostCard";

import "../css/other-kost.css";

function OtherKosts() {
    const { id } = useParams();
    const location = useLocation();

    const [kosts, setKosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Scroll ke atas ketika halaman detail berganti
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [location.pathname]);

    // Mengambil daftar kost lainnya
    useEffect(() => {
        async function fetchOtherKosts() {
            try {
                setLoading(true);

                const data = await getKosts();

                const filteredKosts = data
                    .filter(
                        (kost) => String(kost.id) !== String(id)
                    )
                    .slice(0, 5);

                setKosts(filteredKosts);
            } catch (error) {
                console.error(
                    "Gagal memuat kost lainnya:",
                    error
                );

                setKosts([]);
            } finally {
                setLoading(false);
            }
        }

        fetchOtherKosts();
    }, [id]);

    // Kondisi loading
    if (loading) {
        return null;
    }

    // Tidak menampilkan section jika tidak ada rekomendasi
    if (kosts.length === 0) {
        return null;
    }

    return (
        <section className="other-kosts-section">
            {/* Header */}
            <div className="other-kosts-header">
                <div>
                    <span className="other-kosts-eyebrow">
                        REKOMENDASI
                    </span>

                    <h2>Kost Lainnya</h2>

                    <p>
                        Temukan pilihan kost lainnya yang mungkin sesuai
                        dengan kebutuhan Anda.
                    </p>
                </div>
            </div>

            {/* Horizontal Kost List */}
            <div className="other-kosts-list">
                {kosts.map((kost) => (
                    <div
                        className="other-kost-item"
                        key={kost.id}
                    >
                        <KostCard kost={kost} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OtherKosts;
