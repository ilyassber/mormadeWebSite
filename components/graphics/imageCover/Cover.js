

export default function Cover({ children, image, height, style, imageStyle }) {
    return (
        <div className={"relative " + style}>
            <div className={"z-10 " + style}>
                {children}
            </div>
            <div className="z-0 absolute top-0 left-0 w-full h-full overflow-hidden ">
                <img className={`${height} w-full object-cover object-center ${imageStyle}`} src={image} alt="image cover" />
            </div>
        </div>
    )
}

export function Cover1({ image, title, description, buttonText }) {
    return (
        <div className="relative flex overflow-hidden my-4 mx-4 bg-gray-900">
            <img className="object-cover object-center" src={image} alt="image cover" />
            <div className="absolute flex justify-center items-end w-full h-full b">
                <div className="flex flex-col justify-center items-center  w-10/12 h-4/12">
                    <h2 className="text-white text-7xl font-bold">{title}</h2>
                    <p className="text-white">{description}</p>
                    <div className="flex justify-center items-center m-5 bg-white w-4/12 h-2/12 "><p>{buttonText}</p></div>                
                </div>
            </div>
        </div>
    )
}