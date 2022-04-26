import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Black Badge</title>
        <meta name="description" content="Black Badge DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <span className={styles.logo}>
         <Image src="/blkbdglogo.jpg" alt="Black Badge Logo" width={400} height={400} />
       </span>
      </main>
    </div>
  )
}
