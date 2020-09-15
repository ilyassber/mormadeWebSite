import Layout from '../components/layout'
import Article from '../components/elements/Article/Article'
import StoriesEntry from '../components/elements/StoriesEntry/StoriesEntry'
import Link from 'next/link'

const images = {
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


function Stories(){
    return (
        <Layout>
            <Article/>
        </Layout>
    )
}

export default Stories