import React from 'react'

const RemovedSquaredImg = props => {

    let content = (
        <div className={props.className}>
            <div className="relative h-full w-full bg-yellow-300">
                <img className="absolute w-full h-full object-cover" src={props.src} />
                <div className="absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1" role="button" onClick={() => props.onRemove(props.index)}>
                    <span className="text-center font-sans font-bold text-xw-100 h-auto w-full">
                        x
                    </span>
                </div>
            </div>
        </div>
    )

    return content
}

export default RemovedSquaredImg