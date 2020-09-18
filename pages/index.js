import React from 'react'
import Layout from '../components/layout'
import AlphaDisplayer from '../components/elements/alpha-displayer/AlphaDisplayer'
import MakersEntry from '../components/elements/MakersEntry/MakersEntry'
import RegionsEntry from '../components/elements/RegionsEntry/RegionsEntry'
import { Cover1 } from '../components/graphics/imageCover/Cover'
import Link from 'next/link'
import Head from 'next/head'
import ProductGrid from '../components/widgets/product/ProductGrid'

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

        <div className="max-w-5xl">
          
          <AlphaDisplayer
            image={images.cover01}
            title="Dresses made to last"
            description="Timeless designs made from recycled materials"
            buttonText="SHOP NOW"
          />
          <AlphaDisplayer
            image={images.cover02}
            title="Dresses made to last"
            description="Timeless designs made from recycled materials"
            buttonText="SHOP NOW"
          />
          <AlphaDisplayer
            image={images.cover02}
            title="Dresses made to last"
            description="Timeless designs made from recycled materials"
            buttonText="SHOP NOW"
          />
          <AlphaDisplayer
            image={images.cover7}
            title="Dresses made to last"
            description="Timeless designs made from recycled materials"
            buttonText="SHOP NOW"
          />       
        </div>


      <MakersEntry />
      <RegionsEntry />
    </Layout>



  )
}

export default hello