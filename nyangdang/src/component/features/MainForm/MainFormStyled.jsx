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

const StBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: auto;
  overflow: scroll;
  overflow: auto;
`;

const StContentWrap = styled.div`
  position: relative;
  margin-top: 10px;
  width: 1500px;

  /* height: 100%; */
  padding: 0px;
  /* border: 1px solid purple; */
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
  width: -5%;
  height: 100%;

  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 10px;
  /* 좌우 붙이기(갭으로) */
  /* gap으로 조절하는게 더정확함 */
  /* justify-content: space-between; == 
  자동으로 넓이 계산해서 좌우로 컨텐츠 붙이기*/
`;

const Stimg = styled.img`
  width: 245px;
  height: 245px;
  object-fit: cover;
  border: 5px solid black;
  border-radius: 30px;
`;

export {
  StContentWrap,
  StImageBoxWrap,
  StAddContentBtn,
  StOutsideImgBoxWrap,
  Stimg,
  StContainer,
  StBtnWrap,
};
