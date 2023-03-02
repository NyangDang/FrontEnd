import React, { useState } from "react";
import useInput from "../../../hook/useInput";
import Header from "../../ui/Header/Header";
import {
  StContentWrap,
  StImagebox,
  StImgInput,
  StImgLabel,
  StInput,
  StButton,
  StContainer,
  StLabel,
  StInputContent,
  StBtnBox,
  StTitleBox,
} from "./UploadcontentFormStyled";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { postBlog } from "../../../axios/api";
function UploadcontentForm() {
  const navigate = useNavigate();
  const [title, changeTitle] = useInput((e) => e);
  const [contents, changeContent] = useInput((e) => e);
  const [image, setImage] = useState();
  const queryClient = useQueryClient();
  const mutation = useMutation(postBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries("blogs");
    },
  });
  const onChangeImgInputHandler = (e) => {
    const img = e.target.files[0];
    // for (const keyValue of formData) console.log(keyValue);
    if (img.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 5MB이내로 첨부 가능합니다");
      return;
    }
    setImage(img);
    // console.log(formData.get('image'));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }
    // const image = imagea;
    const body = {
      title,
      contents,
    };
    const formData = new FormData(); // image file을 받을 때 type (기본타입이 multipart/)
    formData.append("image", image);
    const json = JSON.stringify(body);
    const requestDto = new Blob([json], { type: "application/json" }); // json 으로 만들어 주기 위한 것
    formData.append("requestDto", requestDto);
    // console.log("formDataImg: ", image.get("requestDto"));
    // console.log(formData.get('image'));
    // console.log(formData.get('requestDto'));
    mutation.mutate(formData);
    navigate("/");
  };
  const onClickCancelHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <Header />
      <StContainer>
        <StContentWrap enctype="multipart/form-data" onSubmit={onSubmitHandler}>
          <h3>글 작성하기</h3>
          <StTitleBox>
            <StLabel htmlFor="title"> 제목 </StLabel>
            <StInput
              id="title"
              value={title}
              name="title"
              onChange={changeTitle}
              type={title}
              maxLength={20}
              placeholder="제목을 입력하세요(20자 이내)"
            />
          </StTitleBox>
          <StImagebox>
            <StImgLabel htmlFor="file">파일 첨부</StImgLabel>
            <StImgInput
              type="file"
              id="file"
              // value={image}
              name="image"
              accept="image/png, image/jpeg, image/gif"
              required
              onChange={onChangeImgInputHandler}
            />
          </StImagebox>
          <StInputContent
            value={contents}
            name="contents"
            onChange={changeContent}
            maxLength={500}
            placeholder="내용입력하기...(500자 이내)"
            type="text"
          />
          <StBtnBox>
            <StButton type="button" onClick={onClickCancelHandler}>
              취소
            </StButton>
            <StButton type="submit"> 완료 </StButton>
          </StBtnBox>
        </StContentWrap>
      </StContainer>
    </>
  );
}
export default UploadcontentForm;
