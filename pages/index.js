import Head from 'next/head'

// components
import Presentation from "../components/Presentation";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fabrizio Tessaro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Presentation/>
      </main>
    </div>
  )
}
