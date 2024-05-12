import styles from '../../styles/Base.module.css'
import {items} from "@/lib/sponsors"
import Image from "next/image";

export const metadata = {
    title: "Sponsors | [WHSO]", description: "Find cool people who gave use money"
}
export default function Sponsors() {
    return (<>
        <header className={styles.header}>
            <h1>Sponsors</h1>
            <p>w sponsors check out their websites</p>
            <br></br>
            <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                <button className={styles.button}><h3><strong>click here to donate</strong></h3></button>
            </a>
        </header>
        <main className={`${styles.main} ${styles.pa}`}>
            {items.map((item, key) => {
                return (<article className={styles.paCard} key={key}>
                    <div>
                        <h2>{item.name}</h2>
                        <div className={styles.tags}>
                            {item.tags.map((tag, key) => {
                                return (<span key={key}>{tag}</span>)
                            })}
                        </div>
                        <p>{item.description}</p>
                    </div>
                    <div className={styles.info}>
                        <a href={item.link} target="_blank" className={styles.webLink} rel="noreferrer">
                            <h3>Website</h3>
                            <p>{item.website}</p>
                        </a>
                        <div>
                            <h3>Socials</h3>
                            <div className={styles.socials}>
                                {item.socials.email &&
                                    <a href={item.socials.email.link} target="_blank" rel="noreferrer">
                                        <Image src="./media/socials/email.svg" alt="Email Icon" width={50} height={50}/>
                                    </a>}
                                {item.socials.github &&
                                    <a href={item.socials.github.link} target="_blank" rel="noreferrer">
                                        <Image src="./media/socials/github.svg" alt="Github Logo" width={50}
                                               height={50}/>
                                    </a>}
                                {item.socials.instagram &&
                                    <a href={item.socials.instagram.link} target="_blank" rel="noreferrer">
                                        <Image src="./media/socials/instagram.svg" alt="Instagram Logo" width={50}
                                               height={50}/>
                                    </a>}
                                {item.socials.discord &&
                                    <a href={item.socials.discord.link} target="_blank" rel="noreferrer">
                                        <Image src="./media/socials/discord.svg" alt="Discord Logo" width={50}
                                               height={50}/>
                                    </a>}
                                {item.socials.facebook &&
                                    <a href={item.socials.facebook.link} target="_blank" rel="noreferrer">
                                        <Image src="./media/socials/facebook.svg" alt="Discord Logo" width={50}
                                               height={50}/>
                                    </a>}
                                {item.socials.linkedin &&
                                    <a href={item.socials.linkedin.link} target="_blank" rel="noreferrer">
                                        <Image src="./media/socials/linkedin.svg" alt="Linkedin Logo" width={50}
                                               height={50}/>
                                    </a>}
                            </div>
                        </div>
                        <div>
                            <h3>Money Donated</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                </article>)
            })}
        </main>
    </>)
}