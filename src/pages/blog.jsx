import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.scss'
import Link from 'next/link';
import { items } from "@/lib/blog"
import Image from 'next/image'
export default function Learn() {
  return (<>
    <Metatags title="Blog| [WHSO]" description="follow the latest WHSO updates"/>
    <header className={styles.header}>
      <h1>Blog and News</h1>  
      <p>Follow the recent WHSO updates</p>
    </header>
    <main className={`${styles.main} ${styles.lessons}`}>
      {items.map((item, key) => {
        return (<Link key={key} href={`blog/${item.slug}`}>
          <button className={styles.lessonCard}>
            <Image src={item.img} alt={item.title}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </button>
        </Link>)
      })}
    </main>
  </>)
}