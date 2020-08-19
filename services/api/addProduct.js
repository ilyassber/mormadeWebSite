import axios from 'axios'
import querystring from 'querystring'

export function addProduct(data, csrttoken) {
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrttoken
            }
        }
        data['pics_list'] = querystring.stringify(data['pics_list'])
        let content = {
            data: querystring.stringify(data)
        }
        console.log(content)
        axios.defaults.withCredentials = true
        axios.post('http://localhost:8000/products/', querystring.stringify(content), axiosConfig)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}