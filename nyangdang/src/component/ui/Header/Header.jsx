import React from "react";
import { useNavigate } from "react-router-dom";
import { StContainer, StBtn } from "./HeaderStyled";
import { getUser, removeUserName } from "../../../LocalStorage/LocalStroage";
import { logoutUser } from "../../../axios/api";
function Header() {
  const navigate = useNavigate();
  const userName = getUser().sub; // username(ID)
  const logoutHandler = () => {
    if (!window.confirm("로그아웃 하시겠습니까?")) return;
    logoutUser();
    navigate("/");
    removeUserName();
  };
  return (
    <StContainer>
      <h3 onClick={() => navigate("/main")}> NyangDang </h3>
      {userName ? (
        <StBtn onClick={logoutHandler}>로그아웃</StBtn>
      ) : (
        <StBtn>로그인</StBtn>
      )}
    </StContainer>
  );
}
export default Header;
