import Link from 'next/link'
import React from 'react'

const Brand = props => {

    let content = (
        <div className={props.className}>
            <Link href="/">
                <div className="container h-full w-auto content-center mx-auto flex flex-wrap" role='button'>
                    <strong className="font-raleway font-bold text-2xl text-gray-900">MORMADE</strong>
                </div>
            </Link>
        </div>
    )

    return content
}

export default Brand