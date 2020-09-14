
export default function Description ({text , style}) {
    return (
        <div className={style}>
            <p className="text-justify">{text}</p>
        </div>
    )
}