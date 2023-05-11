import styles from './Footer.module.css'
import Image from "next/image"
import Container from "@/components/Container/Container"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <p className={styles.age}>16+</p>
                <div className={styles.block}>
                    <a href="https://pegi.info" target={'_blank'}><Image width={146} height={176} src={'/16.svg'} alt={'16+'}/></a>
                    <a href="https://pegi.info" target={'_blank'}><Image width={166} height={166} src={'/violence.svg'} alt={'16+'}/></a>
                    <a href="https://pegi.info" target={'_blank'}><Image  width={166} height={166} src={'/fear.svg'} alt={'16+'}/></a>
                    <a href="https://pegi.info" target={'_blank'}><Image  width={166} height={166} src={'/language.svg'} alt={'16+'}/></a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer