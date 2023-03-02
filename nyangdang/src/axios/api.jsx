import { getCookie } from "../until/cookies";
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    Authorization: `${getCookie("username")}}`,
  },
});
//조회
const getblogs = async () => {
  const response = await instance.get("/api/blogs");
  return response.data;
};
//댓글전송
const postblogs = async (body) => {
  await instance.post(`/api/blogs/${body.blogno}/comment/`, body);
};
//게시글삭제
const delblogs = async (blogno, username) => {
  await instance.delete(`/api/blogs/${blogno}`, username);
};
// 좋아요
const clickLike = async (blogno) => {
  const response = await instance.post(`/api/blogs/${blogno}/like`);
  return response;
};
// 로그아웃
const logoutUser = async () => {
  await instance.post("/api/logout");
};
// 이미지 업로드
const postBlog = async (formData) => {
  await instance.post("/api/blogs", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export {
  getblogs,
  postblogs,
  delblogs,
  instance,
  clickLike,
  logoutUser,
  postBlog,
};
