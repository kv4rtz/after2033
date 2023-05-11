import styles from "./Main.module.css"
import Container from "@/components/Container/Container"
import Link from "next/link"

const Main = () => {
    return (
        <main className={styles.main}>
            <video className={styles.video} autoPlay loop muted src="/person.mp4"></video>
            <Container>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>WELCOME TO THE NEW ERA OF <span>AFTER 2033</span></h1>
                    <p className={styles.text}>Reflection of the situation in the world. An exciting plot and a beautiful surrounding world!</p>
                    <div className={styles.buttons}>
                        <Link className={styles.order} href='https://store.steampowered.com/?l=russian'>PRE-ORDER</Link>
                        <Link className={styles.tech} href='/techsupport'>TECHNICAL SUPPORT</Link>
                    </div>
                    <i className={`fi fi-ss-angle-double-small-down ${styles.down}`}></i>
                </div>
            </Container>
        </main>
    )
}

export default Main
