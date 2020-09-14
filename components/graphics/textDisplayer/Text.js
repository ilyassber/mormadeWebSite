
export default function Text ({text , style}) {
    return (
        <div className={style}>
            <p className="text-justify">{text}</p>
        </div>
    )
}