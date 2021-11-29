import React from 'react';
import styled from 'styled-components';

const Desc = () => {
    return (
        <Descstyled>
        <div>
            <h5>
            Conversations designed for <span>people, not bots.</span>
            </h5>
            <p>Amet minim mollit non deserunt ullamco 
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
             velit mollit. Exercitation veniam</p>
        </div>
        </Descstyled>
    )
}
const Descstyled = styled.div`
      padding: 1rem 25rem;
  h5 {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 4rem;
      line-height: 120%;
      text-align: center;
      letter-spacing: -0.02em;
      color: #020409;
  }
  p {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 150%;
      text-align: center;
      letter-spacing: -0.01rem;
      color: #505A73;
      padding: 1rem 13rem;
  }
  span {
      color : #C91C5A;
  }
  @media only screen and (max-width: 900px) {
      padding: 0;
      h5 {
          font-size: 1.8rem;
          margin: 0.4rem;
      }
      p {
          padding: 0;
      }
  }
`
export default Desc
