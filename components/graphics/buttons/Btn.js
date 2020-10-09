import React from 'react'

const Btn = props => {

    let borderColor = 'black'
    let textColor = 'white'
    let textSize = 'sm'
    let textWeight = 'medium'
    let hoverColor = 'gray-700'
    let borderHoverColor = 'white'
    let bgColor = 'black'
    let disableColor = 'gray-300'
    let disabled = false
    let height = 12
    let shadow = 'border border-'

    if (props.height != null) {
        height = props.height
    }

    if (props.borderColor != null) {
        borderColor = props.borderColor
    }

    if (props.borderHoverColor != null) {
        borderHoverColor = props.borderHoverColor
    }

    if (props.textColor != null) {
        textColor = props.textColor
    }

    if (props.textSize != null) {
        textSize = props.textSize
    }

    if (props.hoverColor != null) {
        hoverColor = props.hoverColor
    }

    if (props.bgColor != null) {
        bgColor = props.bgColor
    }

    if (props.disableColor != null) {
        disableColor = props.disableColor
    }

    if (props.shadow == true) {
        shadow = 'shadow'
        borderColor = ''
    }

    if (props.textWeight != null) {
        textWeight = props.textWeight
    }

    if (props.disabled != null) {
        disabled = props.disabled
    }

    if (props.disabled == true) {
        bgColor = disableColor
    }
    
    const content = (
        <div className={props.className}>
            <button
                className={'w-full h-full bg-' + bgColor + ' ' + shadow + ' hover:bg-' + hoverColor + ' focus:outline-none hover:border-' + borderHoverColor + ' font-roboto font-' + textWeight + ' text-' + textColor + ' text-' + textSize + ' py-2 px-4'}
                type="button"
                disabled={disabled}
                onClick={props.onClick}>
                    {props.value}
            </button>
        </div>
    )

    return content
}

export default Btn