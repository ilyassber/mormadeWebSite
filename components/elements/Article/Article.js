import { useState } from 'react'
import ArticleContent from './article-utilities/ArticleContent'
import ArticleCover from './article-utilities/ArticleCover'


function Article ({data}) {
    const description = "It’s perhaps not surprising then that for the H&M fall kidswear collaboration Chen focuses on a fantastical and expressive world of animals, florals and other nature scenarios."
    return (
        <div className="flex flex-col justify-center w-full">
            <ArticleCover image="images/Articles/cover-4.jpg" title="Atay o Tmirat" description={description}/>
            <ArticleCover image="images/Articles/cover-5.jpg" title="Article" description={description}/>
            <ArticleCover image="images/Articles/cover-6.jpg" title="Article" description={description}/>
            <ArticleCover image="images/Articles/cover-9.jpg" title="Article" description={description}/>
            <ArticleContent />
            <ArticleContent />
            <ArticleContent />
            <ArticleContent />
            <ArticleContent />
            <ArticleContent />
        </div>
    )
}

export default Article