import React from 'react'
import { BtnIcon } from '../../graphics/buttons'

const AddContent = props => {

    let content = (
        <div className={props.className}>
            <div className="flex flex-wrap">
                <BtnIcon className="h-10 w-10 mr-2" src="/icons/text.png" onClick={() => {
                    let data = {
                        state: "edit",
                        data: {
                            type: "text",
                            text: null
                        }
                    }
                    props.appendContent(data)
                }} />
                <BtnIcon className="h-10 w-10" src="/icons/photo.png" onClick={() => {
                    let data = {
                        state: "edit",
                        data: {
                            type: "image",
                            image: null
                        }
                    }
                    props.appendContent(data)
                }} />
            </div>
        </div>
    )

    return content
}

export default AddContent