import React from 'react';
import styled from 'styled-components';

import aloqa from "../../images/aloqa.png"
import DavlatHokimiyati from './DavlatHokimiyati';

const LeftPanel = () => {
    return (
        <Wrapper>
            <DavlatHokimiyati />
            <div className="ish-tartibi mt-2">
                <div>
                    <div className="p-2 text-light bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Dasturiy ta'minot</div>

                    <div className="list-group dasturiy mt-2">
                        <a href="/" className="list-group-item list-group-item-action">E-imzo</a>
                        <a href="/" className="list-group-item list-group-item-action">E-xat</a>
                        <a href="/" className="list-group-item list-group-item-action">E-kalit</a>
                        <a href="/" className="list-group-item list-group-item-action">ONE ID</a>
                        <a href="/" className="list-group-item list-group-item-action">Umid Qanoti mobil ilovasi</a>
                        <a href='/' className="list-group-item list-group-item-action">ONE ID</a>
                        <a href='/' className="list-group-item list-group-item-action">Umid Qanoti mobil ilovasi fsdfsdf fsdfsdfsdfsd fs df sd fsdfsfsdfsdfsd fsdfs</a>
                        <a href='/' className="list-group-item list-group-item-action">ONE ID</a>
                        <a href='/' className="list-group-item list-group-item-action">Umid Qanoti mobil ilovasi</a>
                    </div>
                </div>

                <div>
                    <div className="p-2 text-light bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Ish tartibi</div>

                    <div className="list-group">
                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                            <span>Ish vaqti</span>
                            <span>9:00 - 18:00</span>
                        </li>
                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                            <span>Tushlik vaqti</span>
                            <span>13:00 - 14:00</span>
                        </li>
                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                            <span>Dam olish kunlari</span>
                            <span>shanba va yakshanba</span>
                        </li>
                    </div>
                </div>

                <div>
                    <div className="p-2 text-light bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Online murojaat</div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={aloqa} alt="aloqa" style={{ width: "80%", height: "112px" }} />
                    </div>
                </div>

                <div>
                    <div className="p-2 text-light bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Ishonch telefonlari</div>

                    <div className="d-flex align-items-center gap-2 px-3 pt-3">
                        <i className="icon-phone mr-3" style={{ fontSize: "54px" }}></i>
                        <div className="d-flex flex-column">
                            <a href="tel:+998941234517" style={{ fontSize: "18px" }}>(94) 123-45-17</a>
                            <button type="button" className="btn text-light bg-secondary"> Reglament
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="p-2 text-light bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Viloyat hokimligining
                        umumiy bo'limi</div>

                    <div className="d-flex align-items-center gap-2 px-3 pt-3">
                        <i className="icon-phone mr-3" style={{ fontSize: "54px" }}></i>
                        <div className="d-flex flex-column">
                            <a href="tel:+18475555555" style={{ fontSize: "18px" }}>(94) 123-45-17</a>
                            <button type="button" className="btn text-light bg-secondary"> Reglament
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="p-2 text-light bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Sayt ishlashini baholang</div>

                    <div className="px-3">
                        <div className="form-check mt-3" style={{ fontSize: "18px" }}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                style={{ width: "20px", height: "20px" }} />
                            <label className="form-check-label" for="flexRadioDefault1" >
                                A'lo
                            </label>
                        </div>
                        <div className="form-check mt-3" style={{ fontSize: "18px" }}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                style={{ width: "20px", height: "20px" }} />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Yaxshi
                            </label>
                        </div>
                        <div className="form-check mt-3" style={{ fontSize: "18px" }}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                style={{ width: "20px", height: "20px" }} />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Qoniqarli
                            </label>
                        </div>
                        <div className="form-check mt-3" style={{ fontSize: "18px" }}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                style={{ width: "20px", height: "20px" }} />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Qoniqarsiz
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-secondary m-3" style={{ width: "calc(100% - 36px)", boxSizing: "border-box" }}>Ovoz
                        berish</button>
                </div>


            </div>
        </Wrapper>
    );
}

export default LeftPanel;

const Wrapper = styled.div`

    .list-group span {
        width: 50%;
    }

    
    .ish-tartibi {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 160px;
        gap: 8px;

        &>div{
            background-color: white;
            border: none;
        }
    }

    .ish-tartibi div:nth-child(1),
    .ish-tartibi div:nth-child(6) {
        grid-row: span 2;
    }

    .dasturiy {
        font-size: 18px; 
        overflow-y: auto; 
        overflow-x: hidden; 
        height: calc(320px - 55px); 
        border: none;

        a:hover {
            cursor: pointer;
            color: #2196F3;
        }
    }

    .ish-tartibi div ul li {
        border: none;
    }
    
`
