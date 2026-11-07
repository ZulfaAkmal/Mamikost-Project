
import kosts from "../data/kosts.js";

export function getAllKosts(req, res) {
    res.status(200).json({
        success: true,
        message: "Data kost berhasil diambil",
        data: kosts
    });
}

export function getKostById(req, res) {
    const { id } = req.params;

    const kost = kosts.find((item) => item.id === Number(id));

    if (!kost) {
        return res.status(404).json({
            success: false,
            message: "Data kost tidak ditemukan"
        });
    }

    res.status(200).json({
        success: true,
        data: kost
    });
}