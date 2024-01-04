// import 'dotenv/config';
import axios from "axios";


export const list = async() => {
    return await axios.get('http://localhost:8080/users')
}
// export const list = async() => {
//     return await axios.get(process.env.REACT_APP_API + '/users')
// }

export const read = async(id) => {
    // console.log(data)
    return await axios.get('http://localhost:8080/users/' + id)
}
// export const read = async(id) => {
//     // console.log(data)
//     return await axios.get(process.env.REACT_APP_API + '/users/' + id)
// }

export const create = async(data) => {
    // console.log(data)
    await axios.post('http://localhost:8080/users', data)
}
// export const create = async(data) => {
//     // console.log(data)
//     await axios.post(process.env.REACT_APP_API + '/users', data)
// }

export const update = async(id, data) => {
    return await axios.put('http://localhost:8080/users/' + id,data)
}
// export const update = async(id, data) => {
//     return await axios.put(process.env.REACT_APP_API + '/users/' + id,data)
// }

export const remove = async(id) => {
    await axios.delete('http://localhost:8080/users/' + id)
}
// export const remove = async(id) => {
//     await axios.delete(process.env.REACT_APP_API + '/users/' + id)
// }

