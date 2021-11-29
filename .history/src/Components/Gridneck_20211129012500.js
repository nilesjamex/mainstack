import React from 'react';
import styled from 'styled-components';
import Man from './../Images/man.png';
import Woman from './../Images/man.png';
import Bigb from './../Images/bigb.png';

const Gridneck = () => {
    return (
        <Grid>
         <div className="use">
            <div className="gridText">
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
            <div className="gridImage">
            <div> <img src={Woman} alt="" /> </div>
            <div> <img src={Man} alt="" /> </div>
            <div> <img src={Bigb} alt="" /> </div>
            </div>
        </div>
            
        </Grid>
    )
}
const Grid = styled.div`
     padding: 0 13rem;
.use {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    background:  linear-gradient(180deg, #C91C5A 0%, #920034 100%);;
    border-radius: 30px;
    padding: 2rem 0;

    img {
        margin: 0 5rem;
    }
}
.gridText {
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
.gridImage {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 3px;
    grid-row-gap: 3px;
}
`
export default Gridneck
