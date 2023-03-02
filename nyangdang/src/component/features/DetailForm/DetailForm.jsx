import React, { useState, useRef } from "react";
import {
  delblogs,
  getblogs,
  postblogs,
  getcomments,
  instance,
} from "../../../axios/api";
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
  const { isLoding, isError, data } = useQuery("blogs", getblogs); //인자: 이름, 가져올데이터명
  const params = useParams();
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  // const mutation = useMutation();
  if (isLoding) return <h3>Loding...</h3>;
  if (isError) return <h3>Error occur</h3>;

  const findId = data?.find((value) => value.id === Number(params.id));

  const AddCommentBtn = () => {
    const newComment = {
      blogno: findId.id,
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
  // console.log("findtodo", findId.comments);

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
        <StBoxWrap key={findId.id}>
          <div>
            {/* 사진 */}
            <StimageBox>
              <Stimg src={findId?.imageUrl} alt="img" />
            </StimageBox>
          </div>
          <StBoxWrap2>
            {/* 내용 */}
            <StContentBox>{findId?.contents}</StContentBox>

            <StCommentBox>
              {/* map으로 findTodo값 전체출력 */}

              <StCommentData key={findId.id}>
                {/* <div>{findId.comments.map((item) => item.username)}</div> */}

                <div>{findId.comments.map((item) => item.comment)}</div>
              </StCommentData>
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
          <button onClick={() => deleteContentBtnHandler(findId.id)}>
            삭제
          </button>
        </StButtonWrap>
      </StContentWrap>
    </div>
  );
}

export default DetailForm;
