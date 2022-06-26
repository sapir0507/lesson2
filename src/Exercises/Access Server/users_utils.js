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

const usersUtil = {
    getUsers, 
    getUserDetailsByUserId
}

export default usersUtil;