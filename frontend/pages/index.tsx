import Head from 'next/head';
// import Image from 'next/image';

import { UserSignup } from '/components/Auth/UserSignup';
import { UserLogin } from '/components/Auth/UserLogin';

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Fourty-io</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='home__landing-hero'>
        <div className='home__landing-hero__content-container'>
          <span>
            <h1 className='home__title'>Fourty-io</h1>
          </span>
          <div className='home__login-signup-btn'>
            <UserLogin />
            <UserSignup />
          </div>
        </div>
      </section>
      <section className='about-section'>
        <h2>About</h2>
        <p className='description'>
          We aim to help Midwives and Mother across the world by giving them the
          best content we can offer.
          <br />
          - Reliability
          <br />
          - Helping
          <br />
          - Caring
          <br />- Putting you first
        </p>
      </section>
    </div>
  );
}
