import { useCallback, useEffect, useState } from "react";
import { getKostById } from "../services/kostService";

function useKostDetail(id) {
    const [kost, setKost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchKostDetail = useCallback(async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getKostById(id);
            setKost(data);
        } catch (err) {
            setKost(null);
            setError(err.message || "Gagal memuat informasi kost.");
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchKostDetail();
    }, [fetchKostDetail]);

    return {
        kost,
        loading,
        error,
        fetchKostDetail
    };
}

export default useKostDetail;