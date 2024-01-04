import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const list = async() => {
    return await axios.get(apiUrl + '/users')
}
// export const list = async() => {
//     console.log(apiUrl)
//     return await axios.get(apiUrl + '/users')
// }

export const read = async(id) => {
    // console.log(data)
    return await axios.get(apiUrl + '/users/' + id)
}
// export const read = async(id) => {
//     // console.log(data)
//     return await axios.get(import.meta.env.REACT_APP_API + '/users/' + id)
// }

export const create = async(data) => {
    // console.log(data)
    await axios.post(apiUrl + '/users/' , data)
}
// export const create = async(data) => {
//     // console.log(data)
//     await axios.post(import.meta.env.REACT_APP_API + '/users', data)
// }

export const update = async(id, data) => {
    return await axios.put(apiUrl + '/users/' + id,data)
}
// export const update = async(id, data) => {
//     return await axios.put(import.meta.env.REACT_APP_API + '/users/' + id,data)
// }

export const remove = async(id) => {
    await axios.delete(apiUrl + '/users/' + id)
}
// export const remove = async(id) => {
//     await axios.delete(import.meta.env.REACT_APP_API + '/users/' + id)
// }

