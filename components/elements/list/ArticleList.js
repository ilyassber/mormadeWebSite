import React from 'react'

const ArticleList = props => {

    let content = (
        <div className={props.className}>
            <div className="w-full h-auto flex flex-col">
                {props.data}
            </div>
        </div>
    )

    return content
}

export default ArticleList