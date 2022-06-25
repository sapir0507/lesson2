import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const getUserDetailsByUserId = async(id) => {
    let user = await axios.get(url + `/${id}`);
    let data = user.data;
    let userDetails = {
        name: data.name,
        email: data.email
    }  
    return userDetails;
}
export default getUserDetailsByUserId;