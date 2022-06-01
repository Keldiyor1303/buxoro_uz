import React, { useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';

import image1 from "../../images/sport majmuasi.jpg"

const AdminViloyatHaqida = () => {
    const [show, setShow] = useState(false)

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            setShow(false)
        }
    })

    const data = [
        {
            id: 1,
            image: image1,
            name: "BOTIR ZARIPOV BUXORO OLIMPIYA VA PARALIMPIYA ZAXIRALARI KOLLEJI FAOLIYATINI O‘RGANDI",
            title: "  Xabaringiz bor, joriy yilning 23 may kuni Prezidentmiz Shavkat Mirziyoyev raisligida sportni ommalashtirish, sport ta’limini yaxshilash, iqtidorli sportchilarni saralash va ularning zaxirasini yaratish hamda murabbiylarni tayyorlash bo‘yicha ustuvor vazifalar yuzasidan videoselektor yig‘ilishi bo‘lib o‘tdi.  Yig‘ilishda urg‘u berilgan masalalardan biri bu sport maktablari bilan olimpiya zaxiralari kollejlari va oliy sport mahorati maktablari o‘rtasida seleksiya borasida uzviy “zanjir” yo‘lga qo‘yilmagani bilan bog‘liq bo‘ldi. Misol uchun, respublikadagi 279 ta bolalar va o‘smirlar sport maktabining 190 tasida 36 ta olimpiya sport turidan bor-yo‘g‘i 10 tasi o‘rgatiladi. Oqibatda, xalqaro musobaqalarda qatnashish uchun davlat barcha tashkiliy va moliyaviy sharoitlarni yaratib berayotganiga qaramasdan, Osiyo va jahon olimpiya sporti bo‘yicha chempionatlarida 5-6 nafardan sovrindor chiqmoqda, xolos. 6 ta oliy sport mahorati maktabi, 32 ta olimpiya sport federatsiyasi olimpiya zaxiralari kollejlari bilan ishlashni o‘z holiga tashlab qo‘ygan. Kollejlardagi 9 mingga yaqin sportchilarning 21 foizi milliy terma jamoaga kira olgan, xolos, – dedi Prezidentimiz.",
            images: [image1, image1, image1, image1]
        },
        {
            id: 2,
            image: image1,
            name: "BOTIR ZARIPOV BUXORO OLIMPIYA VA PARALIMPIYA ZAXIRALARI KOLLEJI FAOLIYATINI O‘RGANDI",
            title: "  Xabaringiz bor, joriy yilning 23 may kuni Prezidentmiz Shavkat Mirziyoyev raisligida sportni ommalashtirish, sport ta’limini yaxshilash, iqtidorli sportchilarni saralash va ularning zaxirasini yaratish hamda murabbiylarni tayyorlash bo‘yicha ustuvor vazifalar yuzasidan videoselektor yig‘ilishi bo‘lib o‘tdi.  Yig‘ilishda urg‘u berilgan masalalardan biri bu sport maktablari bilan olimpiya zaxiralari kollejlari va oliy sport mahorati maktablari o‘rtasida seleksiya borasida uzviy “zanjir” yo‘lga qo‘yilmagani bilan bog‘liq bo‘ldi. Misol uchun, respublikadagi 279 ta bolalar va o‘smirlar sport maktabining 190 tasida 36 ta olimpiya sport turidan bor-yo‘g‘i 10 tasi o‘rgatiladi. Oqibatda, xalqaro musobaqalarda qatnashish uchun davlat barcha tashkiliy va moliyaviy sharoitlarni yaratib berayotganiga qaramasdan, Osiyo va jahon olimpiya sporti bo‘yicha chempionatlarida 5-6 nafardan sovrindor chiqmoqda, xolos. 6 ta oliy sport mahorati maktabi, 32 ta olimpiya sport federatsiyasi olimpiya zaxiralari kollejlari bilan ishlashni o‘z holiga tashlab qo‘ygan. Kollejlardagi 9 mingga yaqin sportchilarning 21 foizi milliy terma jamoaga kira olgan, xolos, – dedi Prezidentimiz.",
            images: [image1, image1, image1, image1]
        },
        {
            id: 3,
            image: image1,
            name: "BOTIR ZARIPOV BUXORO OLIMPIYA VA PARALIMPIYA ZAXIRALARI KOLLEJI FAOLIYATINI O‘RGANDI",
            title: "  Xabaringiz bor, joriy yilning 23 may kuni Prezidentmiz Shavkat Mirziyoyev raisligida sportni ommalashtirish, sport ta’limini yaxshilash, iqtidorli sportchilarni saralash va ularning zaxirasini yaratish hamda murabbiylarni tayyorlash bo‘yicha ustuvor vazifalar yuzasidan videoselektor yig‘ilishi bo‘lib o‘tdi.  Yig‘ilishda urg‘u berilgan masalalardan biri bu sport maktablari bilan olimpiya zaxiralari kollejlari va oliy sport mahorati maktablari o‘rtasida seleksiya borasida uzviy “zanjir” yo‘lga qo‘yilmagani bilan bog‘liq bo‘ldi. Misol uchun, respublikadagi 279 ta bolalar va o‘smirlar sport maktabining 190 tasida 36 ta olimpiya sport turidan bor-yo‘g‘i 10 tasi o‘rgatiladi. Oqibatda, xalqaro musobaqalarda qatnashish uchun davlat barcha tashkiliy va moliyaviy sharoitlarni yaratib berayotganiga qaramasdan, Osiyo va jahon olimpiya sporti bo‘yicha chempionatlarida 5-6 nafardan sovrindor chiqmoqda, xolos. 6 ta oliy sport mahorati maktabi, 32 ta olimpiya sport federatsiyasi olimpiya zaxiralari kollejlari bilan ishlashni o‘z holiga tashlab qo‘ygan. Kollejlardagi 9 mingga yaqin sportchilarning 21 foizi milliy terma jamoaga kira olgan, xolos, – dedi Prezidentimiz.",
            images: [image1, image1, image1, image1]
        },
    ]

    return (
        <Wrapper>
            <div class="card">

                <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-solid nav-justified">
                        <li class="nav-item"><a href="#solid-justified-tab1" class="nav-link active" data-toggle="tab">UMUMIY MA`LUMOT</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab2" class="nav-link" data-toggle="tab">O'ZBEKISTON RESPUBLIKASI KONSTITUTSIYASI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab3" class="nav-link" data-toggle="tab">DAVLAT RAMZLARI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab4" class="nav-link" data-toggle="tab">MILLIY BAYRAMLAR</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab5" class="nav-link" data-toggle="tab">MILLIY VALYUTA</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab6" class="nav-link" data-toggle="tab">DAVLAT MUKOFOTLARI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab7" class="nav-link" data-toggle="tab">HUDUDI VA AHOLI</a></li>

                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="solid-justified-tab1">
                            <Zoom bottom>
                                <div class="card">
                                    <table class="table datatable-colvis-basic table-hover">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "20%" }}>Rasm</th>
                                                <th style={{ width: "20%" }}>Mavzu nomi</th>
                                                <th style={{ width: "50%", overflow: "hidden" }}>To'liqroq ma'lumot</th>
                                                <th style={{ width: "10%", textAlign: "center" }}>O`zgartirishlar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((item) => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <td>
                                                                <img src={item.image} alt="rasm" />
                                                            </td>
                                                            <td>{item.name}</td>
                                                            <td className="toliq">
                                                                <p>{item.title}</p>
                                                            </td>
                                                            <td>
                                                                <i class="icon-pencil7 btn btn-primary px-3 py-2 my-2"></i>
                                                                <i class="icon-bin btn btn-danger px-3 py-2 my-2"></i>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }



                                        </tbody>
                                    </table>


                                    <div>
                                        <div style={{ display: "flex", justifyContent: "flex-end", }}>
                                            <button onClick={() => setShow(true)} className='btn btn-primary mt-3'>QO'SHISH</button>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        </div>

                        <div class="tab-pane fade" id="solid-justified-tab2">
                            <Zoom bottom>


                            </Zoom>
                        </div>
                    </div>
                </div>
            </div >

            {show && <div className='modall'>
                <div style={{ width: "80%" }}>
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Vertical form</h5>
                                <button type="button" class="close" data-dismiss="modal">×</button>
                            </div>

                            <form action="#">
                                <div class="modal-body">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <label>First name</label>
                                                <input type="text" placeholder="Eugene" class="form-control" />
                                            </div>

                                            <div class="col-sm-6">
                                                <label>Last name</label>
                                                <input type="text" placeholder="Kopyov" class="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <label>Address line 1</label>
                                                <input type="text" placeholder="Ring street 12" class="form-control" />
                                            </div>

                                            <div class="col-sm-6">
                                                <label>Address line 2</label>
                                                <input type="text" placeholder="building D, flat #67" class="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label>City</label>
                                                <input type="text" placeholder="Munich" class="form-control" />
                                            </div>

                                            <div class="col-sm-4">
                                                <label>State/Province</label>
                                                <input type="text" placeholder="Bayern" class="form-control" />
                                            </div>

                                            <div class="col-sm-4">
                                                <label>ZIP code</label>
                                                <input type="text" placeholder="1031" class="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <label>Email</label>
                                                <input type="text" placeholder="eugene@kopyov.com" class="form-control" />
                                                <span class="form-text text-muted">name@domain.com</span>
                                            </div>

                                            <div class="col-sm-6">
                                                <label>Phone #</label>
                                                <input type="text" placeholder="+99-99-9999-9999" data-mask="+99-99-9999-9999" class="form-control" />
                                                <span class="form-text text-muted">+99-99-9999-9999</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </Wrapper >
    );
}

export default AdminViloyatHaqida;

const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 100px);

    .card {
        background-color: #F4F4F4;
        border-radius: 0;
        box-shadow: none;
        margin: 0;
        padding: 0;
    }

    li {
        height: 90px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        padding: 0;
        margin: 0;
    }

    li .active {
        height: 90px;
        background-color: #2196F3 !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    td, tr {
        text-align: center;
    }

    img {
        width: 200px;
    }

    .modall {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6 );
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;

        .row {
            height: 100px !important;
        }

        .input-group {
            width: 80%;
            height: 80%;
            background-color: #F4F4F4;
            border-radius: 5px;
        }
    }

    .toliq p {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
    }
    
`
