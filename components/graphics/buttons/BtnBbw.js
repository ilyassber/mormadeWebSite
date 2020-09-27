import React from 'react'

const BtnBbw = props => {

    let weight = 'medium'
    if (props.weight != null) {
        weight = props.weight
    }
    
    const content = (
        <div className={props.className}>
            <button
                className={'w-full h-full bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-900 font-roboto font-' + weight + ' text-white text-sm py-2 px-4'}
                type="button"
                onClick={props.onClick}>
                    {props.value}
            </button>
        </div>
    )

    return content
}

export default BtnBbw