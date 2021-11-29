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
          <img src={Form} alt="" />
          </div>
          </div>

           <div className="payInfo">
          <div className="payInfo__text">
          <h6 className="fans">Collect payment from your fans</h6>
          <h5>See your most important conversations first. <span>Snooze, archive, or jump back in.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Seminar} alt="" />
          </div>
          </div>
          </div>  
        </Pay>
    )
}
const Pay = styled.div`
     padding: 1rem 15rem;
 .pay {
     display: flex;
 }
 .payInfo {
     background-color: #FFFFFF;
     margin: 0 1rem;
     width: auto;
    }
 .payInfo__text {
     text-align: left;
     margin: 1rem 2rem;
     h6 {
         font-family: Inter;
         font-style: normal;
         font-weight: bold;
         font-size: 18px;
         line-height: 22px;
         letter-spacing: -0.02em;
         color: #4360FD;
     }
     h5 {
         font-family: Inter;
         font-style: normal;
         font-weight: 600;
         font-size: 20px;
         line-height: 24px;
         letter-spacing: -0.02em;
         color: #020409;
         margin-top: 2rem;
     }
     span {
         color: #505A73;
     }
     .fans {
         color: #FE4110;
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
 }
`
export default Payment
