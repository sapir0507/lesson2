import usersUtil from './users_utils';
import postsUtil from './posts_util';
import todosUtil from './todos_util';

const _getFiveUserTodos = async (id) => {
    let userTodos = await todosUtil.getFiveUserTodos(id);
    return userTodos;
}

const getUserFullData = async (id)=>{
    let postTitle = await postsUtil.getFirstPostOfUser(id);
    let userDetails = await usersUtil.getUserDetailsByUserId(id);
    let userTodos = await _getFiveUserTodos(id);

    let userFullData = {
         name: userDetails.name,
         email: userDetails.email,
         firstPostTitle: postTitle.title,
         userTodos: userTodos
    }


    return userFullData;
}

export default getUserFullData;