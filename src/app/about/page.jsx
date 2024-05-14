import styles from '@/styles/Base.module.css'

export const metadata = {
    title: "About | [WHSO]", description: "Learn about Madison West Science Olympiad"
}

export default function About() {
    return (<>
            <header className={styles.header}>
                <h1>About</h1>
                <p>Madison West Science Olympiad</p>
            </header>
            <main className={styles.main}>
                    <p>
                        Madison West Science Olympiad is a student-led organization that competes in the Science
                        Olympiad
                        competition. We are a group of students who are passionate about science and enjoy learning
                        about
                        various scientific topics. We compete in regional, state, and national competitions.
                    </p>
            </main>
        </>)
}