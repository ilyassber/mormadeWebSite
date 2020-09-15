import React from 'react'
import Layout from '../components/layout'
import MakersEntry from '../components/elements/MakersEntry/MakersEntry'
import RegionsEntry from '../components/elements/RegionsEntry/RegionsEntry'
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
      <MakersEntry/>
      <RegionsEntry/>
    </Layout>
  )
}

export default hello