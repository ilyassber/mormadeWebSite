import React, { useState, useEffect, useRef } from 'react'
import SelectCategory from '../../graphics/category/SelectCategory'
import { RemovableTag } from '../../graphics/tags'
import { useForceUpdate } from '../../../services/hooks/useForceUpdate'

const AddCategory = props => {

    const select = useRef()
    const forceUpdate = React.useReducer(() => ({}))[1]
    const [categoriesList, setCategoriesList] = useState([])
    const [lvl, setLvl] = useState(0)
    let currentLvl = 0
    let parentId = null

    const setCategory = (category) => {
        props.addCategory(category)
        parentId = category.id
        let newLvl = category.lvl + 1
        setLvl(newLvl)
        currentLvl = newLvl
        initList()
    }

    const initSelect = () => {
        select.current.focus()
    }

    const initList = () => {
        if (props.categories.length > 0) {
            setCategoriesList(props.categories.map(function (category) {
                if (category.lvl < currentLvl) {
                    return (
                        <RemovableTag
                            key={category.id}
                            category={category}
                            onClick={() => {
                                props.removeCategory(category.lvl)
                                currentLvl = category.lvl
                                setLvl(category.lvl)
                                initList()
                                forceUpdate()
                            }} />
                    )
                }
            }))
        } else {
            setCategoriesList(null)
        }
    }

    let content = (
        <div className={props.className}>
            <div className="w-full">
                <label className="block mb-1 font-sans font-medium">Add Product Category</label>
                <div className="h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3">
                    {categoriesList}
                    <div ref={select}>
                        <SelectCategory lvl={lvl} parent={parentId} csrftoken={props.csrftoken} setCategory={setCategory} />
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default AddCategory