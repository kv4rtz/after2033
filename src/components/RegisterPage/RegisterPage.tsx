import styles from "./RegisterPage.module.css";
import Container from "@/components/Container/Container";
import {useState} from "react";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    return (
        <section className={styles.login}>
            <Container>
                <h2 className={styles.title}>SIGN UP</h2>
                <form className={styles.form} action='post'>
                    <input className={styles.nickname} placeholder={'NICKNAME'} type="text"/>
                    <input className={styles.email} placeholder={'EMAIL'} type="email"/>
                    <div className={styles['password-block']}>
                        <input className={styles.password} placeholder={'PASSWORD'} type={showPassword ? 'text' : 'password'}/>
                        {showPassword ? (
                            <i onClick={() => setShowPassword(!showPassword)} className={`fi fi-ss-eye-crossed ${styles.icon}`}></i>
                        ) : (
                            <i onClick={() => setShowPassword(!showPassword)} className={`fi fi-ss-eye ${styles.icon}`}></i>
                        )}
                    </div>
                    <div className={styles['password-block']}>
                        <input className={styles.password} placeholder={'CONFIRM PASSWORD'} type={showConfirmPassword ? 'text' : 'password'}/>
                        {showConfirmPassword ? (
                            <i onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={`fi fi-ss-eye-crossed ${styles.icon}`}></i>
                        ) : (
                            <i onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={`fi fi-ss-eye ${styles.icon}`}></i>
                        )}
                    </div>
                    <button onClick={e => e.preventDefault()} className={styles.btn}>REGISTER</button>
                </form>
            </Container>
        </section>
    )
}

export default RegisterPage