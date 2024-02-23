import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styles from '../../styles/Lessons.module.scss'
import Link from 'next/link'

import Metatags from "../../components/Metatags"

export default function Lesson({ info }) {
  const router = useRouter()
  const { id } = router.query

  return (<>
    <Metatags title={info.title} description="read all about it on the WHSO blog"/>
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

export async function getServerSideProps({ params }) {
  const req = await fetch(`https://localhost:3000/blog/${params.id}.json`);
  const data = await req.json();

  return {
    props: { info: data },
  }
}