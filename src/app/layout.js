import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
    title: {
        template: "%s",
        default: "West Science Olympiad"
    },
    description: {
        template: "%s",
        default: "Official Site for West High Science Olympiad, a Science Olympiad team based in Madison, Wisconsin."
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
            <Navbar />
            {children}
            <Footer />
        </body>
        </html>
    )
}