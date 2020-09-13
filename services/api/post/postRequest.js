import axios from 'axios'

export function postRequest(data, csrttoken, url) {
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrttoken
            }
        }
        axios.defaults.withCredentials = true
        axios.post(url, data, axiosConfig)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}