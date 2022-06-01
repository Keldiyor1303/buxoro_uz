import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Sidebar = () => {
    const data = [
        {
            name: "VILOYAT HAQIDA",
            url: "/admin/viloyat_haqida"
        },
        {
            name: "HOKIMLIK TO`G`RISIDA",
            url: "/admin/hokimlik_togrisida"
        },
        {
            name: "HOKIMLIK FAOLIYATI",
            url: "/admin/hokimlik_faoliyati"
        },
        {
            name: "HUJJATLAR",
            url: "/admin/hujjatlar"
        },
        {
            name: "MEDIATEKA",
            url: "/admin/mediateka"
        },
        {
            name: "AXBOROT XIZMATI",
            url: "/admin/axborot_xizmati"
        },
        {
            name: "MAHALLIYLASHTIRISH",
            url: "/admin/mahalliylashtirish"
        },
        {
            name: "MUROJAAT",
            url: "/admin/murojaat"
        },
        {
            name: "YOSHLAR SEKTORI",
            url: "/admin/yoshlar_sektori"
        },
        {
            name: "KORRUPSIYAGA QARSHI KURASHISH",
            url: "/admin/korrupsiyaga_qarshi_kurashish"
        },
    ]
    return (
        <Wrapper>
            <ul>
                {
                    data.map((item, index) => {
                        return (
                            <li>
                                <NavLink key={index} style={{ color: "#808080", marginTop: "10px" }} to={item.url}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }


            </ul>

        </Wrapper >
    );
}

export default Sidebar;

const Wrapper = styled.div`
    height: calc(100vh - 100px);
    width: 250px !important;
    min-width: 250px !important;
    background-color: #FBFAFF;
    
    
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        font-size: 16px;
    }

    li a:hover {
        color: #000 !important;
    }

    a.active {
        color: #2196F3 !important;
        font-weight: 500;
    }
`
