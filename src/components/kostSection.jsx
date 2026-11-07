import KostCard from "./KostCard";
import useKosts from "../hooks/useKosts";
import "../css/kost.css";

function KostSection() {
    const {
        areas,
        filteredKosts,
        selectedArea,
        setSelectedArea,
        loading,
        error,
        fetchKosts
    } = useKosts();

    return (
        <section className="kost-section" id="kost">
            <div className="app-container">
                <div className="kost-section-header">
                    <div className="kost-section-heading">
                        <span className="kost-section-eyebrow">
                            PILIHAN HUNIAN
                        </span>

                        <h2 className="kost-section-title">
                            Temukan Kost yang Tepat
                            <span> untuk Kamu</span>
                        </h2>

                        <p className="kost-section-description">
                            Jelajahi berbagai pilihan kost dengan lokasi,
                            fasilitas, dan harga yang sesuai kebutuhanmu.
                        </p>
                    </div>

                    <div className="kost-filter">
                        <div className="kost-filter-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                                <circle cx="12" cy="10" r="2.5" />
                            </svg>
                        </div>

                        <div className="kost-filter-content">
                            <label htmlFor="kost-area-filter">
                                Pilih Wilayah
                            </label>

                            <select
                                id="kost-area-filter"
                                value={selectedArea}
                                onChange={(event) =>
                                    setSelectedArea(event.target.value)
                                }
                            >
                                <option value="Semua Wilayah">
                                    Semua Wilayah
                                </option>

                                {areas.map((area) => (
                                    <option key={area} value={area}>
                                        {area}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="kost-filter-chevron">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="kost-list-toolbar">
                    <div className="kost-result-info">
                        <span className="kost-result-dot"></span>
                        <span>
                            {loading
                                ? "Memuat daftar kost..."
                                : `${filteredKosts.length} kost tersedia`}
                        </span>
                    </div>

                    {selectedArea !== "Semua Wilayah" && (
                        <button
                            type="button"
                            className="kost-reset-filter"
                            onClick={() =>
                                setSelectedArea("Semua Wilayah")
                            }
                        >
                            Reset filter
                            <span aria-hidden="true">×</span>
                        </button>
                    )}
                </div>

                {loading && (
                    <div className="kost-state">
                        <div className="kost-loading-spinner"></div>
                        <p>Sedang memuat pilihan kost...</p>
                    </div>
                )}

                {!loading && error && (
                    <div className="kost-state kost-error">
                        <p>{error}</p>

                        <button
                            type="button"
                            onClick={fetchKosts}
                        >
                            Muat Ulang
                        </button>
                    </div>
                )}

                {!loading && !error && filteredKosts.length > 0 && (
                    <div className="kost-grid">
                        {filteredKosts.map((kost) => (
                            <KostCard key={kost.id} kost={kost} />
                        ))}
                    </div>
                )}

                {!loading && !error && filteredKosts.length === 0 && (
                    <div className="kost-state kost-empty">
                        <div className="kost-empty-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path d="m16 16 4 4" />
                            </svg>
                        </div>

                        <h3>Kost Belum Tersedia</h3>

                        <p>
                            Belum ada pilihan kost untuk wilayah ini.
                            Silakan pilih wilayah lainnya.
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedArea("Semua Wilayah")
                            }
                        >
                            Lihat Semua Kost
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default KostSection;