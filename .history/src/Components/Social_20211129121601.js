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
           <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#F44336"/>
<path d="M21 29L29 24L21 19V29Z" fill="white"/>
<path d="M24 14C29.5 14 34 18.476 34 24C34 29.524 29.524 34 24 34C18.476 34 14 29.524 14 24C14 18.476 18.5 14 24 14Z" stroke="white" stroke-miterlimit="10"/>
</svg>

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
