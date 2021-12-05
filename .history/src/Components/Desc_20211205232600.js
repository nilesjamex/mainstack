import React from "react";
import styled from "styled-components";

const Desc = () => {
  return (
    <Descstyled>
      <div>
        <h5>
          Conversations designed for <span>people, not bots.</span>
        </h5>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam
        </p>
      </div>
    </Descstyled>
  );
};
const Descstyled = styled.div`
  padding: 0;
  margin-top: 100px;
  h5 {
    font-family: "JakartaBold", sans-serif;
    font-weight: bold;
    font-size: 3.25rem;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02em;
      margin-right: auto;
      margin-left: auto;
      padding: 0 30px;
    color: #020409;
    width: 90%;
    max-width: 715px;
  }
  p {
     font-family: "Inter", sans-serif;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.01rem;
    color: #505a73;

    width: 90%;
    max-width: 715px;
    margin: auto;
    margin-bottom: 50px;
  }
  span {
    color: #c91c5a;
  }
  @media only screen and (max-width: 900px) {
    padding: 0;
    margin-top: 1rem;
    h5 {
      font-size: 1.8rem;
      margin: 0.4rem;
    }
    p {
      padding: 0;
    }
  }
   @media screen and (max-width: 769px) {
    
  }

 @media screen and (max-width: 481px) {
     padding: 0;
    h5 {
      font-size: 1rem;
      margin: 0.4rem;
      line-height: 1.4rem
    }
    p {
      font-size: 0.7rem;
      padding: 0;
      line-height: 1rem;
    }
  } 

  @media screen and (max-width: 350px) {
    
  }
`
export default Desc;
