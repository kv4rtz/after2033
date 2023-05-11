import Container from "@/components/Container/Container"
import styles from "./AboutUs.module.css"
import {designers, developers, marketers} from "@/components/AboutUs/persons";


const AboutUs = () => {
    return (
        <section className={styles.aboutus}>
            <Container>
                <h2 className={styles.title}>ABOUT US</h2>
                <div className={styles.blocks}>
                    <ul className={styles.list}>
                        <h3 className={styles["list-title"]}>Developers</h3>
                        {developers.map((element,id) =>(
                            <li key={id} className={styles["list-element"]}>
                                <h4>{element.name}</h4>
                                <p>{element.description}</p>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.list}>
                        <h3 className={styles["list-title"]}>Marketers</h3>
                        {marketers.map((element,id) =>(
                            <li key={id} className={styles["list-element"]}>
                                <h4>{element.name}</h4>
                                <p>{element.description}</p>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.list}>
                        <h3 className={styles["list-title"]}>Designers</h3>
                        {designers.map((element,id) =>(
                            <li key={id} className={styles["list-element"]}>
                                <h4>{element.name}</h4>
                                <p>{element.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}
export default AboutUs