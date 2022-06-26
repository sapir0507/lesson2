import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const getUserDetailsByUserId = async(id) => {
    let users = await axios.get(url + `/${id}`);
    let data = users.data;
    let userDetails = {
        name: data.name,
        email: data.email
    }  
    return userDetails;
}

const getUsers = (id) => {
    return axios.get(url + `/${id}`);
}

const getAllUsersIds = async() => {
    let users = await axios.get(url);
    let usersIds = users.data.map((user)=>{
        return user.id
    })
    return usersIds;
}

const usersUtil = {
    getUsers, 
    getUserDetailsByUserId,
    getAllUsersIds
}

export default usersUtil;