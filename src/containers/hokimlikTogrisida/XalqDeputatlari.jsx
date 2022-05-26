import React, { useState } from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

import s1 from "../../images/s1.jpg"
import s2 from "../../images/s2.jpg"

const XalqDeputatlari = () => {

    const [openModal1, setOpenModal1] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)
    // const [openModal4, setOpenModal4] = useState(false)
    const [arr, setArr] = useState([])

    const data = [
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
            TelefonRaqami: "-"
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
            TelefonRaqami: "-"
        },
    ]


    // useEffect(() => {
    //     let arr2 = []
    //     data.forEach((item) => {
    //         arr2.push(false)
    //         setArr([false, ...arr]);
    //         console.log(item);
    //     })
    //     setArr(arr2)
    // }, [])


    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}> Xalq deputatlari</div>

            <div onClick={() => setOpenModal1(!openModal1)} className="p-2 text-light rounded bg-secondary mb-2 header" style={{ fontSize: "18px" }}>
                {openModal1 ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}
                O‘zbekiston Respublikasi Oliy Majlisi Senati</div>

            {openModal1 && <Zoom bottom cascade>
                <ul>
                    <div onClick={() => setOpenModal2(!openModal2)} className="p-2 text-light rounded bg-secondary mb-2 header" style={{ fontSize: "18px" }}>
                        {openModal2 ? <i className='icon-arrow-down15'> </i> : <i className='icon-arrow-right15'></i>}
                        Senat</div>

                    {
                        openModal2 && <Zoom bottom cascade>
                            <div className="card card-body">
                                <h3 className='text-secondary'>Senatning mutlaq vakolatlari</h3>
                                <div className="list-feed">
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
                            </div>
                        </Zoom>
                    }

                    <div onClick={() => setOpenModal3(!openModal3)} className="p-2 text-light rounded bg-secondary mb-2 header" style={{ fontSize: "18px" }}>
                        {openModal3 ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>} Senatorlar ro`yxati</div>

                    {
                        openModal3 && data.map((item) => {
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

                                    <div onClick={() => { arr[item.id] = !arr[item.id]; setArr(arr); console.log(arr); }} className="p-2 text-light rounded bg-secondary mb-2 header" style={{ fontSize: "18px" }}>
                                        {arr[item.id] ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>} Senatorlar ro`yxati</div>

                                    {
                                        arr[item.id] && <h2>red</h2>
                                    }

                                </div>
                            )
                        })
                    }

                </ul>
            </Zoom>
            }

            <div className="p-2 text-light rounded bg-secondary mb-2 header" style={{ fontSize: "18px" }}><i className='icon-arrow-right15'></i> Xalq deputatlari</div>

        </Wrapper>
    );
}

export default XalqDeputatlari;

const Wrapper = styled.div`

    ul {
        list-style-type: square;
    }

    .senatorlar span {
        width: 50%;
    }

    .header {
        cursor: pointer;
    }
    
`


