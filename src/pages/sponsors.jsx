import Metatags from '../components/Metatags'
import styles from '../styles/InfoPage.module.css'
import { items } from "@/lib/sponsors"
import Image from "next/image"; // <- error here

export default function PeopleAgencies() {
  return (<>
    <Metatags title="Sponsors | [WHSO]" description="find cool people who gave us money"/>
    <header className={styles.header}>
      <h1>Sponsors</h1>  
      <p>w sponsors check out their websites</p>
      <br></br>
      <button className={styles.button}><h3><strong>click here to donate</strong></h3></button>
    </header>
    <main className={`${styles.main} ${styles.pa}`}>
      {items.map((item, key) => {
        return (<article className={styles.paCard} key={key}>
          <div>
            <h2>{item.name}</h2>
            <div className={styles.tags}>
              {item.tags.map((tag, key) => {
                return(<span key={key}>{tag}</span>)
              })}
            </div>
            <p>{item.description}</p>
          </div>
          <div className={styles.info}>
            <a href={item.link} target="_blank" className={styles.webLink} rel="noreferrer">
              <h3>{item.website}</h3>
              <p>Website</p>
            </a>
            <div>
              <h3>Socials</h3>
              <div className={styles.socials}>
                {item.socials.email && <a href={item.socials.email.link} target="_blank" rel="noreferrer">
                  <Image src="/media/pa/email.svg" alt="Email Icon" width={50} height={50}/>
                </a>}
                {item.socials.github && <a href={item.socials.github.link} target="_blank" rel="noreferrer">
                  <Image src="/media/pa/github.svg" alt="Github Logo" width={50} height={50}/>
                </a>}
                {item.socials.instagram && <a href={item.socials.instagram.link} target="_blank" rel="noreferrer">
                  <Image src="/media/pa/instagram.svg" alt="Instagram Logo" width={50} height={50}/>
                </a>}
                {item.socials.discord && <a href={item.socials.discord.link} target="_blank" rel="noreferrer">
                  <Image src="/media/pa/discord.svg" alt="Discord Logo" width={50} height={50}/>
                </a>}
              </div>
            </div>
            <div>
              <h3>{item.price}</h3>
              <p>Money Donated</p>
            </div>
          </div>
        </article>)
      })}
    </main>
  </>)
}