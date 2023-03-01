import styled from "styled-components";

const StAddContentBtn = styled.button`
  background-color: #9f4c4c;
  color: white;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-color: beige;
`;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: auto;
  /* overflow: scroll; */
`;

const StContentWrap = styled.div`
  position: relative;
  margin: auto;
  width: 80%;

  /* height: 100%; */
  padding: 50px;
  border: 1px solid purple;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* overflow: hidden; */
`;

const StOutsideImgBoxWrap = styled.div`
  /* display: flex;
  justify-content: center; */
  width: 80%;
  height: 80%;
  /* float: left; */
  display: inline-block;
`;
const StImageBoxWrap = styled.div`
  position: relative;
  margin: 30px;
  width: 100%;
  height: 100%;

  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 70px;

  /* 좌우 붙이기(갭으로) */
  /* gap으로 조절하는게 더정확함 */
  justify-content: space-between;
`;

const Stimg = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border: 1px solid green;
`;

export {
  StContentWrap,
  StImageBoxWrap,
  StAddContentBtn,
  StOutsideImgBoxWrap,
  Stimg,
  StContainer,
};
