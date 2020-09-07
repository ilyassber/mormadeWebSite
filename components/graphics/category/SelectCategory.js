import React, { useRef } from 'react'

const SelectCategory = props => {

    const optionsRef = useRef()
    const selectedRef = useRef()

    const options = props.data.map((option) => {
        return <option key={option.id} value={option.value} />
    })

    const getOption = () => {
        let value = selectedRef.current.value
        props.data.map((option) => {
            if (option.value == value) {
                props.setCategory(option.id, option.value, props.lvl)
            }
        })
    }

    let content = (
        <div className={props.className}>
            <div className="border border-1 p-1">
                <input className="font-sans font-medium text-gray-700 leading-tight hover:outline-none focus:outline-none" ref={selectedRef} list="data" onChange={getOption} />
                <datalist id="data">
                    {options}
                </datalist>
            </div>
        </div>
    )

    return content
}

export default SelectCategory