import api from "configs/api";

const getProfile = () => api.get("user/whoami")
   .then(res => res || false);

const getPost = () => api.get("post/my")

const getPostDetails = ({queryKey}) => api.get(`post/${queryKey[1]}`)

const getAllPost = () => api.get("")

const deletePost = id => api.delete(`post/delete/${id}`)

export { getProfile, getPost, deletePost, getAllPost, getPostDetails };