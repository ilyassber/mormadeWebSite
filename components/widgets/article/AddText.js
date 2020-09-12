import React, { useRef, useEffect } from 'react'
import { BtnBtb } from '../../graphics/buttons'

const AddText = props => {

    const inputRef = useRef(null)

    let text = props.data.data.text

    let saveBtn = (
        <BtnBtb
            className="h-8 w-auto"
            onClick={() => {
                let data = {
                    state: "valid",
                    data: {
                        type: "text",
                        text: text
                    }
                }
                props.editContent(props.index, data)
            }}
            value="Save Text"
        />
    )

    let editBtn = (
        <BtnBtb
            className="h-8 w-auto"
            onClick={() => {
                let data = {
                    state: "edit",
                    data: {
                        type: "text",
                        text: props.data.data.text
                    }
                }
                props.editContent(props.index, data)
            }}
            value="Edit Text"
        />
    )

    let content = (
        <div className={props.className}>
            <div className="relative h-auto w-full border">
                <div className="m-2">
                    {(props.data.state == "valid") ? (
                        <div className="m-2"><p>{props.data.data.text}</p></div>
                    ) : (
                            <textarea
                                ref={inputRef}
                                rows="4" cols="50"
                                className="appearance-none border h-full w-full py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black"
                                type="text"
                                onChange={(e) => { text = e.target.value }}>
                                {props.data.data.text}
                            </textarea>)}
                    <div
                        className="absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none"
                        role="button"
                        onClick={() => props.removeContent(props.index)}>
                        <span className="text-center font-sans font-bold text-xw-100 h-auto w-full">
                            x
                    </span>
                    </div>
                    <div className="h-auto w-auto mt-2">
                        {(props.data.state == 'valid') ? editBtn : saveBtn}
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default AddText