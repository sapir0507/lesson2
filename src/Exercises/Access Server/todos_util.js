import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

const getUserTodos = async(userId) => {
    let user = await axios.get(url + `?userId=${userId}`);
    let data = user.data;
    let userTodos = data.map(user=>{
        return user.title
    })
    return userTodos;
}
export default getUserTodos;