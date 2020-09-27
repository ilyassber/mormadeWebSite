import axios from 'axios'

export function getRequest(url) {
    return new Promise((resolve, reject) => {
        axios.defaults.withCredentials = true
        axios.get(url)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}