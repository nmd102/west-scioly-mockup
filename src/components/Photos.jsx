// The page that is displayed when the user vies an individual page in the photo gallery

import photos from '@/lib/photo-gallery/photos.json'
import ids from '@/lib/photo-gallery/ids.json'
import styles from "@/styles/Blog.module.css"
import Link from 'next/link'
import Image from "next/image";

export const metadata = {
    title: "Blog | [WHSO]", description: "Read all about it on the WHSO blog"
}
export default function PhotosEntry({section, id}) {
    const info = photos[section].photos;
    const photo = info[ids[section][id]];
    metadata.title = info.title;
    return (<>
        <main id={styles.page}>
            <div id={styles.content}>
                <h1>{photo.title}</h1>
                <Image src={photo.image} width={photo.width} height={photo.height} alt={photo.title}/>
                <p>{photo.description}</p>
                <div id={styles.bottomButtons}>
                    {photo.previous && <Link href={photo.previous}>
                        <button className="btn">Previous</button>
                    </Link>}
                    {!photo.previous && <button className="btn" disabled>Previous</button>}
                    {photo.next && <Link href={photo.next}>
                        <button className="btn">Next</button>
                    </Link>}
                    {!photo.next && <button className="btn" disabled>Next</button>}
                </div>
            </div>
        </main>
    </>)
}
