import React from 'react';
import styled from 'styled-components';

import image from "../../images/1.jpg"

const Yangiliklar = () => {

    const data = [
        {
            id: 1,
            image: image,
            date: "13.03.2003",
            title: "Istanbulda minglab odamlar prezidentni haqorat qilish va davlatni omma oldida haqoratlashda ayblangan muxolifatchi ayol chiqdi."
        },
        {
            id: 2,
            image: image,
            date: "13.03.2003",
            title: "Istanbulda minglab odamlar prezidentni haqorat qilish va davlatni omma oldida haqoratlashda ayblangan muxolifatchi ayol chiqdi."
        },
        {
            id: 3,
            image: image,
            date: "13.03.2003",
            title: "Istanbulda minglab odamlar prezidentni haqorat qilish va davlatni omma oldida haqoratlashda ayblangan muxolifatchi ayol chiqdi."
        },
        {
            id: 4,
            image: image,
            date: "13.03.2003",
            title: "Istanbulda minglab odamlar prezidentni haqorat qilish va davlatni omma oldida haqoratlashda ayblangan muxolifatchi ayol chiqdi."
        },
    ]

    return (
        <Wrapper>
            <div className="px-3 mt-3 mt-lg-3 mt-xl-0">
                <div className="p-2 text-light rounded bg-primary" style={{ fontSize: "18px" }}>Yangiliklar</div>

                <div className="row pt-3">

                    {
                        data.map(({ id, image, date, title }) => {
                            return (
                                <div key={id} className="col-xl-3 col-md-6">

                                    <div className="card card-hover">
                                        <div className="card-img-actions">
                                            <div className="img-scale">
                                                <img className="img-fluid img-fluid-hover" src={image}
                                                    alt="" />
                                            </div>

                                        </div>
                                        <div className="card-body py-2">
                                            <h5 className="card-title text-primary font-weight-bold">{date}</h5>
                                            <p className="card-text card-text-title"> {title} </p>
                                        </div>

                                        <div className="card-footer d-flex justify-content-end p-2 px-2">
                                            <span className="text-primary font-weight-semybold"> Batafsil
                                                <i className="icon-arrow-right8"></i></span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    );
}

export default Yangiliklar;

const Wrapper = styled.div`

    .card-body {
        height: 160px; 
        max-height: 180px;
    }
    
    .card-text-title:hover {
        cursor: pointer;
        color: #2196F3;
    }

    .img-scale {
        overflow: hidden;
    }

    .img-fluid {
        transition: .3s linear;
        width: 100%; 
        height: 250px; 
        object-fit: cover;
    }

    .img-fluid-hover:hover {
        transform: scale(1.1);
    }

    .card-hover {
        transition: 0.3s linear;
    }

    .card-hover:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        transform: scale(1.02);
    }
`
