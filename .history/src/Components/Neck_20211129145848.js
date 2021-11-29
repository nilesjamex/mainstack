import React from 'react';
import styled from 'styled-components';
import Bluebig from './../Images/bluebig.jpg';
import Bluesmall from './../Images/bluesmall.png'

const Neck = () => {
    return (
        <Neckstyled>
        <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42.5455" height="42"/>
</svg>

            <img src={Bluebig} alt="" />
            <img src={Bluesmall} alt="" />
            </Neckstyled> 
    )
}
const Neckstyled = styled.div`
       padding: 2rem 16rem;
       display: flex;
`
export default Neck;