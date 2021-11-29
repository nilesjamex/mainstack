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

          <div className="payInfo">
          <div className="payInfo__text">
          <h6 className="fans">Collect payment from your fans</h6>
          <h5>See your most important conversations first. <span>Snooze, archive, or jump back in.</span> </h5>
          </div>
          <div className="PayImage">
          <img src={Seminar} alt="" />
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
           
        </Socials>
    )
}
const Socials = styled.div`

`
export default Social
