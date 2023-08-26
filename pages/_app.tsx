import type { ReactElement, ReactNode } from 'react'
import Head from "next/head";
import type { AppProps } from 'next/app'
import {CacheProvider, EmotionCache} from "@emotion/react";
import type { NextPage } from "next";
import createEmotionCache from "../src/createEmotionCache";
import '../styles/globals.css';
import styles from '../styles/style.module.css'



const clientSideEmotionCache = createEmotionCache();

type nextPageWithLayout = NextPage & {
  getLayout?: (page:ReactElement) => ReactNode;
}

interface  MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: nextPageWithLayout;
}


const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Doctrack For Next</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </CacheProvider>
  )
}

export default App;

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }