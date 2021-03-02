import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
// import { ThemeProvider } from '../contexts/ThemeContext';
import styles from '../styles/pages/Home.module.css';
import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import stylesdark from '../styles/globalDark.module.css';




interface HomeProps {
    level: number
    currentExperience: number
    challengesCompleted: number
}




export default function Home({ level, currentExperience, challengesCompleted }: HomeProps) {
    const { isDarkMode, darkMode } = useContext(ThemeContext);


    function handleIsThemeDark() {

        darkMode();

        console.log(isDarkMode);
    }

    return (


        <div className={isDarkMode ? stylesdark.geral : ''}>
            <ChallengesProvider
                level={level}
                currentExperience={currentExperience}
                challengesCompleted={challengesCompleted}
            >
                <div className={styles.container}>
                    <Head>
                        <title>Inicio | move.it</title>
                    </Head>

                    <ExperienceBar />

                    {/* <Switch
                        onChange={handleIsThemeDark}
                        checked={isDarkMode === true}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={30}
                        handleDiameter={15}
                        offColor="#88898A"
                        onColor="#5EA3DE"
                    /> */}


                   

                    <CountdownProvider>
                        <section>
                            <div>
                                <Profile />
                                <CompletedChallenges />
                                <Countdown />
                            </div>
                            <div>
                                <ChallengeBox />
                            </div>
                        </section>
                    </CountdownProvider>
                </div>
            </ChallengesProvider>

        </div>




    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
        },
    }
}