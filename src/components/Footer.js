import Link from "next/link";

export default function Footer() {
    return (<footer>
            <Link href="/" className="logo">
                <h2>[W<span className="oring">est High</span><span className="close"> Sci Oly]</span></h2>
            </Link>
            <a href="mailto:kaventurini@madison.k12.wi.us" className="signature" aria-label="no click">
                <p>kaventurini@madison.k12.wi.us</p>
            </a>

            <p>(617)-710-9501</p>
        </footer>)
}