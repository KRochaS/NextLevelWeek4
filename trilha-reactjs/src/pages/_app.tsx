import '../styles/global.css';

import styles from '../styles/globalDark.module.css';

import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';
import { useContext } from 'react';

function MyApp({ Component, pageProps }) {

    return (

        
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>

  
    )


}

export default MyApp
