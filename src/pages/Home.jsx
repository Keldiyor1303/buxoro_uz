import React from 'react';
import styled from 'styled-components';
import Aloqa from '../components/home/Aloqa';
import AsosiyYangiliklar from '../components/home/AsosiyYangiliklar';
import DavlatHokimiyati from '../components/home/DavlatHokimiyati';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sektorlar from '../components/home/Sektorlar';
import Tuzilishi from '../components/home/Tuzilishi';
import Yangiliklar from '../components/home/Yangiliklar';
import Yunalishlar from '../components/home/Yunalishlar';
import Homiylar from '../components/home/Homiylar';
import { Fade } from 'react-reveal';

const Home = () => {
    return (
        <Wrapper>
            <Navbar />
            <AsosiyYangiliklar />
            <Yangiliklar />
            <Yunalishlar />

            <div class="davlat-sektor px-3 mt-1">
                <Fade bottom cascade>
                    <DavlatHokimiyati />
                    <Sektorlar />
                </Fade>
            </div>


            <Tuzilishi />
            <Aloqa />
            <Homiylar />

            <Footer />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    background-color: #F4F4F4;
    overflow: hidden;

    ::-webkit-scrollbar-track {
        width: 0;
    }

    .davlat-sektor {
        display: grid;
        grid-template-columns: 3fr 9fr;
        gap: 8px;

        &>div {
            /* background-color: white; */
            min-height: 360px;
        }
    }

    @media(max-width: 1200px) {
        .davlat-sektor {
            grid-template-columns: 4fr 8fr;

            &>div {
            /* background-color: white; */
            min-height: 670px;
        }
        }
    }

    @media(max-width: 768px) {
        .davlat-sektor {
            grid-template-columns: 1fr;
            grid-template-rows: 360px 670px;
        }
    }
`
