import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const dynamic = 'force-static'
export const dynamicParams = false;

export const metadata = {
    metadataBase: new URL("https://nmd102.github.io"),
}

export default function RootLayout({children}) {
    return (<html lang="en">
        <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>)
}