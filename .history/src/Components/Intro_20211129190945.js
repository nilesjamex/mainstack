import React from 'react';
import styled from 'styled-components';
import Link from './../Images/link.png';
import Apple from './../Images/apple.png';
import Calendly from './../Images/calendly.png';
import Den from './../Images/den.png';
import Youtube from './../Images/youtube.png';
import Image from './../Images/image.png';
import Instagram from './../Images/instagram.png';
import Mailchimp from './../Images/mailchimp.png';
import Paypal from './../Images/paypal.png'
import Check from './../Images/check.png'
const Intro = () => {
    return (
        <Introo className="intro">
        <img className="img3" src={Link} alt="" />
        <img className="img4" src={Calendly} alt="" />
        <img className="img5" src={Apple} alt="" />
        <img className="img6" src={Den} alt="" />
            <div className="introText">
            <h3 className="introText__head">
            Create a one-page site to showcase your incredible works and <span>get more clients.</span>
            </h3>
            <p className="introText__sub">
            Mainstack connects your audience to all of your content, 
            productivity with just one click to boost conversion rate.
            </p>
            <div className="introForm">
            <input className="introForm__Input" type="text" value="mainstack.app/" placeholder="yourname" id="" />
            <img style={{position: "relative", right: "2rem", top: "0.1rem"}} src={Check} alt="" />
            <button className="introForm__Create">Create your stack</button>
            </div>
            </div>
            <div className="imgFlex">
            <img className="img2" src={Youtube} alt="" />
            <img className="img1" src={Image} alt="" />
            <img className="img2" src={Instagram} alt="" />
            <img className="img1" src={Mailchimp} alt="" />
            <img className="img2" src={Paypal} alt="" />
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
       font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 3.25rem;
        line-height: 4rem;
        text-align: center;
        letter-spacing: -0.03em;
        color: #020409;
    }
    p {
        font-family: 'Inter', sans-serif;
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
    width: 16rem;
    height: 3rem;
    background: #DDE3F0;
    border-radius: 100px;
    margin-right: 0.5rem;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
}
.introForm__Create {
    width: 11rem;
    height: 3rem;
    background: #C91C5A;
    border-radius: 100px;
    margin-right: 0.5rem;
    outline: none;
    font-family: 'Inter', sans-serif;
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
                 right: 40%;
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
             .img6 {
                 height: 30px;
                 position: relative;
                 left: 40%;
                 top: 19rem;
             }
@media only screen and (max-width: 900px) {
    .introText {
        padding: 0;
        h3 {
            font-size: 1.8rem;
        }
        p {
            font-size: 1rem;
        }
    }
    .introForm__Create {
    
    margin: 0.5rem;
}
    .imgFlex {
        display: none;
    }
    .img3 {
                display: none;
             }
             .img4 {
                display: none;
             }
             .img5 {
                display: none;
             }
             .img6 {
                display: none;
             }
}
`
export default Intro