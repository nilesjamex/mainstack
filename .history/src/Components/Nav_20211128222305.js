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
        <button>Sign In</button>
        <button>Create New Account</button>
        </div>
        </nav>
           </Bar>
    )
}

const Bar = styled.div`
.nav {
    display: flex;
    justify-content: space-between;
}
.navLogoText {
    width: 20%;
}
.navOptions {
    display: flex;
    width: 40%;

    h4 {
        margin: 0 0.4rem;
    }
}

`

export default Nav


