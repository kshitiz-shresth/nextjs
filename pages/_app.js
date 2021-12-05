import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <NextNProgress options={{ showSpinner: false }}/>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp
