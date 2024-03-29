import blogs from '@/lib/blog/blogs.json'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styles from "@/styles/Lessons.module.css"
import Link from 'next/link'


export function generateStaticParams() {
    let paths = [];
    for (const path in blogs) {
        paths.push({"id": path})
        console.log(path);
    }
    return paths;
}

export let metadata = {
    title: "Broken!!!!!",
    description: "Read all about it on the WHSO blog"
}
export default function BlogEntry({ params }) {
    const { id } = params;
    const info = blogs[id];
    metadata.title = info.title;
    return (<>
        <main id={styles.page}>
            <div id={styles.content}>
                <h1>{info.title}</h1>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{info.content}</ReactMarkdown>

                <div id={styles.bottomButtons}>
                    {info.previous &&
                        <Link href={info.previous}>
                            <button className="btn">Previous</button>
                        </Link>
                    }
                    {!info.previous &&
                        <button className="btn" disabled>Previous</button>
                    }
                    {info.next &&
                        <Link href={info.next}>
                            <button className="btn">Next</button>
                        </Link>
                    }
                    {!info.next &&
                        <button className="btn" disabled>Next</button>
                    }
                </div>
            </div>
        </main>
    </>)
}
