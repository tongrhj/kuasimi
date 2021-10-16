import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/dpo'
import Link from 'next/link'
import { GetStaticProps } from 'next'

const capitalize = (s:string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

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
          Opt-out of Data Misuse: Contact the Data Protection Officers of 🇸🇬 Singapore's businesses{' '}
          <Link href="/about"><a>Learn more</a></Link>
        </p>
      </section>

      {categories.map(category => (<section key={category} className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}><h2 className={utilStyles.headingLg}>{capitalize(category)}</h2>
        <ul className={utilStyles.list}>
        {allPostsData.filter((p) => p.category === category).map(({ id, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/dpo/${encodeURIComponent(id)}`}>
              <a>{title}</a>
            </Link>
            <br />
          </li>
        ))}
      </ul></section>)
      )}

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
