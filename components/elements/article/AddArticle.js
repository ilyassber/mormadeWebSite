import React, { useState, useEffect } from 'react'
import { TxtField, TxtArea } from '../../graphics/textFields'
import { BtnBbw } from '../../graphics/buttons'
import { uploadImage } from '../../../services/api/uploadImage'
import { AddContent } from '../../widgets/article'
import AddSingleImage from '../../widgets/image/AddSingleImage'
import AddText from '../../widgets/article/AddText'

const AddArticle = props => {

    const [data, setData] = useState({
        title: null,
        description: null,
        cover: {
            state: "edit",
            data: {
                type: "image",
                image: null
            }
        },
        text: []
    })

    const getValue = (event, access) => {
        if (access == 'title') {
            setData({ ...data, title: event.target.value })
        } else if (access == 'description') {
            setData({ ...data, description: event.target.value })
        }
    }

    const addCover = (file) => {
        setData({ ...data, cover: file })
    }

    const removeCover = () => {
        setData({ ...data, cover: null })
    }

    const appendContent = (content) => {
        let contentList = data.text
        contentList.push(content)
        setData({ ...data, text: contentList })
    }

    const editContent = (index, content) => {
        let contentList = data.text
        contentList[index] = content
        setData({ ...data, text: contentList })
    }

    const removeContent = (index) => {
        let contentList = data.text
        contentList.splice(index, 1)
        setData({ ...data, text: contentList })
    }

    const editCoverContent = (index, content) => {
        setData({ ...data, cover: content })
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
                <div className="pb-2">
                    <label className="block mb-1 font-sans font-medium">Add Cover</label>
                    <AddSingleImage index={-1} className="" data={data.cover} close="false" editContent={editCoverContent} removeContent={() => { }} />
                </div>
                <div>
                    <label className="block mb-1 font-sans font-medium">Add Article Content</label>
                    <div className="h-auto w-full border">
                        {data.text.map((content, index) => {
                            if (content.data.type == "image") {
                                return (<AddSingleImage index={index} className="m-2" data={content} close="true" editContent={editContent} removeContent={removeContent} />)
                            } else {
                                return (<AddText index={index} className="m-2" data={content} editContent={editContent} removeContent={removeContent} />)
                            }
                        })}
                        <AddContent className="m-2" appendContent={appendContent} />
                    </div>
                </div>

                <BtnBbw className="w-full h-12 mt-8 mb-4" value="ADD ARTICLE" onClick={handleSubmit} />
            </form>
        </div>
    )

    return content
}

export default AddArticle