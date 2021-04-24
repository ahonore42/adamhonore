import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Introduction from '../components/Introduction'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adam Honoré</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Introduction />

       

        <div className={styles.grid}>
          

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
