import React from 'react'
import Intro from './../Components/Intro';
import styled from 'styled-components';
import Neck from './../Components/Neck';
import Use from './../Components/Use';
import Desc from './../Components/Desc';

const Home = () => {
    return (
        <Homee>
            <Intro />
            <Neck />
            <Use />
            <Desc />
        </Homee>
    )
}
const Homee = styled.div`
`
export default Home
