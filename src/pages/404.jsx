import Link from 'next/link'
import styles from '../styles/404.module.scss'
import Image from "next/image";

export default function FOF() {
  return <main id={styles.main}>
    <Image src="https://media.tenor.com/ZBIsRzLZfoYAAAAC/spongebob-where.gif" alt="Spongebob looking" width={100} height={100}/>
    <h1>[404] - Page Not Found</h1>
    <Link href="/">
    </Link>
  </main>
}