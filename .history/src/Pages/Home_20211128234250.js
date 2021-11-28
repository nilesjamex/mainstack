import React from 'react'
import Intro from './../Components/Intro';
import styled from 'styled-components';
import Neck from './../Components/Neck';

const Home = () => {
    return (
        <Homee>
            <Intro />
            <Neck />
        </Homee>
    )
}
const Homee = styled.div`
text-align: center;
`
export default Home
