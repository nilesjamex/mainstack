import React from 'react';
import styled from 'styled-components';
import Twitter from './../Images/twitter.png'

const Intro = () => {
    return (
        <Introo className="intro">
        <img className="img3" src={Twitter} alt="" />
        <img className="img4" src={Twitter} alt="" />
        <img className="img5" src={Twitter} alt="" />
        <img className="img6" src={Twitter} alt="" />
            <div className="introText">
            <h3 className="introText__head">
            Create a one-page site to showcase your incredible works and <span>get more clients.</span>
            </h3>
            <p className="introText__sub">
            Mainstack connects your audience to all of your content, 
            productivity with just one click to boost conversion rate.
            </p>
            <div className="introForm">
            <input className="introForm__Input" type="text" placeholder="mainstack,app/yourname" id="" />
            <button className="introForm__Create">Create your stack</button>
            </div>
            </div>
            <div className="imgFlex">
            <img className="img2" src={Twitter} alt="" />
            <img className="img1" src={Twitter} alt="" />
            <img className="img2" src={Twitter} alt="" />
            <img className="img1" src={Twitter} alt="" />
            <img className="img2" src={Twitter} alt="" />
            </div>
        </Introo>
    )
}

const Introo = styled.div`
        width: 100%;
        
span {
    color : #C91C5A;
}
.introText {
    padding: 0 31rem;
    margin-top: 3rem;
    h3 {
        font-family: Plus Jakarta Display;
        font-style: normal;
        font-weight: bold;
        font-size: 3.25rem;
        line-height: 4rem;
        text-align: center;
        letter-spacing: -0.03em;
        color: #020409;
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
        margin: 0 6rem;
        margin-top: 1.5rem;
    }
}
.introForm {
    margin-top: 2rem;
}
.introForm__Input {
    width: 14rem;
    height: 3rem;
    background: #DDE3F0;
    border-radius: 100px;
    margin-right: 0.5rem;
    font-size: 18px;
}
.introForm__Create {
    width: 11rem;
    height: 3rem;
    background: #C91C5A;
    border-radius: 100px;
    margin-right: 0.5rem;
    outline: none;
}
.imgFlex {
    display: flex;
    justify-content: space-around;
    height: 12rem;

    .img1 {
                 height: 30px;
                 align-self: center;
                 position: relative;
                 bottom: 3rem;
                 right: 2rem;
             }
             .img2 {
                 height: 30px;
                 align-self: flex-end;
                 position: relative;
                 left: 2rem;
                 bottom: 1.4rem;
             }
}
.img3 {
                 height: 30px;
                 align-self: flex-end;
                 position: relative;
                 right: 44%;
                 top: 1rem;
             }
             .img4 {
                 height: 30px;
                 align-self: flex-start;
                 position: relative;
                 right: 20%;
                 top: 17rem;
             }
             .img5 {
                 height: 30px;
                 position: relative;
                 left: 25%;
                 top: 7rem;
             }
@media only screen and (max-width: 900px) {
    .introText {
        padding: 0;
        h3 {
            font-size: 1.2rem;
        }
    }
}
`
export default Intro
