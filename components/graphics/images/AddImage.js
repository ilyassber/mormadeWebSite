import React, { useRef } from 'react'

const AddImage = props => {

    const inputRef = useRef(null)

    /*
    const img_pathUrl = (input) => {
        console.log(input.target.files)
        imgRef.current.src = (window.URL ? URL : webkitURL).createObjectURL(input.target.files[0]);
    }
    */

    let content = (
        <div>
            <div>
                <input
                    className="invisible"
                    ref={inputRef}
                    accept="image/jpeg, image/jpg, image/png"
                    multiple
                    type="file"
                    onChange={(input) => props.onChange(input)}
                />
                <div className="container flex content-center flex-wrap text-center h-32 w-32 border border-1 border-gray-900 hover:bg-xw-200" role="button" onClick={() => { inputRef.current.click() }}>
                    <span className="text-center h-auto w-full">
                        Upload Photo
                    </span>
                </div>
            </div>
        </div>
    )

    return content
}

export default AddImage