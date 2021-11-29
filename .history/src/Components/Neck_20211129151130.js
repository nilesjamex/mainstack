import React from 'react';
import styled from 'styled-components';
import Bluebig from './../Images/bluebig.jpg';
import Bluesmall from './../Images/bluesmall.png';
import Twitter from './../Images/twitter.png'

const Neck = () => {
    return (
        <Neckstyled>
       <div className="flex" >
       <img style={{height: "30px"}} src={Twitter} alt="" />

            <img src={Bluebig} alt="" />
            <img src={Bluesmall} alt="" />
            </div>
            <img src={Twitter} alt="" />
            </Neckstyled> 
    )
}
const Neckstyled = styled.div`
       padding: 2rem 15rem;
       .flex {
            display: flex;
       }
`
export default Neck;