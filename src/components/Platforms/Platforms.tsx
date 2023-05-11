import styles from './Platforms.module.css'
import Image from "next/image"
import Container from "@/components/Container/Container"

const Platforms = () => {
    return (
        <section className={styles.platforms}>
            <Container>
                <h2 className={styles.title}>CHOOSE YOUR PLATFORM</h2>
                <div className={styles.all}>
                    <a href="https://store.playstation.com/en-us/pages/latest" target="_blank"><Image width={200} height={154} src='/ps.svg' alt='playstation' /></a>
                    <a href="https://store.steampowered.com/?l=russian" target="_blank"><Image width={151} height={151} src='/steam.svg' alt='steam' /></a>
                    <a href="https://www.xbox.com/ru-RU/browse/games/console?PlayWith=XboxSeriesX%7CS,XboxOne,CloudGaming,XboxPlayAnywhere&xr=shellnav" target="_blank"><Image width={154} height={154} src='/xbox.svg' alt='xbox' /></a>
                    <a href="https://store.epicgames.com/ru/" target="_blank"><Image width={133} height={155} src='/epic.svg' alt='epicgames' /></a>
                </div>
            </Container>
        </section>
    )
}

export default Platforms