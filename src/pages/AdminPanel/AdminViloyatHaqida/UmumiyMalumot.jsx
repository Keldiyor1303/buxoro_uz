import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import API from '../../../utils/config';
import hokimiyat from "../../../images/hokimiyat.jpg"
import image1 from "../../../images/sport majmuasi.jpg"



const UmumiyMalumot = (data) => {
    console.log(data);
    const [show, setShow] = useState(false)
    const [showTableParam, setShowTableParam] = useState(false)
    const [showUlParam, setShowUlParam] = useState(false)
    const [natija, setNatija] = useState(false)
    const [cols, setCols] = useState(2)
    const [rows, setRows] = useState(2)
    const [ulRows, setUlRows] = useState(2)
    const [textarea, setTextarea] = useState("Text")
    const [todo, setTodo] = useState("Todo")
    const [image, setImage] = useState(null)
    const [images, setImages] = useState([
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
    ])
    const [gallery, setGallery] = useState([])
    const [addedData, setAddedData] = useState([])

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            setShow(false)
        }
    })

    const data1 = [
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

    console.log(image);
    console.log(gallery);
    console.log(images);

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

        if (element === "image") {
            setAddedData([...addedData, { name: "image", image: null }])
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

    function ozgartir4(image, indexData) {
        let faceData = addedData.filter((element, indexx1) => {
            if (indexx1 === indexData) {
                element.image = image
            }
            return element
        })
        setAddedData(faceData)
    }

    // useEffect(() => {
    //     console.log("sdsdsd", gallery);
    //     Object.values(gallery)?.map((item) => {
    //         return (
    //             setImages([...images, { original: URL.createObjectURL(item), thumbnail: URL.createObjectURL(item) }])
    //         )
    //     })
    // }, [gallery]);









    console.log(addedData);


    return (
        <Wrapper>
            <Zoom bottom>
                <div class="card">
                    <table class="table datatable-colvis-basic table-hover table-bordered">
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
                                data1.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <img src={`http://192.168.0.166:8000/${item.img}`} alt="rasm" />
                                            </td>
                                            <td>{item.title}</td>
                                            <td className="toliq">
                                                <p>{item.content}</p>
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
        </Wrapper>
    );
}

export default UmumiyMalumot;

const Wrapper = styled.div`
    
`
