import React from 'react';
import styled from 'styled-components';

const Intro = () => {
    return (
        <Introo className="intro">
            <div className="introText">
            <h3 className="introText__head">
            Create a one-page site to showcase your incredible works and get more clients.
            </h3>
            <p className="introText__sub">
            Mainstack connects your audience to all of your content, 
            productivity with just one click to boost conversion rate.
            </p>
            </div>
        </Introo>
    )
}

const Introo = styled.div`
        width: 100%;
        text-align: center;
.introText {
    
    h3 {
        font-family: Plus Jakarta Display;
        font-style: normal;
        font-weight: bold;
        font-size: 3.25rem;
        line-height: 4rem;
        text-align: center;
        letter-spacing: -0.03em;
        color: #020409;
        margin: 0 40rem;
    }
    p {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        text-align: center;
        letter-spacing: -0.01em;
        color: #505A73;
        margin: 0 30rem;
    }
}
`
export default Intro
