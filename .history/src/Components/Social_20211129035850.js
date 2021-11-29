import React from 'react';
import styled from 'styled-components';
import Apple from './../Images/apple.png';
import Spotify from './../Images/spotify.png';
import Twitter from './../Images/twitter.png';
import Youtube from './../Images/youtube.png';
import Iphone from './../Images/iphone.png';

const Social = () => {
    return (
        <Socials>
             <div className="pay">
          <div className="payInfo">
          <div className="payInfo__text">
           <img src={Youtube} alt="" />
          <h6 className="youtube">Share your favourite youtube playlist</h6>
          <h5>See your most important conversations first. Snooze, archive, or jump back in.
            <span>Activity Feed always keeps your conversations within reach, 
           so you can quickly catch up on what’s new.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Iphone} alt="" />
          </div>
          </div>

           <div className="payInfo">
          <div className="payInfo__text">
           <img src={Twitter} alt="" />
          <h6 className="twitter">Embed your tweets.</h6>
          <h5>See your most important conversations first. Snooze, archive, or jump back in.
            <span>Activity Feed always keeps your conversations within reach, 
           so you can quickly catch up on what’s new.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Iphone} alt="" />
          </div>
          </div>
          

          <div className="payInfo">
          <div className="payInfo__text">
           <img src={Spotify} alt="" />
          <h6 className="spotify">Share your favourite spotify playlist</h6>
          <h5>See your most important conversations first. Snooze, archive, or jump back in.
            <span>Activity Feed always keeps your conversations within reach, 
           so you can quickly catch up on what’s new.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Iphone} alt="" />
          </div>
          </div>
           

          <div className="payInfo">
          <div className="payInfo__text">
           <img src={Apple} alt="" />
          <h6 className="apple">Embed your tweets.</h6>
         <h5>See your most important conversations first. Snooze, archive, or jump back in.
            <span>Activity Feed always keeps your conversations within reach, 
           so you can quickly catch up on what’s new.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Iphone} alt="" />
          </div>
          </div>
            </div> 
        </Socials>
    )
}
const Socials = styled.div`
      padding: 1rem 15rem;
img {
    margin: 1rem;
      }
 .pay {
      display: grid;
      grid-template-columns: repeat(2, 1fr );
      grid-template-rows: repeat(2, 1fr );
      grid-column-gap: 3px;
      grid-row-gap: 3px;
 }
 .payInfo {
     background-color: #FFFFFF;
     margin: 1.5rem;
     width: auto;
     border-radius: 30px;
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
         margin-top: 0.2rem;
     }
     span {
         color: #505A73;
     }
     .youtube {
         color: #F44336;
     }
     .twitter {
         color: #19B2E5;;
     }
     .spotify {
         color: #00D95F;
     }
     .apple {
         color: #FA233B;
     }
 }

 @media only screen and (max-width: 900px) {
     padding: 1rem 0;
     .pay {
      display: flex;
      flex-direction: column;
 }
 .payInfo {
     width: 100%;
     margin: 0;
 }
 }
`
export default Social
