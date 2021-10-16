import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Search from '../components/search'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/dpo'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    category: string
    title: string
    id: string
  }[]
}) {
  const categories = Array.from(new Set(allPostsData.map(({ category }) => category)))
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Contact the Data Protection Officers of 🇸🇬 Singapore's businesses{' '}
          <Link href="/about"><a>Learn more</a></Link>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Search allPostsData={allPostsData} />
      </section>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}