import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import s1 from "../../images/s1.jpg"
import s2 from "../../images/s2.jpg"


const data1 = [
    {
        id: 0,
        rasmi: s1,
        ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
        lavozimi: "Buxoro viloyat hokimi",
        Partiyaviyligi: "-",
        TugilganYili: "20-11-1969",
        TugilganJoyi: "G`ijduvon tumani",
        Millati: "O`zbek",
        Malumoti: "Oliy",
        TelefonRaqami: "-",
        isShow: true
    },
    {
        id: 1,
        rasmi: s2,
        ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
        lavozimi: "Buxoro viloyat hokimi",
        Partiyaviyligi: "-",
        TugilganYili: "20-11-1969",
        TugilganJoyi: "G`ijduvon tumani",
        Millati: "O`zbek",
        Malumoti: "Oliy",
        TelefonRaqami: "-",
        isShow: false,
    },
]



const Rahbariyat = () => {

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



    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Rahbariyat</div>

            {
                data.map((item) => {
                    return (
                        <div>
                            <div key={item.id} className='d-flex gap-2 senatorlar py-2'>
                                <img src={item.rasmi} alt="" style={{ width: "250px", height: "300px", objectFit: "cover" }} />

                                <div style={{ width: "100%", height: "300px", backgroundColor: "white" }}>
                                    <div className="p-2 text-light bg-secondary" style={{ fontSize: "18px" }}>{item.ismiFamiliyasi}</div>

                                    <div className="list-group" style={{ border: "none" }}>
                                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                            <span>Lavozimi</span>
                                            <span>{item.lavozimi}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                            <span>Partiyaviyligi</span>
                                            <span>{item.Partiyaviyligi}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                            <span>Tug'ilgan yili</span>
                                            <span>{item.TugilganYili}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                            <span>Tug'ilgan joyi</span>
                                            <span>{item.TugilganJoyi}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                            <span>Millati</span>
                                            <span>{item.Millati}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                            <span>Ma'lumoti</span>
                                            <span>{item.Malumoti}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                            <span>Telefon raqami</span>
                                            <span>{item.TelefonRaqami}</span>
                                        </li>
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => show(item)} className="p-2 text-light bg-secondary" style={{ fontSize: "18px" }}>Funksiya va vazifalari</div>
                            {
                                item.isShow && <h2>{item.ismiFamiliyasi}</h2>
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
