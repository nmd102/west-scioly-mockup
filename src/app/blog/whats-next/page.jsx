import Link from 'next/link'
import Metatags from "../../../components/Metatags"
import styles from '../../../styles/Lessons.module.css'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";



export default function WhatsNext() {
    return(
        <>
            <Metatags title={"What's Next?"} description={"read all about it on the WHSO blog"} />
            <main id={styles.page}>
                <div id={styles.content}>
                    <h1>Madison West gets accepted into MIT invitational</h1>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{"NATS!!! We're gonna win state this time, beat those marquette private school kids"}</ReactMarkdown>
                    <div id={styles.bottomButtons}>
                        <Link href={"/blog/mit-accepted"}>
                            <button className="btn">Previous</button>
                        </Link>
                        <Link href={"/blog/mit-accepted"}>
                            <button className="btn">Next</button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}