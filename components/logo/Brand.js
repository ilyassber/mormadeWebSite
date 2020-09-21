import React from 'react'

const Brand = props => {

    let content = (
        <div className={props.className}>
            <div className="container h-full w-auto content-center mx-auto flex flex-wrap">
                <strong className="font-raleway font-bold text-2xl text-gray-900">MORMADE</strong>
            </div>
        </div>
    )

    return content
}

export default Brand