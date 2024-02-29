import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [video, setVideo] = useState<any>(null);
  useEffect(() => {
    setVideo(<ReactPlayer url="https://d3iqdl336k8b10.cloudfront.net/leetcode2022.mp4" controls={true} />);
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {/* {video} */}
          <ReactPlayer url="https://d3iqdl336k8b10.cloudfront.net/leetcode2022.mp4" controls={true} />

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
