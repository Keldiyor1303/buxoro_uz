import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import API from '../../utils/config';

import s1 from "../../images/s1.jpg"
import s2 from "../../images/s2.jpg"


// const data1 = [
//     {
//         id: 0,
//         rasmi: s1,
//         ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
//         lavozimi: "Buxoro viloyat hokimi",
//         Partiyaviyligi: "-",
//         TugilganYili: "20-11-1969",
//         TugilganJoyi: "G`ijduvon tumani",
//         Millati: "O`zbek",
//         Malumoti: "Oliy",
//         TelefonRaqami: "-",
//         isShow: false,
//         isShow2: false,

//     },
//     {
//         id: 1,
//         rasmi: s2,
//         ismiFamiliyasi: "Temirova Dilnora",
//         lavozimi: "Buxoro viloyat xotin-qizlar",
//         Partiyaviyligi: "-",
//         TugilganYili: "20-11-1969",
//         TugilganJoyi: "G`ijduvon tumani",
//         Millati: "O`zbek",
//         Malumoti: "Oliy",
//         TelefonRaqami: "-",
//         isShow: false,
//         isShow2: false,
//     },
// ]




const Rahbariyat = () => {

    const [data1, setData1] = useState([])

    useEffect(() => {
        API.get(`api/admin_panel/manegemnt_views/`)
            .then(res => {
                console.log(res.data);
                setData1(res.data)
            })
    }, [])


    const [data, setData] = useState([])


    useEffect(() => {
        setData(data1)
    }, [data])

    function show(item) {
        const faceData = data.filter((element) => {
            if (element.id === item.id) {
                element.isShow = !item.isShow
            }
            return element
        })

        setData(faceData)
    }

    function show2(item) {
        const faceData = data.filter((element) => {
            if (element.id === item.id) {
                element.isShow2 = !item.isShow2
            }
            return element
        })

        setData(faceData)
    }



    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Rahbariyat</div>

            {
                data.map((item) => {
                    return (
                        <div style={{ backgroundColor: "#fff", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            <div key={item.id} className='d-flex gap-2 senatorlar p-2 mt-2'>
                                <img src={`http://192.168.0.166:8000${item.img}`} alt="" style={{ width: "250px", height: "300px", objectFit: "cover" }} />

                                <div style={{ width: "100%", height: "300px", backgroundColor: "white" }}>
                                    <div className="p-2 text-light bg-secondary" style={{ fontSize: "18px" }}>{item.full_name}</div>

                                    <div className="list-group" style={{ border: "none" }}>
                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Lavozimi</span>
                                            <span>{item.position}</span>
                                        </li>

                                        {/* <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Partiyaviyligi</span>
                                            <span>{item.Partiyaviyligi}</span>
                                        </li> */}

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Tug'ilgan yili</span>
                                            <span>{item.date_birth_day}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Tug'ilgan joyi</span>
                                            <span>{item.place_of_birth}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Millati</span>
                                            <span>{item.millat}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Ma'lumoti</span>
                                            <span>{item.information}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Telefon raqami</span>
                                            <span>{item.phone_number}</span>
                                        </li>
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => show(item)} className="p-2 text-light bg-secondary" style={{ fontSize: "18px", cursor: "pointer" }}>
                                {item.isShow ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}
                                Qo`shimcha ma`lumot</div>
                            {
                                item.isShow && <Zoom bottom>
                                    <span className='p-3 text-secondary' style={{ fontSize: "18px" }}>{item.informations}</span>
                                </Zoom>
                            }

                            <div onClick={() => show2(item)} className="p-2 mt-2 text-light bg-secondary" style={{ fontSize: "18px", cursor: "pointer" }}>
                                {item.isShow2 ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}Funksiya va vazifalari</div>
                            {
                                item.isShow2 && <Zoom bottom>
                                    <span className='p-3 text-secondary' style={{ fontSize: "18px" }}>{item.function}</span>
                                </Zoom>
                            }
                        </div>
                    )
                })
            }
        </Wrapper>
    );
}

export default Rahbariyat;

const Wrapper = styled.div`

    .senatorlar span {
        width: 50%;
    }
    
`
