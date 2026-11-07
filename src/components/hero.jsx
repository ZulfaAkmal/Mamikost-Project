
import { useState } from "react";
import "../css/hero.css";

function Hero({ onSearch }) {
    const [location, setLocation] = useState("");
    const [kostType, setKostType] = useState("");

    function handleSearch(event) {
        event.preventDefault();

        const searchData = {
            location: location.trim(),
            type: kostType
        };

        if (onSearch) {
            onSearch(searchData);
            return;
        }

        document.getElementById("kost")?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <section className="hero-section" id="home">
            <div className="app-container">
                <div className="hero-wrapper">
                    <div className="hero-content">
                        <span className="hero-badge">
                            <span className="hero-badge-dot"></span>
                            Temukan Hunian yang Tepat
                        </span>

                        <h1 className="hero-title">
                            Temukan Kost Nyaman,
                            <span> Mulai Cerita Baru.</span>
                        </h1>

                        <p className="hero-description">
                            Temukan berbagai pilihan kost dengan lokasi strategis,
                            fasilitas lengkap, dan harga yang sesuai dengan
                            kebutuhanmu.
                        </p>


                        <div className="hero-promo">
                            <div className="hero-promo-header">
                                <span className="hero-promo-label">
                                    <span className="hero-promo-dot"></span>
                                    MamiKost Recommendation
                                </span>

                                <span className="hero-promo-icon">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path
                                            d="M12 2L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.2L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 2Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <h3 className="hero-promo-title">
                                Temukan Hunian yang Cocok untuk Cerita Barumu.
                            </h3>

                            <p className="hero-promo-description">
                                Beragam pilihan kost dengan informasi fasilitas, lokasi,
                                dan harga untuk membantu menemukan tempat tinggal yang tepat.
                            </p>

                            <div className="hero-promo-features">
                                <div className="hero-promo-feature">
                                    <span className="hero-promo-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path
                                                d="M3 10L12 3L21 10V20H3V10Z"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 20V14H15V20"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        <strong>Pilihan Kost</strong>
                                        <small>Beragam tipe hunian</small>
                                    </span>
                                </div>

                                <div className="hero-promo-feature">
                                    <span className="hero-promo-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path
                                                d="M12 2V22M17 6H9.5C7.57 6 6 7.57 6 9.5C6 11.43 7.57 13 9.5 13H14.5C16.43 13 18 14.57 18 16.5C18 18.43 16.43 20 14.5 20H6"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        <strong>Harga Beragam</strong>
                                        <small>Sesuai kebutuhanmu</small>
                                    </span>
                                </div>

                                <div className="hero-promo-feature">
                                    <span className="hero-promo-feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="9"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            />
                                            <path
                                                d="M12 7V12L16 14"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        <strong>Informasi Lengkap</strong>
                                        <small>Detail sebelum memilih</small>
                                    </span>
                                </div>
                            </div>

                            <a href="#kost" className="hero-promo-button">
                                Jelajahi Pilihan Kost
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M5 12H19M13 6L19 12L13 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>

                            <span className="hero-promo-note">
                                Temukan tempat tinggal yang sesuai dengan kebutuhanmu.
                            </span>
                        </div>


                        <div className="hero-benefits">
                            <div className="hero-benefit">
                                <span className="hero-benefit-icon">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path
                                            d="M12 2L19 5V11C19 16 15.5 20 12 22C8.5 20 5 16 5 11V5L12 2Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9 12L11 14L15 10"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span>Pilihan Terpercaya</span>
                            </div>

                            <div className="hero-benefit">
                                <span className="hero-benefit-icon">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="9"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                        <path
                                            d="M12 7V12L15 14"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span>Pencarian Mudah</span>
                            </div>

                            <div className="hero-benefit">
                                <span className="hero-benefit-icon">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path
                                            d="M3 7H21V19H3V7Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M3 11H21M7 15H11"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span>Harga Bervariasi</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
                                alt="Interior hunian modern yang nyaman"
                                className="hero-image"
                                loading="eager"
                            />

                            <div className="hero-image-overlay"></div>

                            <div className="hero-floating-card">
                                <span className="hero-floating-icon">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path
                                            d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.2L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>

                                <div>
                                    <strong>Tempat Tinggal Nyaman</strong>
                                    <span>Temukan pilihan sesuai kebutuhanmu</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-decoration hero-decoration-one"></div>
                        <div className="hero-decoration hero-decoration-two"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;