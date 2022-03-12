import Head from 'next/head';
import { Layout } from '/components/layout';

export default function ClientHome() {
  return (
    <Layout>
      <Head>
        <title>Client Home</title>
      </Head>
      <div>Client Home</div>
    </Layout>
  );
}
