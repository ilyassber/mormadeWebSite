

export default function Cover ({children, image ,height , style}) {
    return (
        <div className={style}>
            <div className="w-full h-full overflow-hidden">
                <img className={`${height} w-full object-cover object-center`}  src={image} alt="image cover"/>
            </div>
            {children}
        </div>
    )
}