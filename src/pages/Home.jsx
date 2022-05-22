import React from 'react';
import styled from 'styled-components';
import AsosiyYangiliklar from '../components/AsosiyYangiliklar';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <Wrapper>
            <Navbar />
            <AsosiyYangiliklar />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    background-color: #F4F4F4;
    
`
