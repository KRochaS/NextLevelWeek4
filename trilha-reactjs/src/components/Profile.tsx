import { useContext, useEffect, useState } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);
    const { isDarkMode } = useContext(ThemeContext);

    const [email, setEmail] = useState(null);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        setEmail(localStorage.getItem('email'));
        setUserName(localStorage.getItem('nome'));
    }, []);

    
    return (
        <div className={styles.profileContainer}>
            <span>
                    <p>{ userName && userName[0]} </p>
            </span>
            <div >
                <strong className={isDarkMode ? styles.title : ''}> {userName} </strong>
                <p className={isDarkMode ? styles.titleDark : '' }>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                 </p>
            </div>
        </div>

    );
}