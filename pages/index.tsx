import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adam Honoré</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
          <section className="h-screen">
            <div className="flex flex-wrap justify-around shadow-xl rounded-md bg-gray-900">
          
              <div className="object-center flex justify-center align-center no-wrap flex-col">
                <h1 className="font-custom text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-pink-600 to-indigo-700 font-black py-4 px-4">Adam Honore</h1>
                <h2 className="font-custom text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-pink-600 to-indigo-700 font-black py-4 px-4 ">Full Stack Software Developer</h2>
              </div>

              <div className="box-content bg-gradient-to-b from-pink-600 to-indigo-700 rounded-full m-4"> 
                <img src="https://res.cloudinary.com/ahonore42/image/upload/v1587911075/adam1_x3rxny.jpg" alt="Adam"
                  className="w-64 inline-block align-middle rounded-full m-1"
                />
              </div>

            </div>
          </section>
     

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
