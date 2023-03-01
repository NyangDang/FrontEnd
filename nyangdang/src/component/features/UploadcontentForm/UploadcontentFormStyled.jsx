import styled from "styled-components";
const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const StContentWrap = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 100%;
  h3 {
    font-size: 32px;
  }
`;
const StImagebox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 100px;
  width: 100%;
  position: relative;
`;
const StLabel = styled.label`
  width: 10%;
  font-size: 22px;
`;
const StImgLabel = styled.label`
  display: inline-block;
  padding: 6px 14px;
  color: #fff;
  /* vertical-align: middle; */
  background-color: #999999;
  cursor: pointer;
  height: 24px;
  z-index: 1;
`;
const StImgInput = styled.input`
  position: absolute;
  z-index: 0;
  left: 20px;
  /*width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0; */
`;
const StImgInputAdd = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
`;
const StTitleBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const StInput = styled.input`
  width: 90%;
  display: block;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px;
  box-sizing: border-box;
  background: #fff;
`;
const StInputContent = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
`;
const StButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 16px 10px;
  cursor: pointer;
  margin-top: 12px;
  width: 50%;
`;
const StBtnBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;
export {
  StContentWrap,
  StImgInputAdd,
  StImgLabel,
  StContainer,
  StImagebox,
  StImgInput,
  StInput,
  StButton,
  StLabel,
  StInputContent,
  StBtnBox,
  StTitleBox,
};
