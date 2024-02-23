import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.scss'
import { items } from "../lib/photo-gallery"

export default function ToolsResources() {
  return (<>
    <Metatags title="Photo Gallery | [WHSO]" description="Photo gallery"/>
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
            {item.icon && <img src={item.icon} width={item.width} height={item.height} alt={`${item.title} logo`}/>}
            </div>
            <p>{item.description}</p>
          </div>
          <a href={item.link} target="_blank">
            <span>{item.displayLink}</span>
            <img src="../media/arrow.svg"/>
          </a>
        </article>)
      })}
    </main>
  </>)
}