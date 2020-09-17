import axios from 'axios'
import querystring from 'querystring'

export function getCategories(lvl, id, csrttoken) {
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrttoken
            }
        }
        let content = {
            operation: 'get',
            lvl: lvl,
            id: id
        }
        axios.defaults.withCredentials = true
        axios.post('https://www.mormade.com/api/categories/', querystring.stringify(content), axiosConfig)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}