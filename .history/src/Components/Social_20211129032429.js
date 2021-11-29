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
          <h6>Collect payment from your fans</h6>
          <h5>See your most important conversations first. <span>Snooze, archive, or jump back in.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Iphone} alt="" />
          </div>
          </div>

           <div className="payInfo">
          <div className="payInfo__text">
          <h6 className="fans">Collect payment from your fans</h6>
          <h5>See your most important conversations first. <span>Snooze, archive, or jump back in.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Iphone} alt="" />
          </div>
          </div>
          </div>  

          <div className="payInfo">
          <div className="payInfo__text">
          <h6 className="fans">Collect payment from your fans</h6>
          <h5>See your most important conversations first. <span>Snooze, archive, or jump back in.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Iphone} alt="" />
          </div>
          </div>
           

          <div className="payInfo">
          <div className="payInfo__text">
          <h6 className="fans">Collect payment from your fans</h6>
          <h5>See your most important conversations first. <span>Snooze, archive, or jump back in.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Iphone} alt="" />
          </div>
          </div>
           
        </Socials>
    )
}
const Socials = styled.div`
      padding: 1rem 15rem;
 .pay {
      display: grid;
      grid-template-columns: repeat(2, 1fr );
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 1px;
      grid-row-gap: 1px;
 }
`
export default Social
