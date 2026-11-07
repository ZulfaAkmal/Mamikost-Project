
import { Link, useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import useKostDetail from "../hooks/useKostDetail";

import KostDetailContent from "../components/kostDetail";
import OtherKosts from "../components/otherKost";

import "../css/kost-detail.css";

function KostDetail() {
    const { id } = useParams();

    const {
        kost,
        loading,
        error,
        fetchKostDetail
    } = useKostDetail(id);

    return (
        <MainLayout>
            {loading ? (
                <div className="kost-detail-state">
                    <div className="kost-detail-spinner"></div>
                    <p>Memuat informasi kost...</p>
                </div>
            ) : error || !kost ? (
                <div className="kost-detail-state">
                    <h2>Kost Tidak Ditemukan</h2>
                    <p>{error || "Informasi kost tidak tersedia."}</p>

                    <div className="kost-detail-state-actions">
                        <button
                            type="button"
                            onClick={fetchKostDetail}
                        >
                            Coba Lagi
                        </button>

                        <Link to="/">
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <KostDetailContent kost={kost} />

                    <OtherKosts currentKostId={kost.id} />
                </>
            )}
        </MainLayout>
    );
}

export default KostDetail;
