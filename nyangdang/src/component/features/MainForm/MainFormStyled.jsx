import styled from "styled-components";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const StAddContentBtn = styled.div`
  color: #9f4c4c;
  font-size: 32px;
  font-weight: 900;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const StBtnContainer = styled.div`
  margin-top: 100px;
  background-color: #fffefb;
  padding: 86px;
  box-sizing: border-box;
  width: 80%;
  border-radius: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  } */
`;
const StBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #9f4c4c;
  font-size: 32px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: translateX(10px);
  }
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StImageBoxWrap = styled.div`
  position: relative;
  margin: 30px;
  width: 80%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 124px;
  padding: 8px;
  /* 좌우 붙이기(갭으로) */
  /* gap으로 조절하는게 더정확함 */
  /* justify-content: space-between; ==
  자동으로 넓이 계산해서 좌우로 컨텐츠 붙이기*/
`;
const Stimg = styled.img`
  width: 92%;
  height: 245px;
  object-fit: cover;
  border-radius: 4px;
  position: absolute;
  top: 12px;
  right: 14px;
`;
const StImgBox = styled.div`
  position: relative;
  width: 30%;
  height: 356px;
  box-shadow: 0px 0px 5px 0px gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StLike = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  left: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  h3 {
    font-size: 16px;
    font-weight: 500;
  }
`;
const StIcon = styled(IoHeartOutline)`
  font-size: 24px;
  color: #fa2d2d;
  cursor: pointer;
`;
const StIconTrue = styled(IoHeartSharp)`
  font-size: 24px;
  color: #fa2d2d;
  cursor: pointer;
`;
const StTitle = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 58px;
  left: 18px;
`;
const StArrow = styled(MdOutlineArrowForwardIos)``;
export {
  StContentWrap,
  StImageBoxWrap,
  StAddContentBtn,
  Stimg,
  StContainer,
  StBtnWrap,
  StImgBox,
  StLike,
  StIcon,
  StIconTrue,
  StTitle,
  StArrow,
  StBtnContainer,
};
