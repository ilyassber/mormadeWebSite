

export default function Wrapper ({children, style, onClick}) {
    return (
        <div className={style} onClick={onClick}>
            {children}
        </div>
    )
}