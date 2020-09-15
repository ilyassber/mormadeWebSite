
export default function Text ({text , style, textStyle}) {
    return (
        <div className={style}>
            <p className={textStyle}>{text}</p>
        </div>
    )
}