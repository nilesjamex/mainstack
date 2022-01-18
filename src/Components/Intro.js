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
            <div className="introflex">
            <div className="introForm__text"><p>mainstack.app/</p></div>
            <input className="introForm__Input" type="text" placeholder="yourname" id="" />
            {/* <img style={{position: "relative", right: "2rem", top: "0.1rem", padding: "2rem 0", marginRight: "1rem"}} src={Check} alt="" /> */}
            </div>
            <div className="introForm__input2">
            <button className="introForm__Create">Create your stack</button>
            </div>
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
    color: #c91c5a;
  }

  .introText {
    padding: 0 15%;
    margin-top: 3rem;
    h3 {
      font-family: "JakartaBold", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 3.25rem;
      line-height: 4rem;
      text-align: center;
      color: #020409;
    }
    p {
      font-size: 1.25rem;
       font-family: "Inter", sans-serif;
      line-height: 150%;
      text-align: center;
      letter-spacing: -0.01em;
      color: #505a73;
      margin: auto;
      margin-top: 1.5rem;
      max-width: 618px;
      width: 100%;
    }
  }

  .introForm {
    margin-top: 3rem;
    
  }
  .introflex {
     display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .introForm__text {
    height: 65px;
    background: #dde3f0;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    padding-left: 1rem;
    font-size: 1.7rem;
    display: flex;
    align-items: center;

    p {
      font-size: 1.25rem;
      display: flex;
      align-items: center;
    }
  }
  .introForm__Input {
    width: 341px;
    height: 65px;
    margin-right: 0.5rem;
    background: #dde3f0;
     border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border: none;
    border-left: none;
    outline: none;
    font-size: 1.25rem;
    padding-left: 20px;
  }
  .introForm__Create {
     width: 341px;
    height: 65px;
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 24px;
    margin: 1rem;
    background: #c91c5a;
    color: white;
    border-radius: 100px;
    margin-right: 0.5rem;
    transition: 0.5s ease-out;

    &:hover {
      width: 370px;
    height: 75px;
    margin: 1.2rem;
    opacity: 0.8;
    }
  }
  .introForm__input2 {
    display: flex;
    justify-content: center;
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
    right: 36%;
    top: 13rem;
  }
  .img5 {
    height: 30px;
    position: relative;
    left: 30%;
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
        line-height: 2.5rem;
        h3 {
            font-size: 1.8rem;
        }
        p {
            font-size: 1rem;
            padding: 0 30px;
        }
    }
    .introForm {
        margin-right: auto;
      margin-left: auto;
      padding: 0 30px;
    }
    .introForm__Input {
       margin-right: auto;
      margin-left: auto;
      padding: 0 30px;
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
 @media screen and (max-width: 769px) {
    .introText {
        padding: 0;
        line-height: 0.4rem;
        h3 {
            font-size: 1rem;
             line-height: 1.6rem;
        }
        p {
            font-size: 1.2rem;
            padding: 0 30px;
        }
    }
    .introForm__Input {
        width: 90%;
        height: 3rem;
    }
    .introForm__text {
      height: 3rem;
      width: 200px;
      p {
        align-self: center;
      }
    }
     .introForm__Create {
        width: 90%;
        height: 3rem;
        font-size: 1rem;
    }
    
  }

 @media screen and (max-width: 481px) {
    .introText {
        padding: 0;
        line-height: 0.4rem;
        h3 {
            font-size: 1rem;
             line-height: 1.4rem;
        }
        p {
            font-size: 0.7rem;
            padding: 0 30px;
        }
    }
  } 

  @media screen and (max-width: 350px) {
    
  }
`
export default Intro
