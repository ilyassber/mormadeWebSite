import React, { useEffect } from 'react'
import Layout from '../components/layout'
import AlphaDisplayer from '../components/elements/alpha-displayer/AlphaDisplayer'
import MakersEntry from '../components/elements/MakersEntry/MakersEntry'
import RegionsEntry from '../components/elements/RegionsEntry/RegionsEntry'
import { Cover1 } from '../components/graphics/imageCover/Cover'
import Link from 'next/link'
import Head from 'next/head'
import ProductGrid from '../components/widgets/product/ProductGrid'
import { parseCookies } from '../lib/parseCookies'
import { getRequest } from '../services/api/get/getRequest'
import { authenticate } from '../services/authentication/authentication'
import { checkUser } from '../services/authentication/checkUser'
import { MakerRegist } from '../components/elements/authentication'
import { WelcomeBar } from '../components/elements/bar'
import { postRequest } from '../services/api/post/postRequest'
import querystring from 'querystring'
import ArticleList from '../components/elements/list/ArticleList'
import ArticleBanner from '../components/widgets/article/ArticleBanner'

const images = {
  cover01: "images/Articles/cover-01.jpg",
  cover02: "images/Articles/cover-02.jpg",
  cover1: "images/Articles/cover-1.jpg",
  cover2: "images/Articles/cover-2.jpg",
  cover3: "images/Articles/cover-3.jpg",
  cover4: "images/Articles/cover-4.jpg",
  cover5: "images/Articles/cover-5.jpg",
  cover6: "images/Articles/cover-6.jpg",
  cover7: "images/Articles/cover-7.jpg",
  cover8: "images/Articles/cover-8.jpg",
  cover9: "images/Articles/cover-9.jpg",
}

const Hello = (props) => {

  let articlesList = props.trending.map(function (article) {
    return <ArticleBanner className="h-auto w-full max-w-screen-md mt-4" key={article.id} data={article} />
  })

  return (
    <Layout tags={props.tags}>
      <Head>
        <title>MorMade</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="w-full flex flex-col bg-white items-center">
        <WelcomeBar className="w-full"/>
        <div className="w-full max-w-screen-md">
          <ArticleList className="w-full" data={articlesList} />
          <MakerRegist className="w-full my-4" csrf={props.cookies['csrftoken']} />
        </div>
      </div>
    </Layout>
  )
}

Hello.getInitialProps = async ({ req }) => {
  const cookies = parseCookies(req)

  console.log(cookies)

  const tags = await getRequest(process.env.domain + '/api/categories/').then((res) => {
    return (res)
  })

  const trending = await postRequest(
    querystring.stringify({
      operation: 'trending'
    }),
    cookies['csrftoken'],
    process.env.domain + '/api/articles/'
  ).then((res) => {
    return res
  })

  console.log(trending)

  return {
    cookies: cookies,
    tags: tags,
    trending: trending
  }
}

export default Hello