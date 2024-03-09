import Link from 'next/link'
import Metatags from "../../components/Metatags"
import styles from '../../styles/Lessons.module.scss'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function MitAccepted() {
    return(
        <>
            <Metatags title={"Madison West gets accepted into MIT invitational"} description={"read all about it on the WHSO blog"} />
            <main id={styles.page}>
                <div id={styles.content}>
                    <h1>Madison West gets accepted into MIT invitational</h1>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{"Madison west gets accepted into MIT invitational after kevin camps the sign up spreadsheet.\n\nSuch a great occasion.\n\n![/media/blog/mit.jpg](/media/blog/mit.jpg)\nWhere we are going on January 20th. "}</ReactMarkdown>
                    <div id={styles.bottomButtons}>
                        <Link href={"/blog/whats-next"}>
                            <button className="btn">Previous</button>
                        </Link>
                        <Link href={"/blog/whats-next"}>
                            <button className="btn">Next</button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}