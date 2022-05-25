import React from 'react';
import styled from 'styled-components';

import image from "../../images/navruz.jpg"

const MilliyBayramlar = () => {

    const data = [
        {
            id: 1,
            image: image,
            name: "Navruz bayrami",
            date: "21-mart",
            title: "O‘zbekistonda Navro‘z bayrami mamlakatdagi eng sevimli, rang-barang va qiziqarli bayramlardan biridir. U 21 mart kuni, kunduzi va qorong'uligi teng bo'lgan bahorgi tengkunlik kuni nishonlanadi. Uning tarixini uch ming yildan ko'proq vaqt oldin Eron shimoli-sharqidagi Xuroson viloyatiga borib taqalsa bo'ladi va u yerdan G'arbiy va Markaziy Osiyoga tarqaldi."
        },
        {
            id: 1,
            image: image,
            name: "Navruz bayrami",
            date: "21-mart",
            title: "O‘zbekistonda Navro‘z bayrami mamlakatdagi eng sevimli, rang-barang va qiziqarli bayramlardan biridir. U 21 mart kuni, kunduzi va qorong'uligi teng bo'lgan bahorgi tengkunlik kuni nishonlanadi. Uning tarixini uch ming yildan ko'proq vaqt oldin Eron shimoli-sharqidagi Xuroson viloyatiga borib taqalsa bo'ladi va u yerdan G'arbiy va Markaziy Osiyoga tarqaldi."
        }
    ]

    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Milliy bayramlar</div>

            <div className="row">
                {
                    data.map(({ id, image, title, name, date }) => {
                        return (
                            <div className="col-xl-12">
                                <div className="card blog-horizontal">
                                    <div className="card-body">
                                        <div className="card-img-actions mr-sm-3 mb-sm-0">
                                            <a href="#course_preview" data-toggle="modal">
                                                <img src={image} className="img-fluid card-img" alt="" style={{ width: "400px", height: "300px", objectFit: "cover" }} />
                                                {/* <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x"></i></span> */}
                                            </a>
                                        </div>

                                        <div className="">
                                            <h2 className="text-success m-0 p-0">{name}</h2>

                                            <p style={{ fontSize: "18px" }}>{date}</p>
                                        </div>

                                        <p>{title}</p>

                                    </div>

                                    <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">

                                        <div className="mt-2 mt-sm-0 ml-auto">
                                            <a href="/">Batafsil <i className="icon-arrow-right8"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper >
    );
}

export default MilliyBayramlar;

const Wrapper = styled.div`
    
`
