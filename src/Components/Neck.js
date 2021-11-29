import React from 'react';
import styled from 'styled-components';
import Bluebig from './../Images/bluebig.jpg';
import Bluesmall from './../Images/bluesmall.png'

const Neck = () => {
    return (
        <Neckstyled>
            <img src={Bluebig} alt="" />
            <img src={Bluesmall} alt="" />
        </Neckstyled>
    )
}
const Neckstyled = styled.div`
margin: 3rem 0;
padding: 0 13rem;
display: flex;

img {
    margin: 0 0.7rem;
}
@media only screen and (max-width: 900px) {
    padding: 0;
    flex-direction: column;
}
`
export default Neck
