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
  const response = await instance.get("/api/blogs");
  return response.data;
};
//댓글전송
const postblogs = async (newComment) => {
  await axios.post(
    `${process.env.REACT_APP_URL}/api/blogs/${newComment.id}/comment/`,
    newComment
  );
};
//게시글삭제
const delblogs = async (delContent) => {
  await axios.delete(`${process.env.REACT_APP_URL}/api/blogs/${delContent}`);
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
