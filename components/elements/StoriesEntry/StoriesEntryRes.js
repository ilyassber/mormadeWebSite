import Text from '../../graphics/textDisplayer/Text'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward'


function CentredCard({ image, title, description, link, width, descriptionHeight, style }) {

    const styleFont = {
        titleStyle: "my-3 font-kumbhsans font-bold md:text-xl hover:underline cursor-pointer text-center ",
        descriptionStyle: "font-amiri text-base text-center",
        linkStyle: "my-3 font-yantramanav text-sm font-bold"
    }

    return (
        <div className={`flex flex-col justify-center bg-white`}>
            <div className={`${width} flex justify-center overflow-hidden`}>
                <img className="w-full object-cover object-center" src={image} alt="image cover" />
            </div>
            <div className="flex justify-center">
                <div className={`flex flex-col justify-start w-full items-center py-10 md:${descriptionHeight}`}>
                    <h2 className={styleFont.titleStyle}>{title}</h2>
                    <p className={styleFont.descriptionStyle}>{description}</p>
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}

function LeftCard({ image, title, description, link, width, descriptionHeight}) {

    const styleFont = {
        titleStyle: "my-3 font-kumbhsans font-bold md:text-xl hover:underline cursor-pointer text-center md:text-left",
        descriptionStyle: "font-amiri text-base text-center md:text-left",
        linkStyle: "my-3 font-yantramanav text-sm font-bold"
    }

    return (
        <div className={`flex flex-col md:flex-row justify-center bg-white`}>
            <div className={`${width} flex justify-center overflow-hidden`}>
                <img className="w-full object-cover object-center" src={image} alt="image cover" />
            </div>
            <div className="flex justify-center">
                <div className={`flex flex-col justify-center sm:w-full items-center md:${descriptionHeight} px-12 md:items-start `}>
                    <h2 className={styleFont.titleStyle}>{title}</h2>
                    <p className={styleFont.descriptionStyle}>{description}</p>
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}


function RightCard({ image, title, description, link, width, descriptionHeight, style }) {

    const styleFont = {
        titleStyle: "my-3 font-kumbhsans font-bold  md:text-xl hover:underline cursor-pointer text-center md:text-right break-words",
        descriptionStyle: "font-amiri text-base text-center md:text-right",
        linkStyle: "my-3 font-yantramanav text-sm font-bold"
    }

    return (
        <div className={` flex flex-col md:flex-row-reverse justify-center bg-white`}>
            <div className={`${width} flex justify-center overflow-hidden`}>
                <img className="w-full  object-cover object-center" src={image} alt="image cover" />
            </div>
            <div className="flex justify-center">
                <div className={`flex flex-col justify-center items-center md:${descriptionHeight} px-12 md:items-end `}>
                    <h2 className={styleFont.titleStyle}>{title}</h2>
                    <p className={styleFont.descriptionStyle}>{description}</p>
                    <Link href={link.path}><a className="flex items-center justify-start hover:text-green-600"><Text text={link.text} style={`mr-2 text-gray-90`} textStyle={styleFont.linkStyle} /><Icon icon={ic_arrow_forward} /></a></Link>
                </div>
            </div>
        </div>
    )
}

export default function StoryEntry({ type, image, title, description, link, margin }) {

    const sizeStyle = {
        1: {
            width: "max-w-3xl",
            descriptionSize: "w-96",
            style: "flex justify-start w-full  px-5 py-12",
        },
        2: {
            width: "max-w-3xl",
            descriptionSize: "w-96",
            style: "flex justify-end w-full  px-5 py-12",
        },
        3: {
            width: "max-w-4xl",
            descriptionSize: "",
            style: "flex justify-center items-center w-full px-5 py-12",
        }
    }

    return (
        <div className={sizeStyle[type].style}>
            {type === 1 && <LeftCard
                image={image}
                title={title}
                description={description}
                link={link}
                width={sizeStyle[type].width}
                descriptionHeight={sizeStyle[type].descriptionSize}
                style="" />}
            {type === 2 && <RightCard
                image={image}
                title={title}
                description={description}
                link={link}
                width={sizeStyle[type].width}
                descriptionHeight={sizeStyle[type].descriptionSize}
                style="" />}
            {type === 3 && <CentredCard
                image={image}
                title={title}
                description={description}
                link={link}
                width={sizeStyle[type].width}
                descriptionHeight={sizeStyle[type].descriptionSize}
                style="m-5" />}
        </div>
    )
}