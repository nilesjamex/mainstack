import React from 'react';
import styled from 'styled-components';
import Joseph from './../Images/joseph.jpg'

const Use = () => {
    return (
        <Usestyled>
        <div className="use">
            <div className="useText">

            <h5>Conversations designed for people, not bots.</h5>
            </div>
            <div> <img src={Joseph} alt="" /> </div>
            <div> <img src={Joseph} alt="" /> </div>
        </div>
        </Usestyled>
    )
}
const Usestyled = styled.div`
.use {
    display: flex;
    width: 80%;
    height: auto;
    background: linear-gradient(180deg, #22252D 0%, #0A0C10 100%);
    border-radius: 30px;
}
`
export default Use
