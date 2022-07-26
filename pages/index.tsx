import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NextRequest } from 'next/server'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web View</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WebView Demo
        </h1>


      </main>

      <footer className={styles.footer}>
  
      </footer>
    </div>
  )
}

export default Home
