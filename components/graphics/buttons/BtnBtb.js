import React from 'react'

const BtnBtb = props => {
    
    const content = (
        <div className={props.className}>
            <button
                className="w-full h-full bg-transparent border border-gray-900 hover:text-opacity-75 hover:border-opacity-75 focus:outline-none font-sans font-medium text-gray-900 text-sm"
                type="button"
                onClick={props.onClick}>
                    {props.value}
            </button>
        </div>
    )

    return content
}

export default BtnBtb