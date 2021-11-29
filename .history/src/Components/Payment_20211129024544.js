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
          <h5>See your most important conversations first. Snooze, archive, or jump back in. </h5>
          </div>
          <div className="PayImage">
          <img src={Form} alt="" />
          </div>
          </div>

           <div className="payInfo">
          <div className="payInfo__text">
          <h6>Collect payment from your fans</h6>
          <h5>See your most important conversations first. Snooze, archive, or jump back in. </h5>
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
     padding: 0 13rem;
 .pay {
     display: flex;
 }
`
export default Payment
