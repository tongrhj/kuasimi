import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/dpo'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  postData
}: {
  postData: {
    title: string
    category: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          name="description"
          content={`Contact the Data Protection Officer of 🇸🇬 ${postData.title} - KUA SIMI Opt-out of Data Misuse in Singapore's businesses`}
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          {postData.title}{' '}
          <span className={utilStyles.lightText}>
            {postData.category}
          </span>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
