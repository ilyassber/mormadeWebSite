import React from 'react'

const Brand = props => {

    let content = (
        <div className={props.className}>
            <div className="container h-full w-auto content-center mx-auto flex flex-wrap">
                <h2 className="font-sans font-bold text-gray-900">MORMADE</h2>
            </div>
        </div>
    )

    return content
}

export default Brand