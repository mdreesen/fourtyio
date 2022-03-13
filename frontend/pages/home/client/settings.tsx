import Head from 'next/head';
import { Layout } from '/components/Layout';

export default function ClientHome() {
  return (
    <Layout>
      <Head>
        <title>Client Settings</title>
      </Head>
      <div>Client Settings</div>
    </Layout>
  );
}
