import axios from 'axios'
import querystring from 'querystring'

export function getCategories(id, lvl, parent, csrttoken) {
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrttoken
            }
        }
        let content = {
            id: id,
            operation: 'get',
            lvl: lvl,
            parent: parent,
        }
        axios.defaults.withCredentials = true
        axios.post(process.env.domain + '/api/categories/', querystring.stringify(content), axiosConfig)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}