import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}