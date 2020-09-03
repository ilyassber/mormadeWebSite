import React, { useState } from 'react'
import BtnTtb from '../../graphics/buttons/BtnTtb'

const Sidebar = props => {

    const [clicked, setClicked] = useState(props.clicked)

    const btnsList = props.data.map(function (value) {
        if (value.id == clicked) {
            return <BtnTtb
                    className="w-full h-auto"
                    key={value.id}
                    value={value.value}
                    clicked='true'
                    onClick={() => {
                        setClicked(value.id)
                        props.onClick(value.id)
                    }}
                />
        } else {
            return <BtnTtb
                    className="w-full h-auto"
                    key={value.id}
                    value={value.value}
                    clicked='false'
                    onClick={() => {
                        setClicked(value.id)
                        props.onClick(value.id)
                    }}
                />
        }
    })

    let content = (
        <div className={props.className}>
            <div className="h-full w-full m-4">
                {btnsList}
            </div>
        </div>
    )

    return content
}

export default Sidebar