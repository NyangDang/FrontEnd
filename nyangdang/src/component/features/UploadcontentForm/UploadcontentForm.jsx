import axios from "axios";
import React, { useState } from "react";
import useInput from "../../../hook/useInput";
import Header from "../../ui/Header/Header";
import {
  StContentWrap,
  StImagebox,
  StImgInput,
  StImgInputAdd,
  StImgLabel,
  StInput,
  StButton,
  StContainer,
  StLabel,
  StInputContent,
  StContentBox,
  StBtnBox,
  StTitleBox,
} from "./UploadcontentFormStyled";
import { getCookie } from "../../../until/cookies";
import { instance } from "../../../axios/api";
function UploadcontentForm() {
  const [title, changeTitle] = useInput((e) => e);
  const [contents, changeContent] = useInput((e) => e);
  const [image, setImage] = useState();
  const onChangeImgInputHandler = (e) => {
    const img = e.target.files[0];
    // for (const keyValue of formData) console.log(keyValue);
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
    // console.log("body: ", body);
    const json = JSON.stringify(body);
    // console.log("json", json);
    const requestDto = new Blob([json], { type: "application/json" }); // json 으로 만들어 주기 위한 것
    // console.log("blob", blob);
    formData.append("requestDto", requestDto);
    // console.log("image", ...image);
    // formDataImg.append("title", JSON.stringify(title));
    // formDataImg.append("contents", JSON.stringify(contents));
    // console.log("formDataImg: ", image.get("requestDto"));
    console.log(formData.get("image"));
    console.log(formData.get("requestDto"));
    instance.post("/api/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
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
            <StButton>취소</StButton>
            <StButton type="submit">완료</StButton>
          </StBtnBox>
        </StContentWrap>
      </StContainer>
    </>
  );
}
export default UploadcontentForm;
