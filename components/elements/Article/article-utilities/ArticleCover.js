import Cover from './article-widgets/Cover'
import Title from './article-widgets/Title'
import Description from './article-widgets/Description'


export function ArticleCover ({image, title, description}) {

    return (
        <div className="flex flex-col justify-start items-center mb-2 w-11/12">
           <Cover image={image} height="h-180" style="relative flex flex-col justify-center items-center mt-4 w-full h-180  bg-gray-400 shadow-sm">
            <Title title={title} style="absolute -bottom-12 flex justify-center items-center w-108 h-32 font-abrilfatface font-bold text-7xl bg-white bg-opacity-50 shadow-lg"/>               
            </Cover>
            <Description text={description} style="mt-10 p-5 w-full bg-white shadow-sm " />
        </div>
    )
}

export function ArticleCover1 ({image, title, description}) {

    return (
        <div className=" flex flex-col justify-start items-center w-full  ">
            <Title title={title} style="flex justify-center items-center w-64 h-24 font-bold text-3xl"/>
            <Description text={description} style=" p-5 w-6/12 bg-white shadow-sm " />
           <Cover image={image} height="h-204" style="w-11/12 h-204 overflow-hidden bg-gray-400 shadow-sm"/>
            <Description text={description} style="m-10 p-5 w-6/12 bg-white shadow-sm " />
        </div>
    )
}

export function ArticleCover2 ({image, title, description}) {

    return (
        <div className="relative flex flex-col justify-start items-center w-full  ">
            <Title title={title} style="absolute top-48 left-24 flex justify-center items-center h-24 font-abrilfatface font-thin text-9xl text-white"/>
            <Description text={description} style=" p-5 w-6/12 bg-white shadow-sm " />
           <Cover image={image} height="h-288" style="w-full h-288 overflow-hidden bg-gray-400 shadow-sm"/>
            <Description text={description} style="absolute bottom-36 right-12 m-10 p-5 w-4/12 text-white shadow-sm bg-gray-900 bg-opacity-50 shadow-md" />
        </div>
    )
}

// export default {
//     ArticleCover, ArticleCover1, ArticleCover2
// }