import axios from 'axios'

let token = localStorage.getItem('token')

export const axiosWithAuth = () => {
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "https://pintereach-harms.herokuapp.com/"
    })
}