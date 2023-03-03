import styled from "styled-components";
const StContentWrap = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const StBoxWrap2 = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;
const StimageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border: 1px solid black;
`;
const Stimg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;
const StButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const StRemoveBtn = styled.button`
  margin-top: 24px;
  right: 10px;
  top: 18px;
  background-color: #9f4c4c;
  color: white;
  border-radius: 20px;
  width: 120px;
  height: 40px;
  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-color: beige;
  cursor: pointer;
  &:hover {
    transform: rotate(6deg);
  }
`;
const StContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 1px solid black;
`;
const StCommentBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 500px;
  height: 150px;
  border: 1px solid black;
  flex-direction: column;
  overflow: scroll;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 32px;
`;
const StAddCommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StAddCommentBtn = styled.button`
  width: 100px;
  height: 50px;
`;
const StCommentData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  max-height: 50px;
  padding-left: 20px;
`;
const StInputBoxWrap = styled.div`
  display: flex;
  border: 1px solid black;
  width: 500px;
  height: 50px;
`;
const StInputBox = styled.input`
  width: 500px;
`;
const StComment = styled.div`
  padding-top: 24px;
  margin-top: 24px;
`;
export {
  StContentWrap,
  StBoxWrap,
  StBoxWrap2,
  StButtonWrap,
  StimageBox,
  StContentBox,
  StCommentBox,
  StAddCommentBox,
  StInputBox,
  Stimg,
  StInputBoxWrap,
  StAddCommentBtn,
  StCommentData,
  StRemoveBtn,
  StComment,
};
