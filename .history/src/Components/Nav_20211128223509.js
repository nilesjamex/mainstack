import React from 'react';
import styled from "styled-components"

const Nav = () => {
    return (
        <Bar>
        <nav className="nav">
        <div className="navLogoText">
        <h3>MAINSTACK</h3>
        </div>
        <div className="navOptions">
        <h4>Pricing</h4>
        <h4>Blog</h4>
        <h4>About Us</h4>
        <h4>Contact Us</h4>
        </div>
        <div className="navButtons">
        <button className="navButtons__signIn">Sign In</button>
        <button className="navButtons__create">Create New Account</button>
        </div>
        </nav>
           </Bar>
    )
}

const Bar = styled.div`
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
}
.navLogoText {
    width: 20%;
}
.navOptions {
    display: flex;
    width: 40%;

    h4 {
        margin: 0 0.4rem;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
}
.navButtons__signIn {
    width: 9rem;
    background-color: transparent;
    border-radius: 100px;
    margin: 0 0.4rem;
    height: 2rem;
}
`

export default Nav


