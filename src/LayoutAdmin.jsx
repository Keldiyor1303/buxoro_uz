import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';

import logo from "./images/sektor-1.png"


const LayoutAdmin = ({ children }) => {
    return (
        <Wrapper>
            <header>
                <div className="mb-4 mb-md-5 text-center d-flex justify-content-center align-items-center logo">
                    <img src={logo} alt="" height="80px" />
                    <h2 className="logo-txt m-0 p-0" style={{ textTransform: "uppercase" }}>Buxoro viloyat <br /> hokimligi</h2>
                </div>
            </header>
            <main>
                <Sidebar />
                <div className="children">
                    {children}
                </div>
            </main>
        </Wrapper>
    )
}

export default LayoutAdmin;

const Wrapper = styled.div`
    background-color: #F4F4F4;

    header {
        width: 100%;
        height: 100px;
        background-color: #FBFAFF;
    }
    
    .logo {
        width: 250px;
        height: 100px;
        border-right: 1px solid #F4F4F4;
    }

    main {
        display: flex;
        width: 100%;
        height: calc(100vh - 100px);
        overflow: hidden;
    }

    .children {
        overflow-y: auto;
    }
`

