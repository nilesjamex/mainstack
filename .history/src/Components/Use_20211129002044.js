import React from 'react';
import styled from 'styled-components';
import Joseph from './../Images/joseph.jpg'

const Use = () => {
    return (
        <Usestyled>
        <div className="use">
            <div className="useText">
            <div>
            <h5>Conversations designed for people, not bots.</h5>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
            amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
            veniam consequat sunt nostrud amet.Amet minim</p>
            </div>
            <div>
            <button>Get started</button>
            </div>
            </div>
            <div> <img src={Joseph} alt="" /> </div>
            <div> <img src={Joseph} alt="" /> </div>
        </div>
        </Usestyled>
    )
}
const Usestyled = styled.div`
     padding: 0 10rem;
.use {
    display: flex;
    justify-content: space-around;
    height: auto;
    background: linear-gradient(180deg, #22252D 0%, #0A0C10 100%);
    border-radius: 30px;
    padding: 2rem 0;
}
.useText {
    display: flex;
    flex-direction: column;
    align-content: space-around;
}
`
export default Use
