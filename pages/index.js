import React from 'react'
import Layout from '../components/layout'
import Article from '../components/elements/Article/Article'
import Link from 'next/link'
import Head from 'next/head'

const hello = ({ cookies = {} }) => {
  console.log(cookies)

  let contentDOM = (
    <h1>HELLO</h1>
  )

  return (
    <Layout>
      <Head>
        <title>MorMade</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <div className="w-full h-24"></div> */}
    </Layout>
  )
}

export default hello