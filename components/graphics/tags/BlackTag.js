import React from 'react'

const BlackTag = props => {

    if (props.type == 'white') {
        return (
            <div className={props.className}>
                <div className="container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-white">
                    <span className="h-auto font-sans font-light text-xs align-middle text-gray-900 m-1">
                        {props.tag.name}
                    </span>
                </div>
            </div>
        )
    } else {
        return (
            <div className={props.className}>
                <div className="container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-gray-900">
                    <span className="h-auto font-sans font-light text-xs align-middle text-white m-1">
                        {props.tag.name}
                    </span>
                </div>
            </div>
        )
    }
}

export default BlackTag