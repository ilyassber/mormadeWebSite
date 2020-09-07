import React, { useState } from 'react'
import SelectCategory from '../../graphics/category/SelectCategory'

const AddCategory = props => {

    const [categoriesList, setCategoriesList] = useState(null)

    let data = [{id: 0, value: 'Home'}, {id: 1, value: 'Decoration'}]
    let categories = []
    let lvl = 0

    const setCategory = (id, value, lvl) => {
        categories.splice(lvl, 0, id)
        console.log(value)
    }

    let content = (
        <div className={props.className}>
            <div className="w-full">
                <label className="block mb-1 font-sans font-medium">Add Product Category</label>
                <div className="h-auto w-full container flex content-start flex-wrap py-2 px-3">
                    <SelectCategory data={data} lvl={lvl} setCategory={setCategory} />
                </div>
            </div>
        </div>
    )

    return content
}

export default AddCategory