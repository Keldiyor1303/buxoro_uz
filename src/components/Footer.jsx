import React from 'react';
import styled from 'styled-components';

import logo from "../images/sektor-1.png"
import bukhara from "../images/footer.png"


const Footer = () => {
    return (
        <Wrapper>
            <footer className="text-center text-lg-start bg-white text-secondary">
                <div className="container text-center text-md-start mt-3 py-3">
                    <div className="row mt-3">
                        <div className="col-md-6 col-lg-4 col-xl-3 mb-4" style={{ textAlign: "left" }}>
                            <div className="d-flex align-items-center mb-2">
                                <img src={logo} alt="logo" style={{ height: "80px" }} className="logo mr-2" />
                                <h4 className="text-uppercase fw-bold m-0" style={{ fontWeight: "600" }}>BUXORO VILOYATI <br />
                                    HOKIMLIGI
                                </h4>
                            </div>
                            <p>
                                <strong>Buxoro viloyat hokimligi <br /> rasmiy-veb sayti </strong> <br />
                                Buxoro shahri, I.Karimov ko'chasi <br />
                                51-uy
                            </p>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-3 mb-4" style={{ textAlign: "left" }}>
                            <h4 className="text-uppercase fw-bold mb-2" style={{ fontWeight: "600" }}>
                                Useful links
                            </h4>
                            <p>
                                <a href="#!" className="text-secondary">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-secondary">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-secondary">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-secondary">Help</a>
                            </p>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-3 mb-4" style={{ textAlign: "left" }}>
                            <h4 className="text-uppercase fw-bold mb-2" style={{ fontWeight: "600" }}>
                                Products
                            </h4>
                            <p>
                                <a href="#!" className="text-secondary">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-secondary">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-secondary">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-secondary">Laravel</a>
                            </p>
                        </div>


                        <div className="col-md-6 col-lg-3 col-xl-3 mb-md-0 mb-4" style={{ textAlign: "left" }}>
                            <h4 className="text-uppercase fw-bold mb-2" style={{ fontWeight: "600" }}>
                                Contact
                            </h4>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>

                <img src={bukhara} alt="karvon" className='karvon' />
            </footer>
        </Wrapper>
    );
}

export default Footer;

const Wrapper = styled.div`

    footer {
        position: relative;
    }

    .container {
        position: relative;
        z-index: 10;
    }

    .karvon {
        width: 900px;
        height: 250px;
        object-fit: cover;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 5;
    }
    
`
