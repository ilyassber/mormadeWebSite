import axios from 'axios'
import querystring from 'querystring'

export async function checkUser(operation, csrttoken) {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrttoken
            }
        }
        let content = {
            operation: operation,
            data: 'None'
        }
        axios.defaults.withCredentials = true
        axios.post(process.env.domain + '/api/users/', querystring.stringify(content), axiosConfig)
            .then((response) => {
                return response
            })
            .catch((error) => {
                return null
            })
}