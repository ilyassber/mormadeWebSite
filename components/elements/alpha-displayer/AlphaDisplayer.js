import { Cover1 } from '../../graphics/imageCover/Cover'

export default function AlphaDisplayer({ image, title, description, buttonText, clickAction }) {

    const textStyle = {
        titleStyle: "font-kumbhsans font-bold text-lg md:text-2xl  text-center break-words text-white",
        descriptionStyle: "mb-2 md:m-2 tracking-tight md:tracking-widest font-medium md:font-extrabold text-xs md:text-base text-center text-white",
        buttonStyle: "tracking-widest font-yantramanav text-sm font-bold "
    }

    return (

        <div onClick={clickAction} className="relative flex justify-center my-5 mx-5 cursor-pointer overflow-hidden">
            {/* <div className="absolute opacity-75 h-auto w-full bg-orange-500"> </div> */}
            <img className="w-full object-cover object-center" src={image} alt="image cover" />
            <div className="absolute flex flex-col justify-end items-center p-2 w-full h-full ">
                <h2 className={textStyle.titleStyle}>{title}</h2>
                <p className={textStyle.descriptionStyle}>{description}</p>
                {buttonText && buttonText !== "" && <div className="hidden md:flex justify-center items-center px-5 py-2 mb-10 mt-2 bg-white"><p className={textStyle.buttonStyle}>{buttonText}</p></div>}
            </div>
        </div>

    )
}   