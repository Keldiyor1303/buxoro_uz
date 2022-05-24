import React from 'react';
import styled from 'styled-components';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image from "../../images/ziyonet.png"
import x1 from "../../images/x1.svg"
import x2 from "../../images/x2.svg"
import x3 from "../../images/x3.jpg"

const Homiylar = () => {
    const data = [
        {
            id: 1,
            image: image,
            name: "Ziyonet ta`lim portali"
        },
        {
            id: 2,
            image: x1,
            name: "Yagona interaktiv davlat xizmatlari portaliga"
        },
        {
            id: 1,
            image: x2,
            name: "Yagona interaktiv davlat xizmatlari portaliga"
        },
        {
            id: 1,
            image: x3,
            name: "Mustaqil O`zbekiston solnomasi"
        },
        {
            id: 1,
            image: image,
            name: "Ziyonet ta`lim portali"
        },
        {
            id: 1,
            image: image,
            name: "Ziyonet ta`lim portali"
        },
        {
            id: 1,
            image: image,
            name: "Ziyonet ta`lim portali"
        },
    ]

    const options = {
        margin: 20,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3,
            },
            1200: {
                items: 6,
            },
        },
    }
    return (
        <Wrapper className='px-3'>
            <OwlCarousel className='owl-theme' {...options}>
                {
                    data.map(({ id, image, name }) => {
                        return (
                            <div key={id} className="box text-light">
                                <img src={image} alt={name} className="image" />
                                <div className='name'>
                                    <span>{name}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </Wrapper>
    );
}

export default Homiylar;

const Wrapper = styled.div`
    .box {
        width: 200px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        :hover .name{
            transform: translateY(0);
        background-color: rgba(69, 116, 138, 0.6);
        }
    }    

    .image {
        max-width: 200px;
        max-height: 150px;
        object-fit: cover;
    }

    .name {
        width: 200px;
        height: 150px;
        padding: 8px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        transform: translateY(100%);
        transition: 0.5s;

        span {
            font-weight: 500;
        }
    }
`
