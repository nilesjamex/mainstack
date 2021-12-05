import React from 'react';
import styled from 'styled-components';
import Form from './../Images/form.png';
import Seminar from './../Images/seminar.png';

const Payment = () => {
    return (
        <Pay>
          <div className="pay">
          <div className="payInfo">
          <div className="payInfo__text">
          <h6>Collect payment from your fans</h6>
          <h5>See your most important conversations first. <span>Snooze, archive, or jump back in.</span> </h5>
          </div>
          <div className="PayImage">
          <img style={{width:"100%"}} src={Form} alt="" />
          </div>
          </div>

           <div className="payInfo">
          <div className="payInfo__text">
          <h6 className="fans">Collect payment from your fans</h6>
          <h5>See your most important conversations first. <span>Snooze, archive, or jump back in.</span> </h5>
          </div>
          <div className="PayImage">
          <img style={{height:"100%"}} src={Seminar} alt="" />
          </div>
          </div>
          </div>  
        </Pay>
    )
}
const Pay = styled.div`
    padding: 1rem 0;
  padding-bottom: 70px;
  .pay {
    display: flex;
  }
  .payInfo {
    background-color: #ffffff;
    margin: 0 1rem;
    width: auto;
    text-align: left;
  }
  .payInfo__text {
    text-align: left;
    margin: 1rem 2rem;
    h6 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.02em;
      color: #4360fd;
    }
    h5 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.02em;
      color: #020409;
      margin-top: 2rem;
    }
    span {
      color: #505a73;
    }
    .fans {
      color: #fe4110;
    }
  }
 @media only screen and (max-width: 900px) {
     padding: 0;
     .pay {
         flex-direction: column;
     }
     .payInfo {
     background-color: #FFFFFF;
     margin: 0;
    }
    img {
        width: 85%;
    }
 }
  @media screen and (max-width: 769px) {
    
  }

 @media screen and (max-width: 481px) {
   .payInfo__text {
    text-align: center;
    margin: 1rem 2rem;
    h6 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 1rem;
      line-height: 1.4rem;
      letter-spacing: -0.02em;
      color: #4360fd;
    }
    h5 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 0.7rem;
      line-height: 1rem;
      letter-spacing: -0.02em;
      color: #020409;
      margin-top: 1rem;
    } 
  } 

  @media screen and (max-width: 350px) {
    
  }
`
export default Payment
