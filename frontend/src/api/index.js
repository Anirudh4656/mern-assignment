import axios from "axios";
const API =axios.create({baseURL:"http://localhost:5000"})
API.interceptors.request.use((req,res) => {

    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
// const url = "http://localhost:4000/posts"


export const fetchPosts=(page)=> API.get(`/posts?page=${page}`);

export const createPost=(newPost)=> API.post("/posts",newPost);

export const logIn = (form) => API.post("/user/login",form);
export const signUp = (form) => API.post("/user/signup",form);
