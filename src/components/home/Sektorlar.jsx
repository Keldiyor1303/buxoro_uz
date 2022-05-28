import React from 'react';
import styled from 'styled-components';

import image from "../../images/sektor-1.png"

const Sektorlar = () => {

    const data = [
        {
            id: 1,
            image: image,
            name: "1-Sektor"
        },
        {
            id: 2,
            image: image,
            name: "2-Sektor"
        },
        {
            id: 3,
            image: image,
            name: "3-Sektor"
        },
        {
            id: 4,
            image: image,
            name: "4-Sektor"
        },
    ]

    return (
        <Wrapper>
            <div class="p-2 text-light rounded bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Sektorlar</div>

            <div class="sectorlar mt-2">
                {
                    data.map(({ image, name, id }) => {
                        return (
                            <div key={id} className="sektor">
                                <div class="d-flex justify-content-center align-items-center sektor-img">
                                    <img src={image} alt="" />
                                </div>
                                <h3 class="text-light bg-secondary name">{name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper >
    );
}

export default Sektorlar;

const Wrapper = styled.div`
        
    .sectorlar {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 300px;
        gap: 8px;

        .sektor {
            background-color: white;
            border: 1px solid #F4F4F4;
            transition: .5s;
            cursor: pointer;

            :hover {
                box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
            }
        }
    }

    .sektor-img {
        width: 100%; 
        height: 250px;
        transition: .5s;

        :hover {
            transform: scale(1.2);
        }

        img {
            width: 180px; 
            height: 180px; 
            object-fit: cover;
        }
    }

    .name {
        height: 50px; 
        font-size: 24px; 
        line-height: 50px; 
        text-align: center;
        text-transform: uppercase;
    }

`
