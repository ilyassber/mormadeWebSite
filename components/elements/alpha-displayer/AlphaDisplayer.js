import Cover from '../../graphics/imageCover/Cover'
import Text from '../../graphics/textDisplayer/Text'

export default function AlphaDisplayer({children, style, height, width, image, title, description, buttonText, clickAction}) {
    
    const textStyle = {
        titleStyle : "text-white text-xl font-bold text-center",
        descriptionStyle : "text-white text-center",
        buttonStyle : "",
    }
    
    return (
        <div className={style}>
            <Cover image={image} height={height} style={`flex flex-col justify-end items-center m-1 sm:m-10 ${height} ${width}`}>
                <Text text={title} style="m-2" textStyle={textStyle.titleStyle}/>
                <Text text={description} style="m-1" textStyle={textStyle.descriptionStyle}/>
                <button onClick={clickAction} className="h-10 w-40 m-3 bg-white text-gray-900">{buttonText}</button>
            </Cover>
            {children}
        </div>
    )
} 