

export default function Cover ({image , style}) {
    return (
        <div className={style}>
            <img className="h-204 w-full object-cover object-center" src={image} alt="image cover"/>
        </div>
    )
}