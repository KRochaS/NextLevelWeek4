

import styles from '../styles/pages/Login.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState(null);
    const [userName, setUserName] = useState(null);

    function entrarMovit() {
        localStorage.setItem('email', email);
        localStorage.setItem('nome', userName);

        router.push('/home');

    }

    return (

        <div className={styles.container}>

            <aside>
                <div>
                    <img className={styles.image} src="/icons/assets/background.svg" alt="Logo" />


                </div>
            </aside>

            <div className={"col-12 col-md-6 "}>
                <main className="d-flex justify-content-center align-items-center h-85">
                    <div className={styles.mainContent}>
                        <img src="/icons/assets/Logo-completo.svg" alt="logo" />
                        <form className={styles.form}>
                            <input
                                type="text"
                                placeholder="Digite seu E-mail"
                                onChange={event => setEmail(event.target.value)}
                                value={email}

                            />

                            <input
                                type="text"
                                placeholder="Digite o seu Nome"
                                onChange={event => setUserName(event.target.value)}
                                value={userName}

                            />

                               

                            <button onClick={() => entrarMovit()} className={email && userName ?  styles.button : styles.disabled} type="button">
                                Entrar
                            </button>
                        </form>
                    </div>
                </main>
            </div>


        </div>

    )

}
