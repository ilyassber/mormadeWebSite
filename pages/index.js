import React from 'react'
import Layout from '../components/layout'
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
      <img src="/images/cofee.jpg" />
      <Link href="/regions" ><a>hi there</a></Link>
    </Layout>
  )
}

export default hello