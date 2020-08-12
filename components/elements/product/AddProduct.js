import React from 'react'
import { TxtField, TxtArea, IntField } from '../../graphics/textFields'

const AddProduct = props => {

    let data = {}

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

    let content = (
        <div>
            <TxtField label="Product Name" onChange={(event) => getValue(event, 'name')}/>
            <TxtArea label="Product Description" onChange={(event) => getValue(event, 'description')}/>
            <IntField label="Price" onChange={(event) => getValue(event, 'price')}/>
            <IntField label="Quantity" onChange={(event) => getValue(event, 'quantity')}/>
        </div>
    )

    return content
}

export default AddProduct