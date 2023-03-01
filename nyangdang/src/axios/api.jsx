//axios 요청 들어가는 모든 모듈
import axios from "axios";

//조회
const getblogs = async () => {
  // const response = await axios.get(`${process.env.REACT_APP_URL}/blogs`);
  const response = await axios.get(`${process.env.REACT_APP_URL}/api/blogs/`);

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

export { getblogs, postblogs, delblogs };
