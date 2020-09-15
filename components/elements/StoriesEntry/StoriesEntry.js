import Cover from '../../graphics/imageCover/Cover'
import Text from '../../graphics/textDisplayer/Text'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward'

function CentredCard({ image, title, description, link, width, imageHeight, descriptionHeight, style }) {

    const styleFont = {
        titleStyle: "font-kumbhsans font-bold text-xl hover:underline cursor-pointer text-center break-words",
        descriptionStyle: "font-amiri text-base text-center",
        linkStyle: "font-yantramanav text-sm font-bold"
    }

    return (
        <div className={`${style} flex flex-col justify-center  ${width}`}>
            <Cover image={image} height={imageHeight} style={`flex justify-center items-center ${imageHeight} ${width}  overflow-hidden`} imageStyle="transform hover:scale-105 translate-all ease-out duration-700">
            </Cover>
            <div className={`flex flex-col justify-start items-center p-16 ${descriptionHeight} w-full bg-white`}>

                <Text text={title} style={`mb-1 text-gray-900 `} textStyle={styleFont.titleStyle} />

                <Text text={description} style={`mt-2 mb-2  text-gray-900 `} textStyle={styleFont.descriptionStyle} />

                <div className="mt-1">
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}

function LeftCard({ image, title, description, link, height, imageWidth, descriptionWidth, style }) {

    const styleFont = {
        titleStyle: "font-kumbhsans font-bold text-xl hover:underline cursor-pointer ",
        descriptionStyle: "font-amiri text-base",
        linkStyle: "font-yantramanav text-sm font-bold"
    }
    return (
        <div className={`${style} flex flex-row justify-center  ${height}`}>
            <Cover image={image} height={height} style={`flex justify-center items-center ${imageWidth} ${height}  overflow-hidden`} imageStyle="transform hover:scale-105 translate-all ease-out duration-700">
            </Cover>
            <div className={`flex flex-col justify-center items-start p-16 ${descriptionWidth} h-full bg-white`}>

                <Text text={title} style={`mb-1 text-gray-900 `} textStyle={styleFont.titleStyle} />

                <Text text={description} style={`mt-2 mb-2  text-gray-900 `} textStyle={styleFont.descriptionStyle} />

                <div className="mt-1 ">
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}

function RightCard({ image, title, description, link, height, imageWidth, descriptionWidth, style }) {

    const styleFont = {
        titleStyle: "font-kumbhsans font-bold text-xl hover:underline cursor-pointer text-right",
        descriptionStyle: "font-amiri text-base text-right",
        linkStyle: "font-yantramanav text-sm font-bold"
    }
    return (
        <div className={`${style} flex flex-row-reverse justify-center  ${height}`}>
            <Cover image={image} height={height} style={`flex justify-center items-center ${imageWidth} ${height}  overflow-hidden`} imageStyle="transform hover:scale-105 translate-all ease-out duration-700">
            </Cover>
            <div className={`flex flex-col justify-center items-end p-16 ${descriptionWidth} h-full bg-white`}>

                <Text text={title} style={`mb-1 text-gray-900 `} textStyle={styleFont.titleStyle} />

                <Text text={description} style={`mt-2 mb-2  text-gray-900 `} textStyle={styleFont.descriptionStyle} />

                <div className="mt-1 ">
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}

export function LeftStoryEntry({ image, title, description, link, height, imageWidth, descriptionWidth, style }) {


    return (
        <div className={style}>
            <LeftCard
                image={image}
                title={title}
                description={description}
                link={link}
                height={height}
                imageWidth={imageWidth}
                descriptionWidth={descriptionWidth}
                style="m-5" />
        </div>
    )
}
export function RightStoryEntry({ image, title, description, link, height, imageWidth, descriptionWidth, style }) {


    return (
        <div className={style}>
            <RightCard
                image={image}
                title={title}
                description={description}
                link={link}
                height={height}
                imageWidth={imageWidth}
                descriptionWidth={descriptionWidth}
                style="m-5" />
        </div>
    )
}

export function CentredStoryEntry({ image, title, description, link, width, imageHeight, descriptionHeight, style }) {


    return (
        <div className={style}>
            <CentredCard
                image={image}
                title={title}
                description={description}
                link={link}
                width={width}
                imageHeight={imageHeight}
                descriptionHeight={descriptionHeight}
                style="m-5" />
        </div>
    )
}