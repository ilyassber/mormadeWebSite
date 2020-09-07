import React from 'react'

const ImgRound = props => {
    
    const content = (
        <div className={props.className}>
            <div
                className="rounded-full h-full w-full flex items-center justify-center">
                    <img src={props.src}/>
            </div>
        </div>
    )

    return content
}

export default ImgRound