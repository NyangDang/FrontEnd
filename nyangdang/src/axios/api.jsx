import { getCookie } from "../until/cookies";
//axios 요청 들어가는 모든 모듈
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `${getCookie("username")}}`,
  },
});

//조회
const getblogs = async () => {
  // const response = await axios.get(`${process.env.REACT_APP_URL}/blogs`);
  // const response = await axios.get(`${process.env.REACT_APP_URL}/api/blogs/`);
  const response = await instance.get("/api/blogs");
  console.log(response);
  return response.data;
};

//댓글조회
// const getcomment = async () => {
//   const response = await axios.get(`{"http://43.201.17.29"}/api/blogs`);

//   return response.data;
// };

//댓글전송
const postblogs = async (newComment) => {
  const response = await instance.post(
    `/api/blogs/${newComment.blogno}/comment`,
    newComment
  );
  console.log("send", response);
  return response.data;
};
// const postblogs = async (newComment) => {
//   await axios.post(
//     `${process.env.REACT_APP_URL}/api/blogs/${newComment.id}/comment/`,
//     newComment
//   );
// };

//게시글삭제
// const delblogs = async (delContent) => {
//   await axios.delete(`${process.env.REACT_APP_URL}/api/blogs/${delContent}`);
// };
const delblogs = async (delContent) => {
  const response = await instance.delete(
    `/api/blogs/${delContent}`,
    delContent
  );
  return response.data;
};

export { getblogs, postblogs, delblogs, instance };
