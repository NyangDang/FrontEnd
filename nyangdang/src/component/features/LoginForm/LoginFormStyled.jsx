import styled from "styled-components";
const StContainer = styled.div`
  padding: 100px;
  background: #f5f6f7;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h3 {
    font-size: 32px;
    position: absolute;
    top: 86px;
  }
`;
const StContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 460px;
  position: absolute;
  top: 200px;
  gap: 32px;
`;
const StLabel = styled.label``;
const StInput = styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
`;
const StIdBox = styled.div``;
const StPwBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const StInputBox = styled.div`
  display: block;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
`;
const StButtonCheck = styled.button`
  position: absolute;
  right: 10px;
  top: 30px;
  border: none;
  padding: 8px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
const StButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 16px 10px;
  cursor: pointer;
  width: 50%;
  margin-top: 12px;
  &:hover {
    transform: translateY(-3px);
  }
`;
const StImg = styled.img`
  font-size: 24px;
  cursor: pointer;
  width: 200px;
  position: absolute;
  top: 500px;
  &:hover {
    transform: translateY(-3px);
  }
`;
const StBtnBox = styled.div`
  display: flex;
  gap: 12px;
`;
export {
  StContainerForm,
  StBtnBox,
  StImg,
  StButton,
  StInput,
  StLabel,
  StIdBox,
  StPwBox,
  StContainer,
  StInputBox,
  StButtonCheck,
};
