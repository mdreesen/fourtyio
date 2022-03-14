import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import UserSignup from '../components/UserSignup';
import UserLogin from '../components/UserLogin';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Fourty-io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.img_wrapper}>
          <Image
            src="/images/landing/landing.webp" // Route of the image file
            height={878} // Desired size with correct aspect ratio
            width={878} // Desired size with correct aspect ratio
            layout="responsive"
            objectFit="cover"
            position="fixed"
            alt="mother and baby holding hands"
          />
        </div>

      <section className="landingHero">

        <span><h1 className="title">Fourty-io</h1></span>
        <div className="loginSignupBtn">
          <UserLogin />
          <UserSignup />
        </div>
      </section>
      <section className="aboutSection">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </section>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  )
}
