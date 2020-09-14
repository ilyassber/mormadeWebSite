// import Cover from './article-widgets/Cover'
import Cover from '../../../graphics/imageCover/Cover'
import Title from './article-widgets/Title'
import Description from './article-widgets/Description'

export function ArticleContent ({image, text, title}) {
    return (
        <div className="flex flex-col justify-center items-center mt-20 mb-20 w-full ">
            <Cover image={image} height="h-180" style="flex items-center mr-10 w-180 h-180 rounded-full overflow-hidden shadow">
            <Description text={text} style="flex justify-center items-center p-20  w-144 " />
            </Cover>
        </div>
    )
}

export function ArticleContent1 ({image, text, title}) {
    return (
        <div className="flex flex-row mt-20 mb-20 w-full h-132 ">
            <Description text={text} style="flex justify-center items-center p-20  w-144 h-144 rounded-full " />
            <Cover image={image} height="h-180" style="flex flex-1 items-center w-216 h-132 rounded-sm overflow-hidden shadow">
            </Cover>
        </div>
    )
}

export function ArticleContent2 ({image, text, title}) {
    return (
        <div className="flex flex-row mt-20 mb-20 w-full">
            <Cover image={image} height="h-180" style="flex items-center w-180 h-180 rounded-full overflow-hidden shadow">
            </Cover>
            <Description text={text} style="flex flex-1 justify-center items-center p-20  w-144 h-180  " />
        </div>
    )
}