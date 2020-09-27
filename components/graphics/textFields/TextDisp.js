const TextDisp = props => {

    let align = "left"
    if (props.align != null) {
        align = props.align
    }

    let content = (
        <div className={props.className}>
            <span className={'font-sans text-base text-gray-900 align-' + align}>
                {props.text}
            </span>
        </div>
    )

    return content
}

export default TextDisp