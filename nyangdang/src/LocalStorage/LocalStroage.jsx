import { getCookie, removeCookie } from "../until/cookies";
export const getUser = () => {
  const userInfo =
    localStorage.getItem("username") && getCookie("username")
      ? JSON.parse(localStorage.getItem("username"))
      : null;
  return userInfo;
};
// 쿠키 압수
export const removeUserName = () => {
  removeCookie("username");
  localStorage.clear();
};
