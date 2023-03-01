import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies, useCookies } from 'react-cookie';
import useInput from '../../../hook/useInput';
import { StContainerForm, StButton, StInput, StLabel, StBtnBox, StContainer, StInputBox, StImg } from './LoginFormStyled';
import kakao from "../../../assets/image/kakao_login_large_narrow.png";
import jwt_decode from "jwt-decode";



const url = 'https://kauth.kakao.com/oauth/authorize?client_id=513dbab402347b4ce9abb443337b09a6&redirect_uri=http://localhost:3000/api/user/kakao/callback&response_type=code';
function LoginForm() {
  const navigate = useNavigate();

  const [userId, changeUserId, resetId] = useInput((e) => e);
  const [userPw, changeUserPw, resetPw] = useInput((e) => e);
  const [status, setStatus] = useState("인증 되기 전");
  const [data, setData] = useState([]);
  const [bool, setBool] = useState(false);
  const [cookies, setCookies] = useCookies(['user']); // 'user' : 쿠키 이름
  // const cookies = new Cookies;

  const submitHandler = (e) => {
    e.preventDefault();
    if(bool) return;
    if( userId === ""){
      alert ("아이디를 입력해주세요");

      return;
    }
    if (userPw === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    const response = axios.post(
      `${process.env.REACT_APP_URL}/api/user/login`,
      {
        username: userId,
        password : userPw,
      }, {withCredentials: true}
    ).then(response => {
      console.log(response.headers.authorization);
      const token = response.headers.authorization;
      setCookies('username', response.headers.authorization);  // setCookie(쿠키이름, 쿠키에 넣을 값, 옵션)
      const decodedUserInfo = jwt_decode(token) // 토큰 decode
      localStorage.setItem('username', JSON.stringify(decodedUserInfo))
      alert("로그인 완료");
      navigate('/');
    }).catch(error => {
      console.log(error)
    });
    resetId();
    resetPw();
    console.log("response", response);
  }
  // const getData = async () => {
  //   const response = await axios.get(`${BASE_URL}/`, { withCredentials: true,});
  //   console.log("response", response);
  //   setData(response.data.data);
  // };

  const getData = async () => {
    const accessToken = cookies.get("accessToken");
    console.log("accessToken", accessToken);
    const response = await axios.get(`${process.env.REACT_APP_URL}/api/user/login`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // 누가 요청했는 지 알려준다. (토큰 전달)
      },
    });
    setData(response.data.data);
    console.log(response);
  };

  // const jwtToken = await Login(loginPayload)
  const kakaoBtnClickHandler = async () => {
    window.open(url);
    const response = await axios.get("https://kauth.kakao.com/oauth/token",{
      withCredentials: true,
      headers: {Authorization: "0136855d6d3a62366452598b4f210c36*"}
    });
    console.log("kakao response :", response);
    setCookies('username', response.headers.authorization);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      return submitHandler;
    }
  };

  return (
    <StContainer>
      <h3>로그인</h3>
      <StContainerForm onSubmit={submitHandler}>
        <StLabel htmlFor="id">
          {" "}
          ID
          <StInputBox>
            <StInput
              id="id"
              type="text"
              placeholder="아이디를 입력하세요"
              value={userId}
              onChange={changeUserId}
            />
          </StInputBox>
        </StLabel>
        <StLabel htmlFor="pw">
          {" "}
          PW
          <StInputBox>
            <StInput
              id="pw"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={userPw}
              onChange={changeUserPw}
              onKeyDown={keyDownHandler}
            />
          </StInputBox>
        </StLabel>
        <StBtnBox>
          <StButton type='submit'> 로그인 </StButton>
          <StButton onClick={()=>{
            navigate('/signup');
              setBool(true);
            }
          }> 회원가입 </StButton>
        </StBtnBox>
        {/* <button onClick={getData}> 리스트 요청 </button> */}
      </StContainerForm>
      <StImg src={kakao} id="login-kakao-btn" onClick={kakaoBtnClickHandler}/>

    </StContainer>
  );
}
export default LoginForm;
