import React, { useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';

import image1 from "../../images/sport majmuasi.jpg"

const AdminViloyatHaqida = () => {
    const [show, setShow] = useState(false)
    const [showTableParam, setShowTableParam] = useState(false)
    const [showUlParam, setShowUlParam] = useState(false)
    const [cols, setCols] = useState(2)
    const [rows, setRows] = useState(2)
    const [ulRows, setUlRows] = useState(2)
    const [textarea, setTextarea] = useState("Text")
    const [todo, setTodo] = useState("Todo")
    const [addedData, setAddedData] = useState([{ name: "textarea", title: "" }])

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

    function added(element) {
        if (element === "textarea") {
            setAddedData([...addedData, { name: "textarea", title: "Text" }])
        }

        if (element === "table") {
            let table = [];
            for (let i = 0; i < rows; i++) {
                let object = {}
                for (let j = 0; j < cols; j++) {
                    object[`col${j + 1}`] = `${j + 1}`
                }

                table.push(object);
            }

            setAddedData([...addedData, { name: "table", tableData: table }])

            setCols(2);
            setRows(2)
        }

        if (element === "ul") {
            let arr = [];
            for (let i = 0; i < ulRows; i++) {
                arr.push(`item${i + 1}`)
            }

            setAddedData([...addedData, { name: "ul", ulData: arr }])
        }

        if (element === "todo") {
            setAddedData([...addedData, { name: "todo", title: "Todo" }])
        }
    }

    function ozgartir(num, indexData, index, index2) {
        console.log(num, indexData, index, index2);
        let faceData = addedData.filter((element, indexx1) => {

            if (indexx1 === indexData) {
                console.log(addedData[indexx1]);

                element.tableData.filter((element2, indexx2) => {
                    if (indexx2 === index) {
                        element2[`col${index2 + 1}`] = num;
                    }
                    return element2;
                })
            }
            return element;
        })

        setAddedData(faceData)
    }

    function ozgartir2(title, indexData) {
        let faceData = addedData.filter((element, indexx1) => {
            if (indexData === indexx1) {
                element.title = title
            }

            return element
        })

        setAddedData(faceData)

        setTextarea("Text")
        setTodo("Todo")
    }

    function ozgartir3(title, indexData, index2) {
        console.log(title, indexData, index2);
        let faceData = addedData.filter((element, indexx1) => {
            if (indexData === indexx1) {
                console.log(indexx1);
                element.ulData[index2] = title
            }
            return element

        })


        setAddedData(faceData)

        setTodo("Todo")
    }



    console.log(addedData);

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
                <div style={{ width: "100%", minHeight: "90vh", maxHeight: "90vh", overflowY: "auto" }}>
                    <div class="modal-dialog modal-full">
                        <div class="modal-content" style={{ backgroundColor: "#F4F4F4" }}>
                            <div class="modal-header bg-primary text-white">
                                <h5 class="modal-title">QO'SHISH</h5>
                                <button onClick={() => setShow(false)} type="button" class="close" data-dismiss="modal"><i className='icon-cross2'></i></button>
                            </div>

                            <div class="modal-body">
                                <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                                    <div style={{ width: "100%" }}>
                                        <label>Sarlavha matni</label>
                                        <input type="text" placeholder="Sarlavha matnini kiriting" class="form-control" />
                                    </div>

                                    <div style={{ width: "100%" }}>
                                        <label>Sarlavha rasmi</label>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" />
                                            <label class="custom-file-label" for="customFile">Rasm tanlash</label>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>

                                    <button onClick={() => added("textarea")} className='btn btn-primary w-100'>Textarea</button>

                                    <div className='w-100'>
                                        <button onClick={() => setShowTableParam(!showTableParam)} className='btn btn-primary w-100'>Table</button>

                                        {showTableParam && <div class="col-lg-12" style={{ backgroundColor: "#F4F4F4", padding: "16px" }}>
                                            <div class="col-lg-12">
                                                <label>Ustunlar soni:</label>
                                                <input onChange={(e) => setCols(e.target.value)} type="number" placeholder="2" class="form-control" defaultValue={2} />
                                            </div>
                                            <div class="col-lg-12 mt-2">
                                                <label>Qatorlar soni:</label>
                                                <input onChange={(e) => setRows(e.target.value)} type="number" placeholder="2" class="form-control" defaultValue={2} />
                                            </div>

                                            <div class="col-lg-12 mt-2">
                                                <button onClick={() => { added("table"); setShowTableParam(false) }} className='btn btn-primary w-100'>qo`shish</button>
                                            </div>
                                        </div>}
                                    </div>

                                    <div className='w-100'>
                                        <button onClick={() => setShowUlParam(!showUlParam)} className='btn btn-primary w-100'>Ro`yxat</button>

                                        {showUlParam && <div class="col-lg-12" style={{ backgroundColor: "#F4F4F4", padding: "16px" }}>
                                            <div class="col-lg-12">
                                                <label>Malumotlar soni:</label>
                                                <input onChange={(e) => setUlRows(e.target.value)} type="number" placeholder="2" class="form-control" defaultValue={2} />
                                            </div>

                                            <div class="col-lg-12 mt-2">
                                                <button onClick={() => { added("ul"); setShowUlParam(false) }} className='btn btn-primary w-100'>qo`shish</button>
                                            </div>
                                        </div>}
                                    </div>

                                    <button className='btn btn-primary w-100' onClick={() => added("todo")}>Eslatma</button>

                                    <button className='btn btn-primary w-100'>Rasm</button>
                                </div>
                            </div>

                            <div className="korinish px-3">
                                {
                                    addedData.map((element, indexData) => {
                                        return (
                                            <>
                                                {element.name === "textarea" && (
                                                    <textarea onChange={(e) => ozgartir2(e.target.value, indexData)} rows="3" cols="3" class="form-control my-3" defaultValue={textarea}></textarea>
                                                )}

                                                {element.name === "table" && (
                                                    <table class="table bg-white datatable-colvis-basic table-hover border table-bordered my-3">
                                                        {
                                                            element?.tableData.map((malumot, index) => {
                                                                return (
                                                                    index === 0 ? (
                                                                        <thead key={index}>
                                                                            <tr>
                                                                                {Object.values(malumot).map((d, index2) => (
                                                                                    <th key={index2}>
                                                                                        <input style={{ border: "none", width: "100%", outline: "none", backgroundColor: "transparent", textAlign: "center" }} onChange={(e) => ozgartir(e.target.value, indexData, index, index2)} defaultValue={d}></input>
                                                                                    </th>
                                                                                ))}

                                                                            </tr>
                                                                        </thead>
                                                                    ) : (
                                                                        <tbody>
                                                                            <tr key={index}>
                                                                                {Object.values(malumot).map((d, index2) => (
                                                                                    <td key={index2}>
                                                                                        <textarea style={{ border: "none", width: "100%", outline: "none", backgroundColor: "transparent", textAlign: "center" }} onChange={(e) => ozgartir(e.target.value, indexData, index, index2)} defaultValue={d}></textarea>
                                                                                    </td>
                                                                                ))}
                                                                            </tr>
                                                                        </tbody>
                                                                    )
                                                                )
                                                            })
                                                        }
                                                    </table>

                                                )}

                                                {element.name === "ul" && (
                                                    <div className="card card-body bg-white my-3 p-2" style={{ borderRadius: "0" }}>
                                                        <div className="list-feed">
                                                            {
                                                                element?.ulData.map((malumot, index2) => {
                                                                    return (
                                                                        <div className="list-feed-item">
                                                                            <input onChange={(e) => ozgartir3(e.target.value, indexData, index2)} defaultValue={malumot} style={{ border: "none", width: "100%", outline: "none", backgroundColor: "transparent", textAlign: "star" }} ></input>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                )}

                                                {element.name === "todo" && (
                                                    <div class="card border-left-3 bg-white border-left-primary rounded-left-0 my-3">
                                                        <textarea onChange={(e) => ozgartir2(e.target.value, indexData)} style={{ padding: "8px", border: "none", width: "100%", outline: "none", backgroundColor: "transparent", textAlign: "star" }} defaultValue={todo}></textarea>
                                                    </div>
                                                )}
                                            </>
                                        )
                                    })
                                }
                            </div>

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
        cursor: pointer;
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

    .modal-content {
        border: none;
    }
    
`
