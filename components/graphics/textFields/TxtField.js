const TxtField = props => {

    let align = 'left'
    let color = 'gray-900'
    let borderColor = 'gray-500'
    if (props.align != null) {
        align = props.align
    }
    if (props.color != null) {
        color = props.color
    }
    if (props.error == true) {
        borderColor = 'red-600'
        color = 'red-600'
    }

    let content = (
        <div className={props.className}>
            <label className={'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align}>{props.label}</label>
            <input
                className={'appearance-none border ' + 'border-' + borderColor + ' w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black'}
                type="text"
                onChange={props.onChange}
            />
        </div>
    )

    return content
}

export default TxtField