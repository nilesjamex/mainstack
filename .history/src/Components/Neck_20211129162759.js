import React from 'react';
import styled from 'styled-components';
import Bluebig from './../Images/bluebig.jpg';
import Bluesmall from './../Images/bluesmall.png';
import Spotify from './../Images/spotify.png';
import Tiktok from './../Images/tiktok.png'

const Neck = () => {
    return (
        <Neckstyled>
       <div className="flex" >
       <img className="img1" src={Spotify} alt="" />

            <img src={Bluebig} alt="" />
            <img src={Bluesmall} alt="" />
            <img className="img2" src={Tiktok} alt="" />
            </div>
            </Neckstyled> 
    )
}
const Neckstyled = styled.div`
       padding: 2rem 12rem;
       .flex {
            display: flex;
            
             .img1 {
                 height: 30px;
                 align-self: center;
                 position: relative;
                 bottom: 3rem;
                 right: 2rem;
             }
             .img2 {
                 height: 30px;
                 align-self: flex-end;
                 position: relative;
                 left: 2rem;
                 bottom: 1.4rem;
             }
       }

@media screen and (max-width: 900px) {
    padding: 1rem 0;
    .flex {
        flex-direction: column;
    }
    .img2 {
                display: none;
             }
     .img2 {
                display: none;
             }
}
`
export default Neck;