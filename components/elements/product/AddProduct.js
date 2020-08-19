import React, { useState } from 'react'
import { TxtField, TxtArea, IntField } from '../../graphics/textFields'
import { BtnBbw } from '../../graphics/buttons'
import AddImageGrid from '../../widgets/image/AddImageGrid'
import { uploadImage } from '../../../services/api/uploadImage'
import { addProduct } from '../../../services/api/addProduct'

const AddProduct = props => {

    let data = {}
    data['pics_list'] = []
    const [files, setFiles] = useState([])

    const getValue = (event, access) => {
        if (access == 'name') {
            data['name'] = event.target.value
        } else if (access == 'description') {
            data['description'] = event.target.value
        } else if (access == 'price') {
            data['price'] = event.target.value
        } else if (access == 'quantity') {
            data['quantity'] = event.target.value
        }
    }

    const appendFile = (newFiles) => {
        newFiles.forEach((f) => files.push(f), this)
    }

    const removeFile = (index) => {
        files.splice(index, 1)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        for (let i = 0; i < files.length; i++) {
            let response = await uploadImage(event, files[0], props.cookies['csrftoken']).then((res) => res)
            data['pics_list'].push(response.data)
        }
        console.log(data)
        addProduct(data, props.cookies['csrftoken']).then((res) => {
            console.log(res)
        })
    }

    let content = (
        <div className="m-4">
            <form className="" action="">
                <TxtField label="Product Name" onChange={(event) => getValue(event, 'name')} />
                <TxtArea label="Product Description" onChange={(event) => getValue(event, 'description')} />
                <TxtField label="Product Region" onChange={(event) => getValue(event, 'region')} />
                <IntField label="Price" onChange={(event) => getValue(event, 'price')} />
                <IntField label="Quantity" onChange={(event) => getValue(event, 'quantity')} />
                <AddImageGrid files={files} addImage={appendFile} removeImage={removeFile}/>
                <BtnBbw className="w-full h-12 mt-8 mb-4" value="ADD PRODUCT" onClick={handleSubmit} />
            </form>
        </div>
    )

    return content
}

export default AddProduct