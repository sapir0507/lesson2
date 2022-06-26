import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

const getAllPosts = (id) => {
    return axios.get(url, {params:{userId:id}});
}

const getFivePosts = () => {
    return axios.get(url, {params:{_limit: 5}});
}

const getTenPosts = () => {
    return axios.get(url, {params:{_limit: 10}});
}

const getFivePostsById = (id) => {
    return axios.get(url, {params:{_limit: 5, userId:id}});
}

const getFirstPostOfUser = async(id) => {
    let allPosts = await axios.get(url, {params:{_limit: 1, userId: id}});
    let firstPost = allPosts.data;
    let title = {
        title: firstPost[0].title
    }
    return title;
}

const postsUtil = {getFirstPostOfUser, getFivePostsById, getTenPosts, getFivePosts, getAllPosts}

export default postsUtil;