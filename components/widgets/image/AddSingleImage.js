import React, { useRef } from 'react'

const AddSingleImage = props => {

    const inputRef = useRef(null)

    let uploadBtn = (
        <div className="relative m-1">
            <input
                className="absolute invisible"
                ref={inputRef}
                accept="image/jpeg, image/jpg, image/png"
                type="file"
                onChange={(input) => {
                    let data = {
                        state: "valid",
                        data: {
                            type: "image",
                            image: input.target.files[0]
                        }
                    }
                    props.editContent(props.index, data)
                }}
            />
            <div
                className="container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1"
                role="button"
                onClick={() => { inputRef.current.click() }}>
                <span className="text-center h-auto w-auto m-1">
                    Upload Photo
                    </span>
            </div>
        </div>
    )

    let removeBtn = (
        <div className="relative m-1">
            <div
                className="container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1"
                role="button"
                onClick={() => {
                    let data = {
                        state: "edit",
                        data: {
                            type: "image",
                            image: null
                        }
                    }
                    props.editContent(props.index, data)
                }}>
                <span className="text-center h-auto w-auto m-1">
                    Remove Photo
                    </span>
            </div>
        </div>
    )

    let closeBtn = (
        <div
            className="absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1"
            role="button"
            onClick={() => props.removeContent(props.index)}>
            <span className="text-center font-sans font-bold text-xw-100 h-auto w-full">
                x
                    </span>
        </div>
    )

    let content = (
        <div className={props.className}>
            <div className="relative w-full bg-gray-300 pb-1/2">
                <img className="absolute w-full h-full object-cover" src={(props.data.state == "valid") ? ((window.URL ? URL : webkitURL).createObjectURL(props.data.data.image)) : null} />
                {(props.close == "true") ? closeBtn : null }
                <div className="absolute bottom-0 left-0 m-2">
                    {(props.data.state == 'valid') ? removeBtn : uploadBtn}
                </div>
            </div>
        </div>
    )

    return content
}

export default AddSingleImage