import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-reveal';
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
        isShow: false,
        isShow2: false,

    },
    {
        id: 1,
        rasmi: s2,
        ismiFamiliyasi: "Temirova Dilnora",
        lavozimi: "Buxoro viloyat xotin-qizlar",
        Partiyaviyligi: "-",
        TugilganYili: "20-11-1969",
        TugilganJoyi: "G`ijduvon tumani",
        Millati: "O`zbek",
        Malumoti: "Oliy",
        TelefonRaqami: "-",
        isShow: false,
        isShow2: false,
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
                                <img src={item.rasmi} alt="" style={{ width: "250px", height: "300px", objectFit: "cover" }} />

                                <div style={{ width: "100%", height: "300px", backgroundColor: "white" }}>
                                    <div className="p-2 text-light bg-secondary" style={{ fontSize: "18px" }}>{item.ismiFamiliyasi}</div>

                                    <div className="list-group" style={{ border: "none" }}>
                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Lavozimi</span>
                                            <span>{item.lavozimi}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Partiyaviyligi</span>
                                            <span>{item.Partiyaviyligi}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Tug'ilgan yili</span>
                                            <span>{item.TugilganYili}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Tug'ilgan joyi</span>
                                            <span>{item.TugilganJoyi}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Millati</span>
                                            <span>{item.Millati}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Ma'lumoti</span>
                                            <span>{item.Malumoti}</span>
                                        </li>

                                        <li className="list-group-item list-group-item-action px-2 py-1 d-flex">
                                            <span>Telefon raqami</span>
                                            <span>{item.TelefonRaqami}</span>
                                        </li>
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => show(item)} className="p-2 text-light bg-secondary" style={{ fontSize: "18px", cursor: "pointer" }}>
                                {item.isShow ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}
                                Qo`shimcha ma`lumot</div>
                            {
                                item.isShow && <Zoom bottom>
                                    <div className="list-feed p-3">
                                        <div className="list-feed-item">
                                            <a href="/">David Linner</a> requested refund for a double bank card charge
                                        </div>

                                        <div className="list-feed-item">
                                            User <a href="/">Christopher Wallace</a> from Google is awaiting for staff reply
                                        </div>

                                        <div className="list-feed-item">
                                            Ticket <strong>#43683</strong> has been resolved by <a href="/">Victoria Wilson</a>
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">Eugene Kopyov</a> merged <strong>Master</strong>, <strong>Demo</strong> and <strong>Dev</strong> branches
                                        </div>

                                        <div className="list-feed-item">
                                            All sellers have received payouts for December, 2016!
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">Chris Arney</a> created a new ticket <strong>#43136</strong> and assigned to <a href="/">John Nod</a>
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">David Linner</a> requested refund for a double bank card charge
                                        </div>

                                        <div className="list-feed-item">
                                            User <a href="/">Christopher Wallace</a> from Google is awaiting for staff reply
                                        </div>

                                        <div className="list-feed-item">
                                            Ticket <strong>#43683</strong> has been resolved by <a href="/">Victoria Wilson</a>
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">Eugene Kopyov</a> merged <strong>Master</strong>, <strong>Demo</strong> and <strong>Dev</strong> branches
                                        </div>

                                        <div className="list-feed-item">
                                            All sellers have received payouts for December, 2016!
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">Chris Arney</a> created a new ticket <strong>#43136</strong> and assigned to <a href="/">John Nod</a>
                                        </div>
                                    </div>
                                </Zoom>
                            }

                            <div onClick={() => show2(item)} className="p-2 mt-2 text-light bg-secondary" style={{ fontSize: "18px", cursor: "pointer" }}>
                                {item.isShow2 ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}Funksiya va vazifalari</div>
                            {
                                item.isShow2 && <Zoom bottom>
                                    <div className="list-feed p-3">
                                        <div className="list-feed-item">
                                            <a href="/">David Linner</a> requested refund for a double bank card charge
                                        </div>

                                        <div className="list-feed-item">
                                            User <a href="/">Christopher Wallace</a> from Google is awaiting for staff reply
                                        </div>

                                        <div className="list-feed-item">
                                            Ticket <strong>#43683</strong> has been resolved by <a href="/">Victoria Wilson</a>
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">Eugene Kopyov</a> merged <strong>Master</strong>, <strong>Demo</strong> and <strong>Dev</strong> branches
                                        </div>

                                        <div className="list-feed-item">
                                            All sellers have received payouts for December, 2016!
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">Chris Arney</a> created a new ticket <strong>#43136</strong> and assigned to <a href="/">John Nod</a>
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">David Linner</a> requested refund for a double bank card charge
                                        </div>

                                        <div className="list-feed-item">
                                            User <a href="/">Christopher Wallace</a> from Google is awaiting for staff reply
                                        </div>

                                        <div className="list-feed-item">
                                            Ticket <strong>#43683</strong> has been resolved by <a href="/">Victoria Wilson</a>
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">Eugene Kopyov</a> merged <strong>Master</strong>, <strong>Demo</strong> and <strong>Dev</strong> branches
                                        </div>

                                        <div className="list-feed-item">
                                            All sellers have received payouts for December, 2016!
                                        </div>

                                        <div className="list-feed-item">
                                            <a href="/">Chris Arney</a> created a new ticket <strong>#43136</strong> and assigned to <a href="/">John Nod</a>
                                        </div>
                                    </div>
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
