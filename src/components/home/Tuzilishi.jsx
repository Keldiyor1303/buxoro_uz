import React from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

const Tuzilishi = () => {
    const data = [
        {
            id: 1,
            name: "Buxoro shahar"
        },
        {
            id: 2,
            name: "Buxoro shahar"
        },
        {
            id: 3,
            name: "Buxoro shahar"
        },
        {
            id: 4,
            name: "Buxoro shahar"
        },
        {
            id: 5,
            name: "Buxoro shahar"
        },
        {
            id: 6,
            name: "Buxoro shahar"
        },
        {
            id: 7,
            name: "Buxoro shahar"
        },
        {
            id: 8,
            name: "Buxoro shahar"
        },
        {
            id: 9,
            name: "Buxoro shahar"
        },
        {
            id: 10,
            name: "Buxoro shahar"
        },
        {
            id: 11,
            name: "Buxoro shahar"
        },
        {
            id: 12,
            name: "Buxoro shahar"
        },
        {
            id: 13,
            name: "Buxoro shahar"
        },
    ]

    return (
        <Wrapper>
            <Fade bottom cascade>
                <div className="px-2 pt-3">
                    <div className="box">
                        <div className="col">
                            <div className="p-2 text-light rounded bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Ma'muriy tuzilishi</div>

                            <iframe className="mt-3"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49060.9606733306!2d64.38777874840196!3d39.777597002277766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1653191666410!5m2!1sru!2s"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className="col">
                            <div className="p-2 text-light rounded bg-primary" style={{ fontSize: "18px", textTransform: "uppercase" }}>Shahar va tumanlar
                            </div>

                            <div className="mt-3 tumanlar">

                                {
                                    data.map(({ name, id }) => {
                                        return (
                                            <div key={id} className="rounded text-light bg-secondary d-flex justify-content-center align-items-center m-0 p-0"
                                                style={{ fontSize: "18px" }}>{name}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Wrapper >
    );
}

export default Tuzilishi;

const Wrapper = styled.div`
    iframe {
        width:100%;
        height:410px;
        border: 0
    }

    .box {
        display: flex;
    }

    
    .tumanlar {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 50px;
        gap: 10px;

        &>div:nth-child(1) {
            grid-column: span 2;
        }
}

@media (max-width: 768px) {
            .box{
                flex-direction: column;
            }
        }

    
`
