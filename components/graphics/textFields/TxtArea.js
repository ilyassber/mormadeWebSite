import { useRef } from 'react'

const TxtArea = props => {

    const inputRef = useRef()

    let align = 'left'
    let color = 'gray-900'
    let borderColor = 'gray-300'
    let textColor = 'gray-700'
    let focusColor = 'black'
    let bgColor = 'transparent'
    let disableColor = 'gray-300'
    let disabled = false
    let placeholder = ''
    let placeholderColor = 'gray-500'
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

    if (props.borderColor != null) {
        borderColor = props.borderColor
    }

    if (props.textColor != null) {
        textColor = props.textColor
    }

    if (props.focusColor != null) {
        focusColor = props.focusColor
    }

    if (props.bgColor != null) {
        bgColor = props.bgColor
    }

    if (props.disableColor != null) {
        disableColor = props.disableColor
    }

    if (props.placeholderColor != null) {
        placeholderColor = props.placeholderColor
    }

    if (props.error == true) {
        borderColor = 'red-600'
        color = 'red-600'
    }

    if (props.disabled != null) {
        disabled = props.disabled
    }

    if (props.disabled == true) {
        bgColor = disableColor
    }

    if (props.reset == true) {
        if (props.color != null) {
            color = props.color
        } else {
            color = 'white'
        }
        if (props.borderColor != null) {
            borderColor = props.borderColor
        } else {
            borderColor = 'gray-300'
        }
        if (props.textColor != null) {
            textColor = props.textColor
        } else {
            textColor = 'gray-700'
        }
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
            <textarea
                ref={inputRef}
                rows="4" cols="50"
                disabled={disabled}
                placeholder={placeholder}
                className={'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-' + textColor + ' leading-tight bg-' + bgColor + ' placeholder-' + placeholderColor + ' focus:outline-none focus:border-' + focusColor}
                type="text"
                onChange={props.onChange}
            />
        </div>
    )

    return content
}

export default TxtArea