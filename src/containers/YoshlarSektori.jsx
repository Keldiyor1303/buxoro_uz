import React from 'react';
import styled from 'styled-components';

import k2 from "../images/k2.jpg"
import yoshlar from "../images/yoshlar.jpg"

const YoshlarSektori = () => {
    const data = [
        {
            id: 1,
            image: yoshlar,
            name: "Maqsad — yoshlarning siyosiy bilimi va huquqiy madaniyatini oshirish",
            title: "Mamlakatimiz yoshlarining davlat va huquq asoslari haqidagi muhim bilimlarni egallashlari, amaldagi normativ-huquqiy hujjatlar mazmun-mohiyatini to‘laqonli talqin qilish layoqatiga ega bo‘lishlari, hayotiy faoliyatda ulardan to‘g‘ri va oqilona foydalana olishlari juda muhim. Bugungi kunda yoshlar siyosiy bilimi va huquqiy ongini oshirishga doir tadbirlarni tashkil etishda ijtimoiy sheriklik tamoyillaridan keng va unumli foydalanish tizimli asosda yo‘lga qo‘yildi. "
        },
        {
            id: 1,
            image: k2,
            name: "Korrupsiyaga qarshi birgalikda kurashamiz",
            title: "Korrupsiya bu – har qanday davlat kelajagi uchun xavf tug‘diradigan illatlardan biri. Korrupsiya shunday illatki, uni bir yoki ikki idoraning sa’y-harakati bilan yo‘q qilib bo‘lmaydi. Qachonki, jamiyat unga qarshi birgalikda kurashib, uning ildizlarini yo‘q qilishga kirishilsagina ijobiy natijaga erishish mumkin. Qonunchilikda korrupsiya tushunchasiga shunday ta’rif keltirilgan: “Korrupsiya – davlat organlari xodimlari moddiy yoki mulkiy yo‘sinda, g‘ayriqonuniy shaxsiy naf ko‘rish maqsadida, o‘z xizmat mavqeidan foydalanishida ifodalanadigan ijtimoiy hodisadir”."
        }
    ]
    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Korrupsiyaga qarshi kurashish</div>

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
                                            <h2 className="text-secondary m-0 p-0 " style={{ fontWeight: "500" }}>{name}</h2>
                                        </div>

                                        <p className='pt-2 text-justify'>{title}</p>

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
        </Wrapper>
    );
}

export default YoshlarSektori;

const Wrapper = styled.div`
    
`