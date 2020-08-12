import React, { useState, useEffect } from 'react'
import { Login, SignUp } from '.'

const Authentication = props => {

    const [box, setBox] = useState()

    let attr1 = <div/>
    let attr2 = <div/>

    useEffect(() => {
        console.log(props.cookies['csrftoken'])
        attr1 = (<Login csrf={props.cookies['csrftoken']} switch={() => setBox(attr2)}/>)
        attr2 = (<SignUp csrf={props.cookies['csrftoken']} switch={() => setBox(attr1)}/>)
        setBox(attr1)
    }, [])

    const content = (
        <div className="bg-xw-500 w-full h-screen flex content-center flex-wrap">
            {box}
        </div>
    )

    return content
}

export default Authentication