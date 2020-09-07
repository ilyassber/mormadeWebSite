import React from 'react'

const ProductGridList = props => {

    let content = (
        <div className={props.className}>
            <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                {props.data}
            </div>
        </div>
    )

    return content
}

export default ProductGridList