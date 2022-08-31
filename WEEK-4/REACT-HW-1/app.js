import axios from "axios";

async function getData (userId) {
let user = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
let post = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
user = user.data
post = post.data
user.posts = post;
return user;
}


export default getData;