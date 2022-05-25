import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import LeftPanel from './components/home/LeftPanel';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Navbar />

            <main className='p-3'>
                {children}
                <LeftPanel />
            </main>

            <Footer />
        </Wrapper>
    )
}

export default Layout;

const Wrapper = styled.div`
    background-color: #F4F4F4;

    main {
        display: grid;
        grid-template-columns: 9fr 3fr;
        gap: 16px;
    }
    
`

