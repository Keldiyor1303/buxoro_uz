import React from 'react';
import styled from 'styled-components';

import hokimImg from "../../images/hokim.png"
import image from "../../images/dolzarb.jpg"

import Zoom from 'react-reveal/Zoom';

const AsosiyYangiliklar = () => {
    return (
        <div>
            <Wrapper>
                <div className="row px-3 mt-3 pb-0">
                    <Zoom left>
                        <div className="col-xl-3 col-lg-12 ">
                            <div className="p-2 text-light rounded bg-primary title">Buxoro viloyati hokimi
                            </div>

                            <div className="col-lg-12 pt-3 px-0">
                                <div className="card card-hokim">
                                    <div className="card-img-actions d-flex justify-content-center">
                                        <img className="img-fluid img-hokim" src={hokimImg} alt="" />

                                        <div className="profile">
                                            <i className="icon-facebook2 text-light mr-2" style={{ fontSize: "24px" }}></i>
                                            <i className="icon-envelop5 text-light" style={{ fontSize: "32px" }}></i>
                                        </div>
                                    </div>

                                    <div className="card-footer bg-secondary m-0 p-0 d-flex justify-content-center align-items-center position-relative"
                                        style={{ height: "70px" }}>
                                        <h2 className="font-weight-semibold text-light text-center m-0">Zaripov Botir Komilovich</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <div className="col-xl-9 col-lg-12">
                        <Zoom top>
                            <div>
                                <div className="p-2 text-light rounded bg-primary title">Asosiy yangiliklar</div>
                            </div>
                        </Zoom>

                        <div className="boxes">
                            <Zoom bottom>
                                <div className="position-relative rounded box" style={{ height: "400px" }}>
                                    <img src={image} alt="" className="box-img" />
                                    <div className='paragraf'>
                                        <p className="text-light p-1">
                                            18 yillik umr kushandasi yoki millionlab insonlarni kishanlagan odat</p>
                                    </div>
                                </div>
                            </Zoom>

                            <Zoom right>

                                <div className='position-relative rounded box'>
                                    <img src={image} alt="" className="box-img" />
                                    <div className='paragraf'>
                                        <p className="text-light p-1">
                                            18 yillik umr kushandasi yoki millionlab insonlarni kishanlagan odat</p>
                                    </div>
                                </div>

                                <div className='position-relative rounded box'>
                                    <img src={image} alt="" className="box-img" />
                                    <div className='paragraf'>
                                        <p className="text-light p-1">
                                            18 yillik umr kushandasi yoki millionlab insonlarni kishanlagan odat</p>
                                    </div>
                                </div>
                            </Zoom>

                        </div>

                    </div>

                </div>
            </Wrapper >
        </div >
    );
}

export default AsosiyYangiliklar;

const Wrapper = styled.div`

    .box-img {
        height: 100%; 
        width: 100%; 
        object-fit: cover;
    }

    .box {
        overflow: hidden;
    }

    .paragraf {
        width: 100%; 
        height: 70px;
        position: absolute; 
        bottom: 0; 
        margin: 0; 
        background-color: rgba(69, 116, 138, 0.6)
    }

    .title, p {
        font-size: 18px;
    }

    .img-hokim {
        height: 330px; 
        width: 100%; 
        max-width: 450px; 
        object-fit: cover;
    }

    .profile {
        width: 100%; 
        position: absolute; 
        margin: 0; 
        display: flex; 
        justify-content:center; 
        align-items: center; 
        background-color: rgba(69, 116, 138, 0.6)
    }

    
.boxes {
    margin-top: 20px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 196px;
    gap: 8px 16px;
}

@media (max-width:768px) {
    .boxes {
        grid-template-columns: 1fr;
    }

    .buxoro-img,
    .logo {
        height: 70px;
    }
}

.boxes div:nth-child(1) {
    grid-row: 1/3;
}

    
.profile {
    height: 50px;
    bottom: -50px;
    transition: .5s;
}

.card-hokim:hover .profile {
    bottom: 0;
}

.profile i {
    transition: .3s;
}

.profile i:hover {
    color: #f58646 !important;
    transform: scale(1.1);
}

.box-img {
    transition: .5s;
    cursor: pointer;
}

.boxes>div:hover .box-img {
    transform: scale(1.1);
}
`
