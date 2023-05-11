import styles from './TechSupport.module.css'
import Container from "@/components/Container/Container";

const TechSupport = () => {
    return (
        <section className={styles.techsupport}>
            <Container>
                <h2 className={styles.title}>TECH SUPPORT</h2>
                <form className={styles.form} action='post'>
                    <input className={styles.input} placeholder={'EMAIL'} type="email"/>
                    <textarea className={styles.textarea} placeholder={'WRITE YOUR PROBLEM'}></textarea>
                    <button onClick={e => e.preventDefault()} className={styles.btn}>TO SEND</button>
                </form>
            </Container>
        </section>
    )
}

export default TechSupport