import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero";
import KostSection from "../components/kostSection";

function Home() {
    return (
        <MainLayout>
            <div className="home-page">
                <Hero />
                <KostSection />
            </div>
        </MainLayout>
    );
}

export default Home;