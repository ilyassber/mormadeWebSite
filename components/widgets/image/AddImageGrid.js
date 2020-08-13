import React, { useState, useEffect } from 'react'
import { AddImage, RemovedSquaredImg } from '../../graphics/images'

const AddImageGrid = props => {

    const [files, setFiles] = useState([])
    const [imagesList, setImagesList] = useState(null)

    const appendFile = (newFiles) => {
        if (newFiles.length > 0) {
            newFiles.forEach((f) => files.push(f), this)
            initList()
        }
    }

    const removeFile = (index) => {
        files.splice(index, 1)
        initList()
    }

    const initList = () => {
        if (files.length > 0) {
            setImagesList(files.map(function (file, index) {
                const imgSrc = (window.URL ? URL : webkitURL).createObjectURL(file)
                console.log(index)
                return <RemovedSquaredImg className="w-32 h-32 m-1" src={imgSrc} key={index} index={index} onRemove={removeFile}/>
            }))
        } else {
            setImagesList(null)
        }
    }

    let content = (
        <div className={props.className}>
            <div className="w-full">
                <label className="block mb-1 font-sans font-medium">Add Product Images</label>
                <div className="h-auto w-full container flex content-start flex-wrap border py-2 px-3">
                    {imagesList}
                    <AddImage onChange={appendFile} />
                </div>
            </div>
        </div>
    )

    return content
}

export default AddImageGrid