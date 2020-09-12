import React, { useState, useEffect } from 'react'
import { TxtField, TxtArea } from '../../graphics/textFields'
import { BtnBbw } from '../../graphics/buttons'
import { uploadImage } from '../../../services/api/uploadImage'
import { AddContent } from '../../widgets/article'
import AddSingleImage from '../../widgets/image/AddSingleImage'

const AddArticle = props => {

    const [data, setData] = useState({
        title: null,
        description: null,
        cover: null,
        text: []
    })

    const getValue = (event, access) => {
        if (access == 'title') {
            setData({...data, title: event.target.value})
        } else if (access == 'description') {
            setData({...data, description: event.target.value})
        }
    }

    const addCover = (file) => {
        setData({...data, cover: file})
    }

    const removeCover = () => {
        setData({...data, cover: null})
    }

    const appendContent = (content) => {
        let contentList = data.text
        contentList.push(content)
        setData({...data, text: contentList})
    }

    const editContent = (index, content) => {
        let contentList = data.text
        contentList[index] = content
        setData({...data, text: contentList})
    }

    const removeContent = (index) => {
        let contentList = data.text
        contentList.splice(index, 1)
        setData({...data, text: contentList})
    }

    const handleSubmit = async (event) => {
        /*
        event.preventDefault()
        for (let i = 0; i < files.length; i++) {
            let response = await uploadImage(event, files[0], props.cookies['csrftoken']).then((res) => res)
            data['pics_list'].push(response.data)
        }
        addProduct(data, props.cookies['csrftoken']).then((res) => {
            console.log(res)
        })
        */
    }

    let content = (
        <div className="m-4">
            <form className="w-full" action="">
                <TxtField label="Title" onChange={(event) => getValue(event, 'title')} />
                <TxtArea label="Description" onChange={(event) => getValue(event, 'description')} />
                <div className="h-auto w-full border">
                    {data.text.map((content, index) => {
                        return (<AddSingleImage index={index} className="h-64 m-2" data={content} editContent={editContent} removeContent={removeContent} />)
                    })}
                    <AddContent className="m-2" appendContent={appendContent} />
                </div>
                <BtnBbw className="w-full h-12 mt-8 mb-4" value="ADD ARTICLE" onClick={handleSubmit} />
            </form>
        </div>
    )

    return content
}

export default AddArticle