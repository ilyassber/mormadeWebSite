import { useState } from 'react'
import {ArticleContent, ArticleContent1 , ArticleContent2} from './article-utilities/ArticleContent'
import {ArticleCover , ArticleCover1 , ArticleCover2} from './article-utilities/ArticleCover'


function Article ({data}) {
    const text= "In 1506, the king of Portugal, D. Manuel I, ordered a fortress to be built there, named Castelo Real de Mogador. Altogether, the Portuguese are documented to have seized six Moroccan towns and built six stand-alone fortresses on the Moroccan Atlantic coast, between the river Loukos in the north and the river of Sous in the south. Four of them only had a short duration: Graciosa (1489), São João da Mamora (1515), Castelo Real of Mogador (1506–10) and Aguz (1520–25). Two became permanent urban settlements: Santa Cruz do Cabo de Gué (modern Agadir, founded in 1505–06), and Mazagan, founded in 1514–17. Following the 1541 Fall of Agadir, the Portuguese had to abandon most of their settlements between 1541 and 1550, although they were able to keep Ceuta, Tangier and Mazagan."
    const description = "It’s perhaps not surprising then that for the H&M fall kidswear collaboration Chen focuses on a fantastical and expressive world of animals, florals and other nature scenarios."
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <ArticleCover image="images/Articles/cover-9.jpg" title="Article" description={text}/>
            {/* <ArticleContent2 image="images/Articles/cover-5.jpg" title="Article" text={description}/>
            <ArticleContent1 image="images/Articles/cover-6.jpg" title="Article" text={description}/>
            <ArticleContent image="images/Articles/cover-6.jpg" title="Article" text={description}/>
            <ArticleContent1 image="images/Articles/cover-6.jpg" title="Article" text={description}/> */}
        </div>
    )
}

export default Article