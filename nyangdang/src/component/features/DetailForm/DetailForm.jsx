import React, { useState } from "react";
import { getblogs, postblogs } from "../../../axios/api";
import { useQuery } from "react-query";

import {
  StBoxWrap,
  StBoxWrap2,
  StButtonWrap,
  StContentWrap,
  StimageBox,
  StCommentBox,
  StAddCommentBox,
  StContentBox,
  StInputBox,
} from "./DetailFormStyled";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailForm() {
  const params = useParams();
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
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

  console.log(data);

  return (
    <div>
      <div>
        {" "}
        <button onClick={() => navigate(-1)}>Back</button> Detail
      </div>
      <StContentWrap>
        {/* <StBoxWrap key={data}> */}
        <StBoxWrap>
          <div>
            {/* 사진 */}
            <StimageBox>image{findTodo.imageUrl} </StimageBox>
          </div>
          <StBoxWrap2>
            {/* 내용 */}
            <StContentBox>내용</StContentBox>
            <StCommentBox>댓글</StCommentBox>
            <StInputBox
              value={comment}
              placeholder="댓글작성"
              type="text"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <button onClick={AddCommentBtn}></button>
          </StBoxWrap2>
        </StBoxWrap>
        <StButtonWrap>
          <Link to={`/Fixcontent`}>
            <button>수정</button>
          </Link>
          <button>삭제</button>
        </StButtonWrap>
      </StContentWrap>
    </div>
  );
}

export default DetailForm;
