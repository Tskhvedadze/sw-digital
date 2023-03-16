import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com',
})

// /user/5/5

export const getPostsPage = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/user/${pageParam}`, options)
    return response.data
}
