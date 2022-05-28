import React from 'react';
import styled from 'styled-components';
import "react-image-gallery/styles/css/image-gallery.css";


import f1 from "../../images/f1.jpg"
import f2 from "../../images/f2.jpg"
import f3 from "../../images/f3.jpg"
import f4 from "../../images/f4.jpg"

const Fotogalereya = () => {
    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px", textTransform: "uppercase" }}>Fotogalereya</div>
            <div class="grid">
                <div class="images" style={{ position: "relative" }}>
                    <img class="img-fluid" src={f1} alt="" />

                    <div className='overlay' style={{ width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.4)", position: 'absolute', top: "0", left: "0" }}>
                        <div className="info">
                            <h5>13.03.2003</h5>
                            <h4>KO'HNA VA BOQIY BUXORO</h4>
                        </div>
                        <i className='icon-images3'></i>
                    </div>
                </div>

                <div class="images" style={{ position: "relative" }}>
                    <img class="img-fluid" src={f2} alt="" />

                    <div className='overlay' style={{ width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.4)", position: 'absolute', top: "0", left: "0" }}>
                        <div className="info">
                            <h5>13.03.2003</h5>
                            <h4>MILLIY TAOMLAR</h4>
                        </div>
                        <i className='icon-images3'></i>
                    </div>
                </div>

                <div class="images" style={{ position: "relative" }}>
                    <img class="img-fluid" src={f3} alt="" />

                    <div className='overlay' style={{ width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.4)", position: 'absolute', top: "0", left: "0" }}>
                        <div className="info">
                            <h5>13.03.2003</h5>
                            <h4>MADANIYAT VA SAN'AT</h4>
                        </div>
                        <i className='icon-images3'></i>
                    </div>
                </div>

                <div class="images" style={{ position: "relative" }}>
                    <img class="img-fluid" src={f4} alt="" />

                    <div className='overlay' style={{ width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.4)", position: 'absolute', top: "0", left: "0" }}>
                        <div className="info">
                            <h5>13.03.2003</h5>
                            <h4>G'ALLAKORLAR SHARAFLANGAN TADBIRDAN FOTOJAMLANMA</h4>
                        </div>
                        <i className='icon-images3'></i>
                    </div>
                </div>
            </div>


        </Wrapper>
    );
}

export default Fotogalereya;

const Wrapper = styled.div`

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 400px;
        gap: 16px;
    }

    
    img {
        width: 100% !important;
        height: 100%;
        object-fit: cover;
        margin-bottom: 16px;
        transition: .5s;
    }

    .info {
        position: absolute;
        bottom: 8px;
        left: 16px;
        color: white;

        h4, h5 {
            margin: 0;
            padding: 0;
        }
    }

    .images {
        overflow: hidden;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 5px;

        i {
            font-size: 48px;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .overlay:hover{
        background-color: transparent !important;
        cursor: pointer;
    }

    .images:hover img {
        transform: scale(1.2);
    } 
    
`