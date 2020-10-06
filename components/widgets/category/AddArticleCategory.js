import React, { useState, useEffect, useRef } from 'react'
import SelectCategory from '../../graphics/category/SelectCategory'
import { RemovableTag } from '../../graphics/tags'

const AddArticleCategory = props => {

    const [categoriesList, setCategoriesList] = useState([])

    const setCategory = (category) => {
        props.addCategory(category)
        initList()
    }

    const initList = () => {
        if (props.categories.length > 0) {
            let ncl = props.categories.map(function (category, index) {
                    return (
                        <RemovableTag
                            className="w-auto sm:w-full"
                            key={index}
                            separator=''
                            category={category}
                            onClick={() => {
                                props.removeCategory(index)
                                initList()
                            }} />
                    )
            })
            ncl.push(<SelectCategory separator='&#8250;' all={true} csrftoken={props.csrftoken} setCategory={setCategory} />)
            setCategoriesList(ncl)
        } else {
            let d = (
                    <div className="h-auto w-auto bg-gray-300" >
                        <SelectCategory separator='&#8250;' all={true} csrftoken={props.csrftoken} setCategory={setCategory} />
                    </div>
                )
            setCategoriesList(d)
        }
    }

    useEffect(() => {
        initList()
    }, [])

    let content = (
        <div className={props.className}>
            <div className="w-full">
                <label className="block mb-1 font-sans font-medium">Add Article Tags</label>
                <div className="h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3">
                    <div className="flex">
                        <div className="h-8"/>
                        {categoriesList}
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default AddArticleCategory