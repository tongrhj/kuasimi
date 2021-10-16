import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>We read the Privacy Policies of Singapore's most popular businesses, so you don't have to.</p>
        <p>
          Questions? Contact <a href="https://jaredtong.com">Jared Tong</a> (<a href="mailto:ahkong@kuasimi.com">ahkong at kuasimi dot com</a>)
        </p>
      </section>
    </Layout>
  )
}
