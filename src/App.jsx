import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import KostDetail from "./pages/kostDetail";

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