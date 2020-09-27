import React from 'react'
import { BtnBbw } from '../../graphics/buttons'
import Link from 'next/link'

const ArticleBanner = props => {

    let content = (
        <div className={props.className} >
            <div className="h-auto w-full flex flex-col items-center bg-purple-200">
                <h2 className="font-roboto font-bold text-xl mt-4 mx-4">
                    {props.data.title}
                </h2>
                <span className="mx-4">
                    {props.data.description}
                </span>
                <Link href={`/stories/${props.data.url}`}>
                    <a><BtnBbw
                        className="h-auto w-auto m-4"
                        value="READ MORE"
                        weight="bold" /></a>
                </Link>
            </div>
        </div>
    )

    return content
}

export default ArticleBanner