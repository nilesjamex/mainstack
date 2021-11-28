import React from 'react';
import styled from "styled-components"

const Nav = () => {
    return (
        <Bar>
        <nav className="nav">
        <div className="nav__logoText">
        <h3>MAINSTACK</h3>
        </div>
        <div className="nav__options">
        <h4>Pricing</h4>
        <h4>Blog</h4>
        <h4>About Us</h4>
        <h4>Contact Us</h4>
        </div>
        <div>
        <button>Sign In</button>
        <button>Create New Account</button>
        </div>
        </nav>
           </Bar>
    )
}

const Bar = styled.div`

`

export default Nav


