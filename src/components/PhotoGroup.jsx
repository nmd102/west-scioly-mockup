// The page that is displayed when the user goes to a photo group page in the photo gallery

import styles from "@/styles/Base.module.css";
import photos from "@/lib/photo-gallery/photos.json";
import Link from "next/link";

export default function PhotoGroup({group}) {
    const items = photos[group].photos;
    return (<>
        <header className={styles.header}>
            <h1>{photos[group].title}</h1>
            <p>{photos[group].description}</p>
        </header>
        <main className={`${styles.main} ${styles.lessons}`}>
            {items.map((item, key) => {
                return (<Link key={key} href={`${group}/${item.id}`} className={styles.blogLink}>
                    <button className={styles.lessonCard}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </button>
                </Link>)
            })}
        </main>
    </>)
}