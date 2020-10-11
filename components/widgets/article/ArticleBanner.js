import React from 'react'
import { BtnBbw } from '../../graphics/buttons'
import Link from 'next/link'

const ArticleBanner = props => {

    let bannerState = (props.data.cover == null) ? 'relative bg-yellow-300 text-gray-900' : 'absolute bottom-0 text-white'

    let content = (
        <div className={props.className} >
            <div className="relative">
                {(props.data.cover)
                    ? (<img className="w-full" src={props.data.cover.path} />)
                    : null}
                <div className={bannerState + ' h-auto w-full flex flex-col items-center'}>
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
        </div>
    )

    return content
}

export default ArticleBanner