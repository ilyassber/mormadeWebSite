import Layout from '../components/layout'
import {ArticleCover} from '../components/elements/Article/article-utilities/ArticleCover'
// import StoriesEntry from '../components/elements/StoriesEntry/StoriesEntry'
import {CentredStoryEntry, LeftStoryEntry, RightStoryEntry} from '../components/elements/StoriesEntry/StoriesEntry'

import Text from '../components/graphics/textDisplayer/Text'
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
    
    const componentMargin = "pt-0 md:pt-24 pb-18"
    const storyEntryStyle = "flex justify-start items-center w-full"

    return (
        <Layout>
            {/* <LeftStoryEntry
                image={images.cover9}
                title="Innovation in every detail"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{path :"/article", text : "Read The Story"}}                
                height="h-132"
                imageWidth="w-64 md:w-5/12"
                descriptionWidth="w-12 md:w-120"
                style={`flex justify-start items-center w-full ${componentMargin}`}/>

            <RightStoryEntry
                image={images.cover9}
                title="Innovation in every detail"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{path :"/article", text : "Read The Story"}}                
                height="h-132"
                imageWidth="w-64 md:w-5/12"
                descriptionWidth="w-12 md:w-120"
                style={`flex justify-end items-center w-full ${componentMargin}`}/> */}


<CentredStoryEntry
                image={images.cover9}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{path :"/article", text : "Read The Story"}}                
                width="w-11/12 max-w-6xl"
                imageHeight="h-132"
                descriptionHeight="h-64"
                style={`flex justify-center items-center w-full ${componentMargin}`}/>
<CentredStoryEntry
                image={images.cover9}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{path :"/article", text : "Read The Story"}}                
                width="w-11/12 max-w-6xl"
                imageHeight="h-132"
                descriptionHeight="h-64"
                style={`flex justify-center items-center w-full ${componentMargin}`}/>
<CentredStoryEntry
                image={images.cover8}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{path :"/article", text : "Read The Story"}}                
                width="w-8/12 max-w-4xl"
                imageHeight="h-192"
                descriptionHeight="h-64"
                style={`flex justify-center items-center w-full ${componentMargin}`}/>        
        </Layout>
    )
}

export default Stories