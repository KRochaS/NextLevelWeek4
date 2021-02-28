import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);
    const { isDarkMode } = useContext(ThemeContext);
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/KRochaS.png" alt="Karine Rocha" />

            <div >
                <strong className={isDarkMode ? styles.title : ''}> Karine Rocha </strong>
                <p className={isDarkMode ? styles.titleDark : '' }>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                 </p>
            </div>
        </div>

    );
}