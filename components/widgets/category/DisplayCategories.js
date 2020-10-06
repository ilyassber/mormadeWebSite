import react, { useState, useEffect } from 'react'
import { getCategories } from '../../../services/api/fetch/getCategories'
import { BlackTag } from '../../graphics/tags'

const DisplayCategories = props => {

    console.log(props.tags)

    let content = (
        <div className={props.className} >
            <div className="h-auto w-full flex flex-wrap items-left">
                {props.tags.map((tag, index) => {
                    return (<BlackTag className="mr-1" key={index} tag={tag}/>)
                })}
            </div>
        </div>
    )

    return content
}

export default DisplayCategories