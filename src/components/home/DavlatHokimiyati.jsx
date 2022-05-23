import React from 'react';
import styled from 'styled-components';

import image from "../../images/harakatlar strategiyasi.png"

const DavlatHokimiyati = () => {
    const data = [
        {
            id: 1,
            image: image,
            name: "Harakatlar strategiyasi"
        },
        {
            id: 2,
            image: image,
            name: "Harakatlar strategiyasi 2"
        },
        {
            id: 3,
            image: image,
            name: "Harakatlar strategiyasi 3"
        },
        {
            id: 4,
            image: image,
            name: "Harakatlar strategiyasi 4"
        },
        {
            id: 5,
            image: image,
            name: "Harakatlar strategiyasi 5"
        },
    ]

    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary" style={{ fontSize: "18px" }}>Davlat hokimiyati</div>

            <div className="mt-2 boxes">

                {
                    data.map(({ image, name, id }) => {
                        return (
                            <div key={id} className="d-flex align-items-center bg-secondary" style={{ marginBottom: "8px" }}>
                                <div className="bg-light box">
                                    <img src={image} alt="" classNameName='image' />
                                </div>

                                <span className="text-light px-2">{name}</span>
                            </div>
                        )
                    })

                }




            </div>
        </Wrapper>
    );
}

export default DavlatHokimiyati;

const Wrapper = styled.div`

    .boxes {
        overflow-y: auto; 
        overflow-x: hidden; 
        height: 300px; 
        background-color: white;
    }

    .box {
        width: 100px; 
        height: 80px; 
        display: flex; 
        justify-content: center;
    }

    .image {
        width: 80px; 
        height: 80px; 
        object-fit: cover;
    }

    span {
        text-transform: uppercase; 
        font-size: 16px;
    }
    
`