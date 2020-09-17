import Cover from '../../graphics/imageCover/Cover'
import Text from '../../graphics/textDisplayer/Text'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward'

function CentredCard({ image, title, description, link, width, descriptionHeight, style }) {

    const styleFont = {
        titleStyle: "font-kumbhsans font-bold  md:text-xl hover:underline cursor-pointer text-center break-words",
        descriptionStyle: "font-amiri text-base text-center",
        linkStyle: "font-yantramanav text-sm font-bold"
    }

    return (
        <div className={`${width} flex flex-col justify-center`}>
            <div className="w-full flex justify-center overflow-hidden">
                <img className="w-full object-cover object-center" src={image} alt="image cover" />
            </div>
            <div className={`flex flex-col justify-start items-center p-5 pr-10 md:p-16 ${descriptionHeight} bg-white`}>

                <Text text={title} style={` md:mb-1 text-gray-900`} textStyle={styleFont.titleStyle} />

                <Text text={description} style={`md:mb-2  text-gray-900 `} textStyle={styleFont.descriptionStyle} />

                <div className="md:mt-1">
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}

function LeftCard({ image, title, description, link, width, descriptionHeight, style }) {

    const styleFont = {
        titleStyle: "font-kumbhsans font-bold  md:text-xl hover:underline cursor-pointer text-center break-words",
        descriptionStyle: "font-amiri text-base text-center",
        linkStyle: "font-yantramanav text-sm font-bold"
    }

    return (
        <div className={`${width} flex flex-col justify-center`}>
            <div className="w-full flex justify-center overflow-hidden">
                <img className="w-full object-cover object-center" src={image} alt="image cover" />
            </div>
            <div className={`flex flex-col justify-start items-center p-5 pr-10 md:p-16 ${descriptionHeight} bg-white`}>

                <Text text={title} style={` md:mb-1 text-gray-900`} textStyle={styleFont.titleStyle} />

                <Text text={description} style={`md:mb-2  text-gray-900 `} textStyle={styleFont.descriptionStyle} />

                <div className="md:mt-1">
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}

function RightCard({ image, title, description, link, width, descriptionHeight, style }) {

    const styleFont = {
        titleStyle: "font-kumbhsans font-bold  md:text-xl hover:underline cursor-pointer text-center break-words",
        descriptionStyle: "font-amiri text-base text-center",
        linkStyle: "font-yantramanav text-sm font-bold"
    }

    return (
        <div className={`${width} flex flex-col justify-center`}>
            <div className="w-full flex justify-center overflow-hidden">
                <img className="w-full object-cover object-center" src={image} alt="image cover" />
            </div>
            <div className={`flex flex-col justify-start items-center p-5 pr-10 md:p-16 ${descriptionHeight} bg-white`}>

                <Text text={title} style={` md:mb-1 text-gray-900`} textStyle={styleFont.titleStyle} />

                <Text text={description} style={`md:mb-2  text-gray-900 `} textStyle={styleFont.descriptionStyle} />

                <div className="md:mt-1">
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}

export default function StoryEntry({ type, image, title, description, link, width, imageHeight, descriptionHeight, style }) {


    return (
        <div className={style}>
            {type === 1 && <CentredCard
                image={image}
                title={title}
                description={description}
                link={link}
                width={width}
                imageHeight={imageHeight}
                descriptionHeight={descriptionHeight}
                style="" />}
            {type === 2 && <LeftCard
                image={image}
                title={title}
                description={description}
                link={link}
                width={width}
                imageHeight={imageHeight}
                descriptionHeight={descriptionHeight}
                style="" />}
            {type === 2 && <RightCard
                image={image}
                title={title}
                description={description}
                link={link}
                width={width}
                imageHeight={imageHeight}
                descriptionHeight={descriptionHeight}
                style="" />}
        </div>
    )
}