import styles from '../../styles/Base.module.css'
import Link from 'next/link';
import items from '@/lib/blog.json'
export const metadata = {
    title: "Blog | [WHSO]",
    description: "Follow the latest WHSO updates"
}

export default function Blog() {
    return (<>
        <header className={styles.header}>
            <h1>Blog and News</h1>
            <p>Follow the recent WHSO updates</p>
        </header>
        <main className={`${styles.main} ${styles.lessons}`}>
            {items.map((item, key) => {
                return (<Link key={key} href={`blog/${item.slug}`} className={"blogLink"}>
                    <button className={styles.lessonCard}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </button>
                </Link>)
            })}
        </main>
    </>)
}