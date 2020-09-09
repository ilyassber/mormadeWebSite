import React, { useState, useEffect, useRef } from 'react'
import SelectCategory from '../../graphics/category/SelectCategory'
import { RemovableTag } from '../../graphics/tags'

const AddCategory = props => {

    const select = useRef()
    const forceUpdate = React.useReducer(() => ({}))[1]
    const [categoriesList, setCategoriesList] = useState([])
    const [lvl, setLvl] = useState(0)
    const [parent, setParent] = useState(null)
    let currentLvl = 0
    let parentId = null

    const setCategory = (category) => {
        props.addCategory(category)
        parentId = category.id
        setParent(parentId)
        let newLvl = category.lvl + 1
        setLvl(newLvl)
        currentLvl = newLvl
        initList()
    }

    const initList = () => {
        if (props.categories.length > 0) {
            let ncl = props.categories.map(function (category) {
                if (category.lvl < currentLvl) {
                    return (
                        <RemovableTag
                            key={category.id}
                            category={category}
                            onClick={() => {
                                currentLvl = category.lvl
                                setLvl(category.lvl)
                                if (currentLvl == 0) {
                                    parentId = null
                                    setParent(parentId)
                                } else {
                                    parentId = props.categories[currentLvl - 1].id
                                    setParent(parentId)
                                }
                                console.log(lvl)
                                props.removeCategory(category.lvl)
                                console.log(lvl)
                                initList()
                            }} />
                    )
                }
            })
            ncl.push(<SelectCategory lvl={props.categories[props.categories.length -1].id} parent={props.categories[props.categories.length -1]} csrftoken={props.csrftoken} setCategory={setCategory} />)
            setCategoriesList(ncl)
        } else {
            let select = (<SelectCategory lvl={0} parent={null} csrftoken={props.csrftoken} setCategory={setCategory} />)
            let d = (
                    <div className="h-auto w-auto bg-gray-300" >
                        <SelectCategory lvl={0} parent={null} csrftoken={props.csrftoken} setCategory={setCategory} />
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
                <label className="block mb-1 font-sans font-medium">Add Product Category</label>
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

export default AddCategory