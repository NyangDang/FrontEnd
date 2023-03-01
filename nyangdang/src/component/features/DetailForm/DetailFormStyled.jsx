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
  flex-direction: row;
  color: red;
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
};

// const StContainer = styled.div`
//   width:100%;
//   height:100vh;
//   display: flex;
//   justify-content: center;
//   align-items:center;
//   gap:12px;
// `;

// const StImg = styled.div`
//   background-color: gray;
//   width:40%;
//   height:60%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StBoxRight = styled.div`
//   width:40%;
//   height: 60%;
//   display: flex;
//   flex-direction: column;
//   gap:12px;
// `;

// const StContent = styled.div`
//   background-color: antiquewhite;
//   width:90%;
//   height:40%;
// `;
// const StComment = styled.form`
//   background-color: skyblue;
//   width:90%;
//   height:50%;
// `;
// const StWriteBox = styled.div`
//   width:90%;
//   height:10%;
//   display: flex;
//   align-items: center;
// `;
// const StLabel = styled.label`
//   width:15%;
// `;
// const StInput = styled.input`
//   display: block;
//   width:85%;
//   height: 36px;
//   border: solid 1px #dadada;
//   padding: 10px 14px;
//   box-sizing: border-box;
//   background: #fff;
//   position: relative;
// `;

// export {
//   StContainer,
//   StImg,
//   StBoxRight,
//   StContent,
//   StComment,
//   StWriteBox,
//   StInput,
//   StLabel,
// };
