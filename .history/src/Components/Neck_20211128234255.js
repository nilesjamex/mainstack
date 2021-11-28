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
display: flex;
`
export default Neck
