import React from 'react'
import Intro from './../Components/Intro';
import styled from 'styled-components';
import Neck from './../Components/Neck';
import Use from './../Components/Use';
import Desc from './../Components/Desc';
import Gridneck from './../Components/Gridneck';
import Impo from './../Components/Impo';
import Payment from './../Components/Payment';

const Home = () => {
    return (
        <Homee>
            <Intro />
            <Neck />
            <Use />
            <Desc />
            <Gridneck />
            <Impo />
            <Payment />
        </Homee>
    )
}
const Homee = styled.div`
`
export default Home
