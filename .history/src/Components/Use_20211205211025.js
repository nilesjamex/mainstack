import React from 'react';
import styled from 'styled-components';
import Joseph from './../Images/joseph.jpg'

const Use = () => {
    return (
        <Usestyled>
        <div className="use">
            <div className="useText">
            <div>
            <h5>Conversations designed for people, not bots.</h5>
            <p className="useText__sub">Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
            amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
            veniam consequat sunt nostrud amet.Amet minim</p>
            </div>
            <div>
            <button>Get started</button>
            </div>
            </div>
            <div> <img src={Joseph} alt="" /> </div>
            <div> <img src={Joseph} alt="" /> </div>
        </div>
        </Usestyled>
    )
}
const Usestyled = styled.div`
     padding-top: 150px;
  .use {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: 100%;
    background: linear-gradient(180deg, #22252d 0%, #0a0c10 100%);
    border-radius: 30px;
    padding: 3rem;

    img {
      margin: 0 1rem;
      border-radius: 16px;
    }
  }
  .useText {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 0;
    text-align: left;

    h5 {
      font-family: "JakartaBold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      color: #ffffff;
      margin-right: 4rem;
      line-height: 52px;
      margin-right: auto;
      margin-left: auto;
      padding: 0 30px;
    }
    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 2rem;
      letter-spacing: -0.01em;
      color: #797d87;
      margin-top: 3rem;
      margin-bottom: 2rem;
      margin-right: auto;
      margin-left: auto;
      padding: 0 30px;
    }
    button {
      width: 8rem;
      height: 3rem;
      background: #f7f9fc;
      border-radius: 100px;
      font-family: "Inter", sans-serif;
    }
  }
@media only screen and (max-width: 900px) {
    padding: 0;
    .use {
        flex-direction: column;
        align-items: center;
        padding: 0;
         img {
        margin: 0.7rem 0rem;
    }
    }
    .useText {
      align-items: center;
    }
   
    
}
 @media screen and (max-width: 769px) {
    
  }

 @media screen and (max-width: 481px) {
     
  } 

  @media screen and (max-width: 350px) {
    
  }
`
export default Use
