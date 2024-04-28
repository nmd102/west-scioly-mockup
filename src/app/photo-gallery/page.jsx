import styles from '../../styles/Base.module.css'
import {items} from "@/lib/photo-gallery"
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Photo Gallery | [WHSO]", description: "Photo Gallery"
}

export default function PhotoGallery() {
    return (<>
        <header className={styles.header}>
            <h1>photo gallery</h1>
            <p>jayden take photos please also kevin freestyle here soon</p>
        </header>
        <main className={`${styles.main} ${styles.tr}`}>
            {items.map((item, key) => {
                return (<article className={styles.trCard} key={key}>
                    <div>
                        <div>
                            <h2>{item.title}</h2>
                        </div>
                        <div>
                            {item.icon && <Image src={item.icon} width={item.width} height={item.height}
                                                 alt={`${item.title} logo`}/>}
                        </div>
                        <p>{item.description}</p>
                    </div>
                    <Link href={item.link}>
                        <span>{item.displayLink}</span>
                        <Image src="media/arrow.svg" alt="arrow" width={100} height={100}/>
                    </Link>
                </article>)
            })}
        </main>
    </>)
}