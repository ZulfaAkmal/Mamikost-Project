import { useCallback, useEffect, useMemo, useState } from "react";
import { getKosts } from "../services/kostService";

function useKosts() {
    const [kosts, setKosts] = useState([]);
    const [selectedArea, setSelectedArea] = useState("Semua Wilayah");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchKosts = useCallback(async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getKosts();
            setKosts(data);
        } catch (err) {
            setError(err.message || "Gagal memuat daftar kost.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchKosts();
    }, [fetchKosts]);

    const areas = useMemo(() => {
        return [
            ...new Set(kosts.map((kost) => kost.area))
        ].sort((a, b) => a.localeCompare(b, "id"));
    }, [kosts]);

    const filteredKosts = useMemo(() => {
        if (selectedArea === "Semua Wilayah") {
            return kosts;
        }

        return kosts.filter(
            (kost) => kost.area === selectedArea
        );
    }, [kosts, selectedArea]);

    return {
        kosts,
        areas,
        filteredKosts,
        selectedArea,
        setSelectedArea,
        loading,
        error,
        fetchKosts
    };
}

export default useKosts;