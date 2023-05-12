import Container from "@/components/Container/Container"
import styles from './NavBar.module.css'
import Link from "next/link"
import links from "@/components/NavBar/Links"

const NavBar = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Link href={'/'} className={styles.logo}>AFTER 2033</Link>
                    <nav>
                        <ul className={styles.list}>
                            {/*<div className={styles.left}>*/}
                            {/*    {links.map((el, idx) => (*/}
                            {/*        idx <=1 ? <li key={idx} className={styles.item}><Link href={el.link}>{el.text}</Link></li> : null*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                            <div className={styles.right}>
                                {links.map((el, idx) => (
                                    <li key={idx} className={styles.item}><Link href={el.link}>{el.text}</Link></li>
                                ))}
                            </div>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default NavBar