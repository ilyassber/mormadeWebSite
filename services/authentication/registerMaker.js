import axios from 'axios'
import querystring from 'querystring'

export function registerMaker(data, operation, csrttoken) {
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrttoken
            }
        }
        let content = {
            operation: operation,
            data: querystring.stringify(data)
        }
        axios.defaults.withCredentials = true
        axios.post(process.env.domain + '/api/users/', querystring.stringify(content), axiosConfig)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('_maker', JSON.stringify(response.data))
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}