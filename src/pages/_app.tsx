import type { AppProps } from 'next/app'
import { GlobalStyle } from './../styles/global';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
