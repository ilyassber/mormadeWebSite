import React from 'react'

const RemovableTag = props => {

    let content = (
        <div className={props.className}>
            <div className="h-8 flex align-middle">
                <div className="h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold">
                    <b className="text-gray-900 text-sm text-center ml-2 mr-2">&#8250;</b>
                </div>
                <div className="h-full w-auto pl-2 pr-2 bg-gray-900 rounded mx-auto flex content-center">
                    <div className="h-full w-auto content-center mx-auto flex flex-wrap">
                        <h4 className="font-sans font-medium text-xw-100 leading-tight mr-2">
                            {props.category.name}
                        </h4>
                    </div>
                    <div className="h-full w-auto content-center mx-auto flex flex-wrap">
                        <button
                            className="h-4 w-4 bg-xw-100 rounded content-center mx-auto flex focus:outline-none"
                            type="button"
                            onClick={props.onClick}>
                            <b className="font-sans font-bold text-gray-900 text-xs text-center ml-1 mr-1">X</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}

export default RemovableTag