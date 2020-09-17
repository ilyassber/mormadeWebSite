import Layout from '../components/layout'
import { ArticleCover } from '../components/elements/Article/article-utilities/ArticleCover'
// import StoriesEntry from '../components/elements/StoriesEntry/StoriesEntry'
import StoryEntry from '../components/elements/StoriesEntry/StoriesEntryRes'

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
    cover01: "images/Articles/cover-01.jpg",
    cover02: "images/Articles/cover-02.jpg",
    cover03: "images/Articles/cover-03.jpg",
    cover04: "images/Articles/cover-04.jpg",
    cover05: "images/Articles/cover-05.jpg",
    cover06: "images/Articles/cover-06.jpg",
}


function Stories() {

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


            <StoryEntry
                type={1}
                image={images.cover03}
                title="Innovation in every detail"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{ path: "/article", text: "Read The Story" }}
                />
            <StoryEntry
                type={2}
                image={images.cover04}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{ path: "/article", text: "Read The Story" }}
              />
            <StoryEntry
                type={2}
                image={images.cover05}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{ path: "/article", text: "Read The Story" }}
             />
            <StoryEntry
                type={1}
                image={images.cover06}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{ path: "/article", text: "Read The Story" }}
             />
            <StoryEntry
                type={2}
                image={images.cover7}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{ path: "/article", text: "Read The Story" }}
             />
            <StoryEntry
                type={1}
                image={images.cover3}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{ path: "/article", text: "Read The Story" }}
             />
            <StoryEntry
                type={3}
                image={images.cover04}
                title="Kangol x H&M feat Mabel: A streetwear collab for the self-made generation"
                description="With significant initiatives and amazing innovations, we can design clothes"
                link={{ path: "/article", text: "Read The Story" }}
             />
        </Layout>
    )
}

export default Stories