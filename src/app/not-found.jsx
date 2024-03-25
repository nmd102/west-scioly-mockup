import Link from 'next/link'
import styles from '../styles/404.module.css'
import Image from "next/image";

export default function NotFound() {
    return <main id={styles.main}>
        <Image src="https://media.tenor.com/ZBIsRzLZfoYAAAAC/spongebob-where.gif" alt="Spongebob looking" width={498} height={280}/>
        <h1>[404] - Page Not Found</h1>
        <Link href="/">Go back home</Link>
    </main>
}