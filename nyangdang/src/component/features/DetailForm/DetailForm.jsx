import React, { useState, useRef } from "react";
import { delblogs, getblogs, postblogs } from "../../../axios/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  StBoxWrap,
  StBoxWrap2,
  StButtonWrap,
  StContentWrap,
  StimageBox,
  StCommentBox,
  StContentBox,
  StInputBox,
  Stimg,
  StInputBoxWrap,
  StAddCommentBtn,
  StCommentData,
} from "./DetailFormStyled";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../ui/Header/Header";

function DetailForm() {
  const params = useParams();
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const mutation = useMutation();

  const { isLoding, isError, data } = useQuery("blogs", getblogs); //인자: 이름, 가져올데이터명
  if (isLoding) return <h3>Loding...</h3>;
  if (isError) return <h3>Error occur</h3>;

  const findTodo = data.find((value) => value.id === Number(params.id));

  const AddCommentBtn = () => {
    const newComment = {
      blogno: findTodo.id,
      comment,
    };
    postblogs(newComment);
  };
  const deleteContentBtnHandler = (id) => {
    const delContent = {
      username: id,
    };
    delblogs(delContent);
    console.log("hello");
  };

  console.log("dataaaaa", data);
  console.log(comment);
  console.log("findtodo", findTodo);

  return (
    <div>
      <Header />
      <div>
        <button style={{ position: "relative" }} onClick={() => navigate(-1)}>
          Back
        </button>
        Detail
      </div>
      <StContentWrap>
        <StBoxWrap key={findTodo.id}>
          <div>
            {/* 사진 */}
            <StimageBox>
              <Stimg src={findTodo.imageUrl} alt="img" />
            </StimageBox>
          </div>
          <StBoxWrap2>
            {/* 내용 */}
            <StContentBox>{findTodo.contents}</StContentBox>
            {/* map으로 findTodo값 전체출력 */}

            <StCommentBox>
              {data.map((v) => (
                <StCommentData key={v.id}>{v.contents}</StCommentData>
              ))}
            </StCommentBox>

            <StInputBoxWrap>
              <StInputBox
                value={comment}
                placeholder="댓글작성"
                type="text"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />

              <StAddCommentBtn onClick={AddCommentBtn}>추가</StAddCommentBtn>
            </StInputBoxWrap>
          </StBoxWrap2>
        </StBoxWrap>
        <StButtonWrap>
          <Link to={`/Fixcontent`}>
            <button>수정</button>
          </Link>
          <button onClick={() => deleteContentBtnHandler(findTodo.id)}>
            삭제
          </button>
        </StButtonWrap>
      </StContentWrap>
    </div>
  );
}

export default DetailForm;
