import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <div className={isDarkMode ? styles.textDark : ''}>
            <span> Desafios Completos </span>
            <span>  {challengesCompleted} </span>

            </div>
        </div>
    );
}