import styles from './Biography.module.css'
import Container from "@/components/Container/Container"
import Image from "next/image"
import { specitifity } from "@/components/Biography/specitifity"

const Biography = () => {
    return (
        <section className={styles.bio}>
            <Container>
                <div className={styles.wrapper}>
                    <Image width={234} height={649} src="/dkrimsikiy.png" alt={'person'} />
                    <div className={styles.info}>
                        <h3>DMITRIY “VEKTOR” KRIMSKIY</h3>
                        <div className={styles.main}>
                            {specitifity.map((el, idx) => (
                                <div key={idx}>
                                    <h4>{el.title}</h4>
                                    <p>{el.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className={`${styles.block} ${styles.weapons}`}>
                            <h4>WEAPONS</h4>
                            <p>Kalashnikov Assault Rifle - 12, Makarov’s Pistol, Kalashnikov ULTIMA, Vityaz Submachine gun</p>
                        </div>
                        <div className={styles.block}>
                            <h4>BIOGRAPHY</h4>
                            <p>Dmitry Krymsky is known as a Vector in his radiation chemical biological troops. As a young fighter, Viktor overcame various difficulties, was awarded the state award - Hero of the Russian Federation, for saving his commander and was promoted to Major General, deputy commander of special forces.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Biography