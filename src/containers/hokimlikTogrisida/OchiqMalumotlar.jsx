import React from 'react';
import styled from 'styled-components';

import image from "../../images/hisobot.png"

const OchiqMalumotlar = () => {
    const data = [
        {
            id: 1,
            image: image,
            name: "Davlat organlari va tashkilotlarining o`z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo`ljallangan ma`lumotlar bundan mustasno)",
            title: "Quyidagilar 2021-yil 1-iyuldan boshlab qayd etilgan ma’lumotlarni Portalga joylashtirish va ularning har chorakda yangilanishini ta’minlasin: Moliya vazirligi, Davlat aktivlarini boshqarish agentligi, vazirlik va idoralar, Qoraqalpog‘iston ..."
        },
        {
            id: 1,
            image: image,
            name: "Davlat organlari va tashkilotlarining o`z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo`ljallangan ma`lumotlar bundan mustasno)",
            title: "Quyidagilar 2021-yil 1-iyuldan boshlab qayd etilgan ma’lumotlarni Portalga joylashtirish va ularning har chorakda yangilanishini ta’minlasin: Moliya vazirligi, Davlat aktivlarini boshqarish agentligi, vazirlik va idoralar, Qoraqalpog‘iston ..."
        }
    ]

    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}> Ochiq ma’lumotlar PF-6247 bo‘yicha</div>

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
                                            <h2 className="text-light m-0 p-0 bg-secondary">{name}</h2>
                                        </div>

                                        <p className='mt-2' style={{ fontSize: "18px", textAlign: "justify" }}>{title}</p>

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

export default OchiqMalumotlar;

const Wrapper = styled.div`
    
`
