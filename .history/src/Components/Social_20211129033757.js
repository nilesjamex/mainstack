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
          <h6>Share your favourite youtube playlist</h6>
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
          <h6 className="fans">Embed your tweets.</h6>
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
          <h6 className="fans">Share your favourite spotify playlist</h6>
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
          <h6 className="fans">Embed your tweets.</h6>
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
`
export default Social
