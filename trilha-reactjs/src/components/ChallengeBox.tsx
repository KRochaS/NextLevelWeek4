import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ChallengeBox.module.css';


export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);

    const { resetCountdown } = useContext(CountdownContext);

    const { isDarkMode } = useContext(ThemeContext);

    function handleChallengeSucceeded() {
        completedChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }


    return (

        <div className={!isDarkMode ? styles.challengeBoxContainer : styles.challengeBoxContainerDark}>

            {
                activeChallenge ? (
                    <div className={styles.challengeActive}>
                        <header> Ganhe {activeChallenge.amount} xp</header>


                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                            <div className={isDarkMode ? styles.challengeActiveTextDark : ''} >
                                <strong> Novo desafio</strong>
                                <p>  {activeChallenge.description} </p>

                            </div>
                        </main>

                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}

                            > Falhei</button>
                            <button
                                type="button"
                                className={styles.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                            > Completei</button>
                        </footer>
                    </div>
                ) : (
                        <div className={styles.challengeNotActive}>

                            <span className={isDarkMode ? styles.darkTitles : ''}>
                                <strong>
                                    Finalize um ciclo para receber um desafio
                                </strong>
                                <p>
                                    <img src="icons/level-up.svg" alt="Level Up" />
                                    Avance de level completando desafios
                                </p>

                            </span>

                        </div>
                    )
            }
        </div>
    );
}