import React from 'react'

const ProductGrid = props => {

    let content = (
        <article className={props.className}>
            <div className="container h-auto w-full content-center">
                <div className="relative w-full bg-yellow-300 pb-1/1">
                    <img className="absolute w-full h-full object-cover" src={props.data.images[0].path}/>
                    <button className="absolute top-0 right-0 h-10 w-10 m-2"><img src="/heart-white.png"/></button>
                </div>
                <div className="h-auto w-full">
                    <h3 className="leading-tight font-sans font-medium text-base text-gray-900 pt-2">{props.data.name}</h3>
                    <strong className="leading-tight font-sans font-normal text-sm text-gray-800">{props.owner}</strong>
                    <p className="leading-tight font-sans font-semibold text-lg text-gray-900">{"MAD " + props.data.price}</p>
                </div>
            </div>
        </article>
    )

    return content
}

export default ProductGrid