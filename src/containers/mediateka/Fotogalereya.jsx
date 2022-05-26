import React from 'react';
import styled from 'styled-components';
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';

import hokimiyat from "../../images/hokimiyat.jpg"

const Fotogalereya = () => {
    const images = [
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
    ];




    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Fotogalereya</div>
            <div className='boxes'>
                <ImageGallery items={images} autoPlay={true} showPlayButton={false} showBullets={true} showNav={true} className="p-0 m-0" />
                <ImageGallery items={images} autoPlay={true} showPlayButton={false} showBullets={true} showNav={true} className="p-0 m-0" />
                <ImageGallery items={images} autoPlay={true} showPlayButton={false} showBullets={true} showNav={true} className="p-0 m-0" />
                <ImageGallery items={images} autoPlay={true} showPlayButton={false} showBullets={true} showNav={true} className="p-0 m-0" />
            </div>


        </Wrapper>
    );
}

export default Fotogalereya;

const Wrapper = styled.div`
    .boxes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 400px;
        gap: 20px;
    }
    
`