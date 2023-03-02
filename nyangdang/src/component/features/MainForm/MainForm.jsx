import {
  StContentWrap,
  StImageBoxWrap,
  StAddContentBtn,
  Stimg,
  StContainer,
  StBtnWrap,
  StLike,
  StImgBox,
  StIcon,
  StIconTrue,
  StTitle,
  StArrow,
  StBtnContainer,
} from "./MainFormStyled";
import Header from "../../ui/Header/Header";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getblogs, clickLike } from "../../../axios/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
function MainForm() {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("blogs", getblogs); //인자: 쿼리키,데이터(비동기함수)
  const queryClient = useQueryClient();
  const mutation = useMutation(clickLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("blogs");
    },
  });
  if (isLoading) return <h3>Loding...</h3>;
  if (isError) return <h3>Error occur</h3>;
  const onClickLikeHandler = async (blogno) => {
    mutation.mutate(blogno);
  };
  return (
    <div>
      <Header />
      <StContainer>
        <StBtnContainer>
          <StBtnWrap onClick={() => navigate("/uploadcontent")}>
            <StAddContentBtn>냥댕 자랑하기</StAddContentBtn>
            <StArrow />
          </StBtnWrap>
        </StBtnContainer>
        <StContentWrap>
          <StImageBoxWrap>
            {data.map((v) => (
              <StImgBox key={v.id}>
                <Link to={`/detail/${v.id}`}>
                  <Stimg src={v.imageUrl} />
                </Link>
                <StTitle>{v.title}</StTitle>
                <StLike>
                  {!v.heart ? (
                    <>
                      <StIcon onClick={() => onClickLikeHandler(v.id)} />
                      <h3>{v.likes}</h3>
                    </>
                  ) : (
                    <>
                      <StIconTrue onClick={() => onClickLikeHandler(v.id)} />
                      <h3>{v.likes}</h3>
                    </>
                  )}
                </StLike>
              </StImgBox>
            ))}
          </StImageBoxWrap>
        </StContentWrap>
      </StContainer>
    </div>
  );
}
export default MainForm;
