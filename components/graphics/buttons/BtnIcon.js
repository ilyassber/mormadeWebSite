import React from 'react'

const BtnIcon = props => {
    
    const content = (
        <div className={props.className}>
            <button
                className="w-full h-full bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-900 py-2 px-2"
                type="button"
                onClick={props.onClick}>
                    <img src={props.src} />
            </button>
        </div>
    )

    return content
}

export default BtnIcon