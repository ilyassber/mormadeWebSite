import Cover from './article-widgets/Cover'
import Title from './article-widgets/Title'
import Description from './article-widgets/Description'

export default function ArticleCover ({image, title, description}) {

    return (
        <div className=" flex flex-col justify-start items-center w-full  ">
            <Title title={title} style="flex justify-center items-center w-64 h-24 font-bold text-3xl"/>
            <Description text={description} style=" p-5 w-6/12 bg-white shadow-sm " />
           <Cover image={image} style="w-11/12 h-204 overflow-hidden bg-gray-400 shadow-sm"/>
            <Description text={description} style="m-10 p-5 w-6/12 bg-white shadow-sm " />
        </div>
    )
}