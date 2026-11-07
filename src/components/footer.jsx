
import "../css/footer.css";

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="app-container">
                <div className="footer-main grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="footer-brand">
                        <a href="#home" className="navbar-brand">
                            <span className="navbar-logo-icon">
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 21V14H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="navbar-brand-text">Mami<span>Kost.</span></span>
                        </a>
                        <p className="footer-description">
                            Temukan hunian nyaman yang sesuai dengan kebutuhan dan anggaranmu. Jadikan pencarian kost lebih mudah bersama MamiKost.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Navigasi</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Beranda</a></li>
                            <li><a href="#kost">Cari Kost</a></li>
                            <li><a href="#about">Tentang Kami</a></li>
                            <li><a href="#contact">Kontak</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Layanan</h3>
                        <ul className="footer-links">
                            <li><a href="#kost">Daftar Kost</a></li>
                            <li><a href="#kost">Detail Kost</a></li>
                            <li><a href="#kost">Reservasi Kost</a></li>
                            <li><a href="#kost">Informasi Fasilitas</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Hubungi Kami</h3>
                        <p className="footer-contact-text">
                            Temukan pilihan hunian yang tepat untuk kebutuhan tempat tinggalmu.
                        </p>
                        <a href="#home" className="footer-contact-link">
                            Jelajahi Kost
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} MamiKost. All rights reserved.</p>
                    <p>Hunian nyaman, pencarian lebih mudah.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
