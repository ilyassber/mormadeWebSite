import React from 'react'

const BtnTtb = props => {

    let style = "w-full h-full bg-transparent text-left hover:text-opacity-75 focus:outline-none font-sans font-bold text-gray-900 text-sm py-2 px-4"
    if (props.clicked == 'true') {
        style = "w-full h-full bg-transparent text-left focus:outline-none font-sans font-bold text-red-700 text-sm py-2 px-4"
    }
    
    const content = (
        <div className={props.className}>
            <button
                className={style}
                type="button"
                onClick={props.onClick}>
                    {props.value}
            </button>
        </div>
    )

    return content
}

export default BtnTtb