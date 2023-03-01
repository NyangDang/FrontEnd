import styled from "styled-components";

const StContainer = styled.div`
  background-color: #fffefb;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  width:100%;
  height: 56px;
  position: fixed;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(137, 137, 137, 0.22);
  }
  h3 {
    font-size: 28px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export { StContainer };
