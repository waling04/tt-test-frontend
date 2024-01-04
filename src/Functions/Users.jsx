import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const list = async() => {
    return await axios.get(apiUrl + '/users')
}

export const read = async(id) => {
    return await axios.get(apiUrl + '/users/' + id)
}

export const create = async(data) => {
    await axios.post(apiUrl + '/users/' , data)
}

export const update = async(id, data) => {
    return await axios.put(apiUrl + '/users/' + id,data)
}

export const remove = async(id) => {
    await axios.delete(apiUrl + '/users/' + id)
}

