//import useSWR from 'swr'
import axios from 'axios'
/*
const fetcher = (params) => axios.post(params.url, params.form_data, {
    headers: {
        'content-type': 'multipart/form-data'
    }
}).then(res => res.json())
*/
export function uploadImage(e, file, csrttoken) {
    return new Promise((resolve, reject) => {
        let form_data = new FormData();
        form_data.append('name', file.name)
        form_data.append('image', file, file.name)
        const url = 'https://mormade.com/api/images/'
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
                'X-CSRFToken': csrttoken
            }
        }).then((response) => {
            resolve(response)
        })
        /*
        const { data, error } = useSWR({url: url, form_data: form_data}, fetcher)
        return {
            user: data,
            isLoading: !error && !data,
            isError: error
        }
        */
    })
}