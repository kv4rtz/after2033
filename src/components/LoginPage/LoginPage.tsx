import styles from "./LoginPage.module.css";
import Container from "@/components/Container/Container";
import Link from "next/link";
import {useState} from "react";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <section className={styles.login}>
            <Container>
                <h2 className={styles.title}>LOGIN</h2>
                <form className={styles.form} action='post'>
                    <input className={styles.nickname} placeholder={'NICKNAME'} type="text"/>
                    <div className={styles['password-block']}>
                    <input className={styles.password} placeholder={'PASSWORD'} type={showPassword ? 'text' : 'password'}/>
                        {showPassword ? (
                            <i onClick={() => setShowPassword(!showPassword)} className={`fi fi-ss-eye-crossed ${styles.icon}`}></i>
                        ) : (
                            <i onClick={() => setShowPassword(!showPassword)} className={`fi fi-ss-eye ${styles.icon}`}></i>
                        )}
                </div>
                    <button onClick={e => e.preventDefault()} className={styles.btn}>SIGN IN</button>
                </form>
                <div className={styles.register}>No account? - <Link href={'/register'}>Sign up</Link></div>
            </Container>
        </section>
    )
}

export default LoginPage