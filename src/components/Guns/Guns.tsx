import styles from './Guns.module.css'
import Container from "@/components/Container/Container"
import { SyntheticEvent, useState } from "react"
import { gunsList, gunsSpecifications, IGunsSpecifications, TypeGunsVariants } from "@/components/Guns/guns-list"
import GunInfo from "@/components/Guns/GunInfo"

const Guns = () => {
    const [showList, setShowList] = useState<boolean>(false);
    const [currentGun, setCurrentGun] = useState<TypeGunsVariants>("AK-12")
    const [gunsSpec, setGunsSpec] = useState<IGunsSpecifications[]>(gunsSpecifications)

    const handleShow = () => setShowList(!showList)
    const handleGun = (e: SyntheticEvent<HTMLLIElement>) => setCurrentGun(e.target.innerHTML)

    return (
        <section className={styles.guns}>
            <Container>
                <div className={styles.top}>
                    <div>
                        <h2 className={styles.title}>GUNSMITH</h2>
                        <p className={styles.description}>With the help of weapons, you will be able to effectively fight with the enemies you meet on your way!</p>
                    </div>
                    <div>
                        <p className={styles.gun}>{currentGun}</p>
                        <div>
                            <button onClick={handleShow} className={styles.button}>CHANGE WEAPON<i className="fi fi-ss-caret-down"></i></button>
                            <ul className={`${styles.list} ${showList ? styles.active : ''}`}>
                                {gunsList.map((el, idx) => (
                                    <li onClick={handleGun} key={idx}>{el.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.down}>
                    {gunsSpec.filter(el => el.name === currentGun).map((el, idx) => (
                        <GunInfo key={idx} gun={el} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Guns