import axios from "axios";
import React, { useState } from "react";
import useInput from "../../../hook/useInput";
import Header from "../../ui/Header/Header";
import { StContentWrap, StImagebox, StImgInput, StImgInputAdd, StImgLabel, StInput, StButton, StContainer, StLabel, StInputContent, StContentBox, StBtnBox, StTitleBox } from "./UploadcontentFormStyled";

function UploadcontentForm() {
  const [title, changeTitle] = useInput(e=>e);
  const [contents, changeContent] = useInput(e=>e);
  const [image, setImage] = useState();

  const onChangeImgInputHandler = (e) => {
    const img = e.target.files[0];
    // console.log('img :', img);

    const formData = new FormData();
    formData.append('image', img);
    // console.log(formData);
    // for (const keyValue of formData) console.log(keyValue);
    setImage(()=>formData);
  }

//  data : formData
// form.appned('image', imageData)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if(!title) {
      alert("제목을 입력해주세요");
      return;
    }
    if(!contents) {
      alert("내용을 입력해주세요");
      return;
    }
    const formDataImg = image;
    const body = {
      title,
      contents,
    }
    const json = JSON.stringify(body);
    const blob = new Blob([json], { type: 'application/json' });

    formDataImg.append('data', blob);

    console.log("image: ", image);

    const res = await axios({
      method: 'POST',
      data: image,
      url: `${process.env.REACT_APP_URL}/api/blogs`,
      headers: {"Content-Type":"multipart/form-data"},
    });
    console.log(res);
  };

  return (
    <>
    <Header />
    <StContainer>
      <StContentWrap onSubmit={onSubmitHandler}>
          <h3>글 작성하기</h3>
          <StTitleBox>
            <StLabel htmlFor="title"> 제목 </StLabel>
            <StInput id="title" value={title} onChange={changeTitle} type={title} maxLength={20} placeholder="제목을 입력하세요(20자 이내)" />
          </StTitleBox>
          <StImagebox>
            <StImgLabel htmlFor="file">
              파일 첨부
            </StImgLabel>
            <StImgInput 
              type="file" 
              id="file" 
              // value={image}
              accept="image/png, image/jpeg, image/gif"
              required
              onChange={onChangeImgInputHandler}
            />
          </StImagebox>
          <StInputContent value={contents} onChange={changeContent} maxLength={500}  placeholder="내용입력하기...(500자 이내)" type="text" />
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