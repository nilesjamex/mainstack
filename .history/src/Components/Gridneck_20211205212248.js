import React from "react";
import styled from "styled-components";
import Man from "./../Images/man.png";
import Woman from "./../Images/woman.png";
import Bigb from "./../Images/bigb.png";

const Gridneck = () => {
  return (
    <Grid>
      <div className="use">
        <div className="gridText">
          <div>
            <h5>Conversations designed for people, not bots.</h5>
            <p className="useText__sub">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim
            </p>
          </div>
          <div>
            <button>Get started</button>
          </div>
        </div>
        <div className="gridImage">
          <div>
            {" "}
            <img src={Woman} alt="" />{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "0.4rem",
            }}
          >
            <div>
              {" "}
              <img src={Man} alt="" />{" "}
            </div>
            <div>
              {" "}
              <img src={Bigb} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};
const Grid = styled.div`
  .use {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: 100%;
    background: linear-gradient(180deg, #c91c5a 0%, #920034 100%);
    border-radius: 30px;
    padding: 3rem;
  }
  .gridText {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 0;
    text-align: left;

    h5 {
      font-family: "JakartaBold", sans-serif;
      font-weight: bold;
      font-size: 2.5rem;
      margin-right: 4rem;
      line-height: 52px;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 2rem;
      letter-spacing: -0.01em;
      color: #f5b2ca;
      margin-top: 1.75rem;
      margin-right: 4rem;
    }
    button {
      width: 8rem;
      height: 3rem;
      background: #f7f9fc;
      border-radius: 100px;
      font-family: "Inter", sans-serif;
    }
  }
  .gridImage {
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 900px) {
    padding: 0;
    .use {
      flex-direction: column;
    }
    .gridImage {
      display: flex;
      flex-direction: column;
    }
  }
   @media screen and (max-width: 769px) {
    
  }

 @media screen and (max-width: 481px) {
     .use {
   align-items: center;
  }
  .gridText {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    text-align: center;

    h5 {
      font-family: "JakartaBold", sans-serif;
      font-weight: bold;
      margin: 0.4rem;
      margin-right: 0;
      font-size: 1rem;
      line-height: 1.4rem;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 0.7rem;
      line-height: 1rem;
      letter-spacing: -0.01em;
      color: #f5b2ca;
      margin-top: 1.75rem;
      margin-bottom: 1.5rem;
      margin-right: 0rem;
    }
  } 

  @media screen and (max-width: 350px) {
    
  }
`;
export default Gridneck;
