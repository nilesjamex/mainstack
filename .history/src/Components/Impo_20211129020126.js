import React from 'react';
import  styled from 'styled-components';
import Phone from './../Images/phone.png'

const Impo = () => {
    return (
        <Impostyled>
            <div className="use">
            <div className="useText">
            <div>
            <p>Set up all your media links</p>
            </div>
            <div>
            <h5>See your most important conversations first.</h5>
            <p className="useText__sub">See your most important conversations first.
             Snooze, archive, or jump back in.
             Activity Feed always keeps your conversations within reach, so you can quickly </p>
            </div>
            <div>
            <button>Get started</button>
            </div>
            </div>
            <div> <img src={Phone} alt="" /> </div>
        </div>
        </Impostyled>
    )
}
const Impostyled = styled.div`
 padding: 3rem 13rem;
.use {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    background: linear-gradient(180deg, #22252D 0%, #0A0C10 100%);
    border-radius: 30px;
    padding: 2rem 0;

    img {
        margin: 0 5rem;
    }
}
.useText {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3rem 0;
    margin-left: 3rem;
    text-align: left;

    h5 {
        font-family: Plus Jakarta Display;
        font-style: normal;
        font-weight: bold;
        font-size: 3rem;
        line-height: 52px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
    }
    p {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 2rem;
        letter-spacing: -0.01em;
        color: #797D87;
        margin-top: 5rem;

    }
    button {
        width: 8rem;
        height: 3rem;
        background: #F7F9FC;
        border-radius: 100px;
    }
}
`
export default Impo
