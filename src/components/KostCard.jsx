import { useNavigate } from "react-router-dom";

function KostCard({ kost }) {
    const navigate = useNavigate();

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleDetail = () => {
        navigate(`/kost/${kost.id}`);
    };

    return (
        <article className="kost-card">
            <div className="kost-card-image-wrapper">
                <img
                    src={kost.image}
                    alt={kost.name}
                    className="kost-card-image"
                    loading="lazy"
                />

                <span className={`kost-card-type kost-type-${kost.type.toLowerCase()}`}>
                    {kost.type}
                </span>
            </div>

            <div className="kost-card-content">
                <div className="kost-card-location">
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

                    <span>{kost.area}, {kost.city}</span>
                </div>

                <h3 className="kost-card-name">
                    {kost.name}
                </h3>

                <p className="kost-card-address">
                    {kost.address}
                </p>

                <div className="kost-card-facilities">
                    {kost.facilities.slice(0, 3).map((facility, index) => (
                        <span key={`${facility}-${index}`}>
                            {facility}
                        </span>
                    ))}

                    {kost.facilities.length > 3 && (
                        <span className="kost-facility-more">
                            +{kost.facilities.length - 3}
                        </span>
                    )}
                </div>

                <div className="kost-card-divider"></div>

                <div className="kost-card-footer">
                    <div className="kost-card-price">
                        <strong>{formatPrice(kost.price)}</strong>
                        <span>/ bulan</span>
                    </div>

                    <button
                        type="button"
                        className="kost-card-button"
                        onClick={() => navigate(`/kost/${kost.id}`)}
                    >
                        Lihat Detail
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default KostCard;