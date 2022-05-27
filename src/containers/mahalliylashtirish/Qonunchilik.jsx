import React from 'react';
import styled from 'styled-components';

import lex from "../../images/lex.png"

const Qonunchilik = () => {
    const data = [
        {
            id: 1,
            image: lex,
            name: "ЎЗБЕКИСТОН РЕСПУБЛИКАСИДА ЗАРГАРЛИК ТАРМОҒИНИ ЖАДАЛ РИВОЖЛАНТИРИШ ЧОРА-ТАДБИРЛАРИ ТЎҒРИСИДА",
            title: "Мамлакатда маҳаллий заргарлик тармоғини тиклаш ва ривожлантириш бўйича изчил саъй-ҳаракатлар амалга оширилмоқда. Ишлаб чиқарувчиларга қимматбаҳо металлардан фойдаланиш имкониятининг берилиши ишлаб чиқарилаётган маҳаллий заргарлик маҳсулотлари ҳажмини кенгайтириш имконини яратди."
        },
        {
            id: 1,
            image: lex,
            name: "Korrupsiyaga qarshi birgalikda kurashamiz",
            title: "Korrupsiya bu – har qanday davlat kelajagi uchun xavf tug‘diradigan illatlardan biri. Korrupsiya shunday illatki, uni bir yoki ikki idoraning sa’y-harakati bilan yo‘q qilib bo‘lmaydi. Qachonki, jamiyat unga qarshi birgalikda kurashib, uning ildizlarini yo‘q qilishga kirishilsagina ijobiy natijaga erishish mumkin. Qonunchilikda korrupsiya tushunchasiga shunday ta’rif keltirilgan: “Korrupsiya – davlat organlari xodimlari moddiy yoki mulkiy yo‘sinda, g‘ayriqonuniy shaxsiy naf ko‘rish maqsadida, o‘z xizmat mavqeidan foydalanishida ifodalanadigan ijtimoiy hodisadir”."
        }
    ]
    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Qonunchilik</div>

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

                                        <h2 className="text-secondary m-0 p-0 " style={{ fontWeight: "500" }}>{name}</h2>

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

export default Qonunchilik;

const Wrapper = styled.div`
    
`