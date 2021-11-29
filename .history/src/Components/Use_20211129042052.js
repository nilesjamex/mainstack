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
            <p className="useText__sub">Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
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
     padding: 0 13rem;
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
@media only screen and (max-width: 900px) {
    padding: 0;
    .use {
        flex-direction: column;
        padding: 0;
    }
    img {
        margin: 0.7rem 0rem;
    }
    .useText {
        padding: 0;
        margin: 0;
    }
}
`
export default Use
