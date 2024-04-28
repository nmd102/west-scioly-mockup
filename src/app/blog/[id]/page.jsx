import blogs from '@/lib/blog/blogs.json'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styles from "@/styles/Blog.module.css"
import Link from 'next/link'


export function generateStaticParams() {
    return Object.keys(blogs)
        .map((value) => ({id: value}))
}

export let metadata = {
    title: "Blog | [WHSO]", description: "Read all about it on the WHSO blog"
}
export default function BlogEntry({params}) {
    const {id} = params;
    const info = blogs[id];
    metadata.title = info.title;
    return (<>
        <main id={styles.page}>
            <div id={styles.content}>
                <h1>{info.title}</h1>
                <i>{info.date}</i>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{info.content}</ReactMarkdown>

                <div id={styles.bottomButtons}>
                    {info.previous && <Link href={info.previous}>
                        <button className="btn">Previous</button>
                    </Link>}
                    {!info.previous && <button className="btn" disabled>Previous</button>}
                    {info.next && <Link href={info.next}>
                        <button className="btn">Next</button>
                    </Link>}
                    {!info.next && <button className="btn" disabled>Next</button>}
                </div>
            </div>
        </main>
    </>)
}
