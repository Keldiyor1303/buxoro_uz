import React from 'react';
import styled from 'styled-components';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import image from "../../images/yunalish.jpg"

const Yunalishlar = () => {
    const data = [
        {
            id: 1,
            image: image,
            name: "Iqtisod"
        },
        {
            id: 2,
            image: image,
            name: "Iqtisod2"
        },
        {
            id: 3,
            image: image,
            name: "Iqtisod3"
        },
        {
            id: 4,
            image: image,
            name: "Iqtisod4"
        },
        {
            id: 5,
            image: image,
            name: "Iqtisod5"
        },
        {
            id: 6,
            image: image,
            name: "Iqtisod6"
        },
        {
            id: 7,
            image: image,
            name: "Iqtisod7"
        },
        {
            id: 8,
            image: image,
            name: "Iqtisod8"
        }
    ]


    const options = {
        margin: 20,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
            },
            1200: {
                items: 4,
            },
        },
    }


    return (
        <Wrapper>
            <div className="px-3">
                <div className="p-2 text-light bg-primary" style={{ fontSize: "18px" }}>Yo'nalishlar</div>

                <div className="">
                    <OwlCarousel className='owl-theme' {...options}>
                        {
                            data.map(({ image, name }) => {
                                return (
                                    <div className="pt-3" style={{ width: "100%" }}>
                                        <div className='position-relative rounded box'>
                                            <img src={image} alt="" className='image' />
                                            <div className='yunalish-div'>
                                                <p className="text-light p-0 m-0 yunalish-name">
                                                    {name} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </OwlCarousel>


                </div>
            </div>
        </Wrapper>
    );
}

export default Yunalishlar;

const Wrapper = styled.div`

    .box, .image {
        height: 250px; 
        overflow: hidden;
        transition: .5s;
        cursor: pointer;
    }

    .box:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        transform: scale(1.1);
    }

    .yunalish-div {
        width: 100%; 
        height: 70px; 
        position: absolute; 
        bottom: 0; 
        margin: 0; 
        background-color: rgba(69, 116, 138, 0.6); 
        display: flex; 
        justify-content: center; 
        align-items: center;
    }

    .yunalish-name {
        max-height: 70px; 
        font-size: 24px; 
        font-weight: 600; 
        text-align: center;
        text-transform: uppercase;
    }
`
