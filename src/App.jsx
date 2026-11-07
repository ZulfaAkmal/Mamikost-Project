import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home.jsx";
import KostDetail from "./pages/KostDetail.jsx";;

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kost/:id" element={<KostDetail />} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;