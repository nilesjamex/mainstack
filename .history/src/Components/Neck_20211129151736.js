import React from 'react';
import styled from 'styled-components';
import Bluebig from './../Images/bluebig.jpg';
import Bluesmall from './../Images/bluesmall.png';
import Twitter from './../Images/twitter.png'

const Neck = () => {
    return (
        <Neckstyled>
       <div className="flex" >
       <img className="img1" src={Twitter} alt="" />

            <img src={Bluebig} alt="" />
            <img src={Bluesmall} alt="" />
            <img className="img2" src={Twitter} alt="" />
            </div>
            </Neckstyled> 
    )
}
const Neckstyled = styled.div`
       padding: 2rem 15rem;
       .flex {
            display: flex;
            
             .img1 {
                 height: 30px;
                 align-self: center;
                 position: relative;
                 right: 5rem;
             }
             .img2 {
                 height: 30px;
                 align-self: flex-end;
                 position: relative;
                 right: 5rem;
             }
       }
`
export default Neck;