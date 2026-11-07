import apiRequest from "./api";

export async function getKosts() {
    const response = await apiRequest("/kosts");

    return response.data;
}

export async function getKostById(id) {
    const response = await apiRequest(`/kosts/${id}`);

    return response.data;
}