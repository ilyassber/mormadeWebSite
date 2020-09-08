import Layout from '../components/layout'

import Link from 'next/link'



const categories = [
    {
        tag : "clothes",
        sous_tags : ["shoes", "t-shirts", "jeans", "socks"],
        tag_image : "images/tags/clothes/clothes-1.jpg"
    },
    {
        tag : "jewlery",
        sous_tags : ["neckchains", "rings", "bracelets", "earrings", "watches"],
        tag_image : "images/tags/jewlery/jewlery-1.jpg"
    },
    {
        tag : "furniture",
        sous_tags : ["tables","beds","chair","sofa", "wardrobes"],
        tag_image : "images/tags/furniture/furniture-1.jpg"
    },
    {
        tag : "gifts",
        sous_tags : ["parfum","braclet","socks","backpack","necklace", "wallet"],
        tag_image : "images/tags/gifts/gifts-1.jpg"
    }
  ]
  
  

   

function Makers(){
    return (
        <Layout>
            <div className="w-full h-40"></div>
           <div className="flex justify-center items-center w-full ">
               <h1>makers</h1>
           </div>
        </Layout>
    )
}

export default Makers