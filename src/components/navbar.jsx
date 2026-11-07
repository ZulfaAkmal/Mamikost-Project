
import { useState } from "react";
import "../css/navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "Beranda", href: "/home-page" },
        { label: "Cari Kost", href: "#kost" },
        { label: "Tentang Kami", href: "#about" },
        { label: "Kontak", href: "#contact" },
    ];

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <header className="navbar">
            <div className="navbar-container app-container">

                {/* Logo */}
                <a
                    href="#home"
                    className="navbar-brand"
                    aria-label="MamiKost - Beranda"
                    onClick={closeMenu}
                >
                    <span className="navbar-logo-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10.5Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9 21V14H15V21"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>

                    <span className="navbar-brand-text">
                        Mami<span>Kost.</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav
                    className="navbar-nav"
                    aria-label="Navigasi utama"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="navbar-link"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="navbar-actions">
                    <a href="#kost" className="navbar-cta">
                        Cari Kost
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12H19M12 5L19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className={`navbar-menu-button ${
                        isMenuOpen ? "active" : ""
                    }`}
                    onClick={toggleMenu}
                    aria-label={
                        isMenuOpen
                            ? "Tutup menu navigasi"
                            : "Buka menu navigasi"
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                id="mobile-navigation"
                className={`navbar-mobile ${
                    isMenuOpen ? "open" : ""
                }`}
                aria-hidden={!isMenuOpen}
                inert={!isMenuOpen}
            >
                <nav
                    className="navbar-mobile-content"
                    aria-label="Navigasi mobile"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="navbar-mobile-link"
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#kost"
                        className="navbar-mobile-cta"
                        onClick={closeMenu}
                    >
                        Cari Kost Sekarang
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
