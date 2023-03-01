import React from "react";
import { useNavigate } from "react-router-dom";
import { StContainer } from "./HeaderStyled";

function Header() {
  const navigate = useNavigate();
  return (
    <StContainer>
      <h3 onClick={() => navigate("/")}> Dangnyang</h3>
    </StContainer>
  );
}

export default Header;
