

export default function Cover ({children, image ,height , style, imageStyle}) {
    return (
        <div className={"relative " + style}>
            <div className={"z-10 " + style}>
                {children}
            </div>
            <div className="z-0 absolute top-0 left-0 w-full h-full overflow-hidden ">
                <img className={`${height} w-full object-cover object-center ${imageStyle}`}  src={image} alt="image cover"/>
            </div>
        </div>
    )
}