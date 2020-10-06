import { useEffect, useRef } from 'react'

const TxtField = props => {

    const inputRef = useRef()

    let align = 'left'
    let color = 'gray-900'
    let borderColor = 'gray-300'
    let placeholder = ''
    let height = 12
    let shadow = 'border border-'

    if (props.align != null) {
        align = props.align
    }

    if (props.color != null) {
        color = props.color
    }

    if (props.height != null) {
        height = props.height
    }

    if (props.error == true) {
        borderColor = 'red-600'
        color = 'red-600'
    }

    if (props.reset == true) {
        color = 'white'
        borderColor = 'gray-300'
        inputRef.current.value = ''
    }

    if (props.placeholder != null) {
        placeholder = props.placeholder
    }

    if (props.shadow == true) {
        shadow = 'shadow'
        borderColor = ''
    }

    let content = (
        <div className={props.className}>
            {(props.label != null)
            ? (<label className={'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align}>{props.label}</label>)
            : null}
            <input
                ref={inputRef}
                placeholder={placeholder}
                className={'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black'}
                type="text"
                onChange={props.onChange}
            />
        </div>
    )

    return content
}

export default TxtField