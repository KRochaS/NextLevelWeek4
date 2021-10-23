import '../styles/global.css';

import styles from '../styles/globalDark.module.css';

import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';
import React, { useContext } from 'react';
// import { Login } from './Login';
import Home from './home';

function MyApp({ Component, pageProps }) {

    return (

        
        <ThemeProvider>
            <main>
            <Component  {...pageProps} />
            </main>
          {/* <Home /> */}
        </ThemeProvider>






    )


}

export default MyApp
