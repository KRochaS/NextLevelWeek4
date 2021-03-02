import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(
        ChallengesContext,
    );

    const { isDarkMode, darkMode } = useContext(ThemeContext);

    const percentToNextLevel =
        Math.round(currentExperience * 100) / experienceToNextLevel;

        function handleIsThemeDark() {

            darkMode();
    
          
        }

    return (

        <header className={styles.experienceBar}>
            <span className={isDarkMode ? styles.textDark : ''}>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span
                    className={!isDarkMode ? styles.currentExperience : styles.currentExperienceDark}
                    style={{ left: `${percentToNextLevel}%` }}
                >
                    {currentExperience} xp
          </span>
            </div>
            <span className={isDarkMode ? styles.textDark : ''} >{experienceToNextLevel} xp</span>

           
            <button type="button" className={styles.darkMode} onClick={handleIsThemeDark}>
                <img src={!isDarkMode ? `icons/moon.svg` : `icons/sun.svg`} alt="level" />

            </button>

        </header>




    );
}