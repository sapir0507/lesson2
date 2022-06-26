import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

const getAllUserTodos = async (userId) =>{
    let user = await axios.get(url + `?userId=${userId}`);
    let data = user.data;
    let userTodos = data.map(user=>{
        return user.title
    })
    return userTodos;
}

const getFiveUserTodos = async (userId) =>{
    let user = await _getFiveUserTodos(userId)
    let data = user.data;
    let userTodos = data.map(user=>{
        return user.title
    })
    return userTodos;
}


const _getFiveUserTodos = (userId) => {
    return axios.get(url + `?userId=${userId}`, {params:{_limit: 5}})
}

const todosUtil = {getFiveUserTodos,getAllUserTodos}

export default todosUtil;
