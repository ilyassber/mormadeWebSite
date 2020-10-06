import React, { useState, useEffect, useRef } from 'react'
import { getCategories } from '../../../services/api/fetch/getCategories'

const SelectCategory = props => {

    const selectedRef = useRef()
    const [data, setData] = useState()
    let currentLvl = null
    let currentParent = null
    let content = null

    const getData = () => {
        setData(null)
        if (props.all == true) {
            let tags = localStorage.getItem('_tags')
            if (tags == null) {
                getCategories(null, null, null, props.csrftoken).then((res) => {
                    localStorage.setItem('_tags', JSON.stringify(res))
                    setData(JSON.stringify(res))
                })
            } else {
                setData(tags)
            }
        } else {
            getCategories(null, currentLvl, props.parent, props.csrftoken).then((res) => {
                setData(JSON.stringify(res))
            })
        }
    }

    useEffect(() => {
        currentLvl = props.lvl
        currentParent = props.parent
        getData()
    }, [])

    if (data && JSON.parse(data).length > 0) {

        const options = JSON.parse(data).map((option) => {
            return <option key={option.id} value={option.name} />
        })

        const getOption = () => {
            let value = selectedRef.current.value
            JSON.parse(data).map((option) => {
                if (option.name == value) {
                    props.setCategory(option)
                    currentLvl = option.lvl + 1
                    getData()
                }
            })
        }

        content = (
            <div className={props.className}>
                <div className="h-8 flex">
                <div className="h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold">
                    <b className="text-gray-900 text-sm text-center ml-2 mr-2">
                        {props.separator}
                    </b>
                </div>
                <div>
                <input
                    className="h-8 w-auto font-sans font-medium border text-gray-700 leading-tight hover:outline-none focus:outline-none p-1"
                    ref={selectedRef}
                    list="data"
                    onChange={getOption} />
                <datalist id="data">
                    {options}
                </datalist>
                </div>
                </div>
            </div>
        )
    }

    return content
}

export default SelectCategory