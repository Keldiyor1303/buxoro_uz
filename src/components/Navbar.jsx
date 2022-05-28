import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import logo from "../images/logo_nav.png"
import buxoro from "../images/bux.png"

const Navbar = () => {

    const [show, setShow] = useState(false)
    const [child, setChild] = useState([])
    const [activeIndex, setActiveIndex] = useState(null)

    const navigate = useNavigate()

    const data = [
        {
            link: "VILOYAT HAQIDA",
            links: [
                { name: "UMUMIY MA'LUMOT", url: "/umumiy_malumot" },
                { name: "O'ZBEKISTON RESPUBLIKASI KONSTITUTSIYASI", url: "/konstitutsiya" },
                { name: "DAVLAT RAMZLARI", url: "/davlat_ramzlari" },
                { name: "MILLIY BAYRAMLAR", url: "/milliy_bayramlar" },
                { name: "MILLIY VALYUTA", url: "/milliy_valyuta" },
                { name: "DAVLAT MUKOFOTLARI", url: "/davlat_mukofotlari" },
                { name: "HUDUDI VA AHOLI", url: "/hududi_va_aholisi" }
            ]
        },
        {
            link: "HOKIMLIK TO`G`RISIDA",
            links: [
                { name: "HOKIMLIK FUNKSIYA VA VAZIFALARI", url: "/hokimlik_vazifalari" },
                { name: "XALQ DEPUTATLARI BUXORO VILOYATI KENGASHI", url: "/xalq_deputatlari_kengashi" },
                { name: "RAHBARIYAT", url: "/rahbariyat" },
                { name: "TARKIBIY TUZILMANING SXEMATIK KO'RINISHI", url: "/sxematik_korinish" },
                { name: "TARKIBIY BO'LINMALAR", url: "/tarkibiy_bolinmalar" },
                { name: "HOKIMLIKKA MUROJAAT", url: "/hokimlikka_murojaat" },
                { name: "HOKIMLIK TARIXI", url: "/hokimlik_tarixi" },
                { name: "OCHIQ MA’LUMOTLAR PF-6247 BO‘YICHA", url: "/ochiq_malumotlar" },
            ]
        },
        {
            link: "HOKIMLIK FAOLIYATI",
            links: [
                { name: "DAVLAT DASTURI DOIRASIDA AMALGA OSHIRILGAN ISHLAR", url: "/davlat_dasturi_doirasida" },
                { name: "MUVOFIQLASHTIRUVCHI MASLAHAT ORGANLAR RAHBARLARI (KOMISSIYALAR, KENGASHLAR, QO'MITALAR)", url: "/maslahat_organlari" },
                { name: "HOKIMLIKNING TASHKILOT VA IDORALAR BILAN HAMKORLIGI", url: "/idoralar_hamkorligi" },
                { name: "XALQARO HAMKORLIK", url: "/xalqaro_hamkorlik" },
                { name: "INVESTITSION FAOLIYAT", url: "/investitsion_faoliyat" },
                { name: "LOYIHALAR", url: "/loyihalar" },
                { name: "TENDERLAR", url: "/tenderlar" },
                { name: "E`LONLAR", url: "/elonlar" },
                { name: "VAKANSIYALAR", url: "/vakansiyalar" },
            ]
        },
        {
            link: "HUJJATLAR",
            links: [
                { name: "QONUNCHILIK", url: "/qonunchilik" },
                { name: "DAVLAT DASTURLARI", url: "/davlat_dasturlari" },
                { name: "VILOYAT DASTURLARI", url: "/viloyat_dasturlari" },
                { name: "NORMATIV HUQUQIY HUJJATLAR", url: "/normativ_hujjatlar" },
                { name: "HOKIMLIKNING ME'YORIY HUQUQIY HUJJATLARI", url: "/meyoriy_hujjatlar" },
                { name: "XALQARO SHARTNOMALAR", url: "/xalqaro_shartnomalar" },
                { name: "TADBIRKORLIK SUBYEKTLARIGA OID HUJJATLAR", url: "/tadbirkorlik_hujjatlari" },
                { name: "YERLAR TO'G'RISIDA MA'LUMOT", url: "/yerlar_malumoti" },
                { name: "STATISTIK, TAHLILIY, MA'RUZA VA AXBOROTLAR", url: "/statistik_axborotlar" },
                { name: "ME'YORIY HUQUQIY HUJJATLAR LOYIHALARINI MUHOKAMALASH", url: "/hujjatlarni_muhokamalash" },
                { name: "O'Z KUCHINI YO'QOTGAN HUJJATLAR", url: "/kuchini_yoqotgan_hujjatlar" },
            ]
        },
        {
            link: "MEDIATEKA",
            links: [
                { name: "FOTOGALEREYA", url: "/fotogalereya" },
                { name: "VIDEOGALEREYA", url: "/videogalereya" },
            ]
        },
        {
            link: "AXBOROT XIZMATI",
            links: [
                { name: "YANGILIKLAR", url: "/yangiliklar" },
                { name: "HOKIMNING NUTQ VA MA'RUZALARI", url: "/hokimlar_nutqi" },
                { name: "MATBUOT ANJUMANLARI", url: "/matbuot_anjumanlari" },
                { name: "OCHIQ MAJLISLARDA HOZIR BO’LISH TARTIBI", url: "/majlis_tartibi" },
                { name: "WEB SAYTDA JOYLASHTIRILADIGAN AXBOROTLAR RO’YXATI", url: "/axborotlar_ruyxati" },
                { name: "PRESS-RELIZLAR", url: "/press_relizlar" },
                { name: "AXBOROT OLISHGA DOIR SO’ROVLARNI QABUL QILISH TARTIBI", url: "/surovlarni_qabul_qilish" },
                { name: "AKKREDITATSIYA O'TKAZISH", url: "/akkreditatsiya" },
            ]
        },
        {
            link: "MAHALLIYLASHTIRISH",
            links: [
                { name: "QONUNCHILIK", url: "/mahalliy_qonunchilik" },
                { name: "STATISTIK HISOBOT", url: "/statistik_hisobotlar" },
                { name: "HUDUDIY IMPORT TAHLILI", url: "/hududiy_import_tahlili" },
            ]
        },
        {
            name: "MUROJAAT",
            url: "/murojaat"
        },
        {
            name: "YOSHLAR SEKTORI",
            url: "/yoshlar_sektori"
        },
        {
            name: "KORRUPSIYAGA QARSHI KURASHISH",
            url: "/korrupsiyaga_qarshi_kurashish"
        },
    ]

    return (
        <Wrapper>
            <div className="navbar navbar-expand-xl sticky-top"
                style={{ backgroundColor: "#fff", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "50px", width: "100%" }}>


                <div className="navbar-nav" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className='tillar' style={{ display: "flex", gap: "16px" }}>
                        <i className='icon-sphere'></i>
                        <Link to="/" className='active'>O'zbekcha</Link>
                        <Link to="/">Ўзбекча</Link>
                        <Link to="/">English</Link>
                    </div>


                    <ul className="navbar-nav ml-xl-auto right-panel">
                        <li className="nav-item mr-2">
                            <input type="text" className="form-control" placeholder="Izlash..." />
                        </li>

                        <li className="nav-item mr-2">
                            <button type="button" className="btn text-light bg-primary ">
                                Izlash
                            </button>
                        </li>

                        <li className="nav-item mr-2">
                            <button type="button" className="btn text-light bg-primary"> <i className="icon-eye"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="d-flex justify-content-between align-items-center px-3 py-3" style={{ height: "150px" }}>
                <div class="d-flex align-items-center gap-2" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    <img src={logo} alt="logo" class="logo" />
                    <h1>BUXORO VILOYATI HOKIMLIGI</h1>
                </div>
                <img src={buxoro} alt="buxoro" class="buxoro-img" />
            </div>
            <hr style={{ margin: "0" }} />

            {
                !show && <Fade bottom>
                    <ul className='px-2' style={{ listStyle: "none", display: "flex", flexWrap: "wrap", alignItems: "center", position: "relative", zIndex: "999", marginBottom: "0" }}>
                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">VILOYAT HAQIDA</span>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink style={{ width: "200px" }} to="/umumiy_malumot" className="dropdown-item">UMUMIY MA'LUMOT</NavLink>
                                <NavLink to="/konstitutsiya" className="dropdown-item">O'ZBEKISTON RESPUBLIKASI <br /> KONSTITUTSIYASI</NavLink>
                                <NavLink to="/davlat_ramzlari" className="dropdown-item">DAVLAT RAMZLARI</NavLink>
                                <NavLink to="/milliy_bayramlar" className="dropdown-item">MILLIY BAYRAMLAR</NavLink>
                                <NavLink to="/milliy_valyuta" className="dropdown-item">MILLIY VALYUTA</NavLink>
                                <NavLink to="/davlat_mukofotlari" className="dropdown-item">DAVLAT MUKOFOTLARI</NavLink>
                                <NavLink to="/hududi_va_aholisi" className="dropdown-item">HUDUDI VA AHOLI</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">HOKIMLIK TO`G`RISIDA</span>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/hokimlik_vazifalari" className="dropdown-item">HOKIMLIK FUNKSIYA VA VAZIFALARI</NavLink>
                                <NavLink to="/xalq_deputatlari_kengashi" className="dropdown-item">XALQ DEPUTATLARI BUXORO <br /> VILOYATI KENGASHI</NavLink>
                                <NavLink to="/rahbariyat" className="dropdown-item">RAHBARIYAT</NavLink>
                                <NavLink to="/sxematik_korinish" className="dropdown-item">TARKIBIY TUZILMANING <br /> SXEMATIK KO'RINISHI</NavLink>
                                <NavLink to="/tarkibiy_bolinmalar" className="dropdown-item">TARKIBIY BO'LINMALAR</NavLink>
                                <NavLink to="/hokimlikka_murojaat" className="dropdown-item">HOKIMLIKKA MUROJAAT</NavLink>
                                <NavLink to="/hokimlik_tarixi" className="dropdown-item">HOKIMLIK TARIXI</NavLink>
                                <NavLink to="/ochiq_malumotlar" className="dropdown-item">OCHIQ MA’LUMOTLAR <br /> PF-6247 BO‘YICHA</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">HOKIMLIK FAOLIYATI</span>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/davlat_dasturi_doirasida" className="dropdown-item">DAVLAT DASTURI DOIRASIDA <br /> AMALGA OSHIRILGAN ISHLAR</NavLink>
                                <NavLink to="/maslahat_organlari" className="dropdown-item">MUVOFIQLASHTIRUVCHI MASLAHAT <br /> ORGANLAR RAHBARLARI <br />(KOMISSIYALAR, KENGASHLAR, QO'MITALAR)</NavLink>
                                <NavLink to="/idoralar_hamkorligi" className="dropdown-item">HOKIMLIKNING TASHKILOT VA <br /> IDORALAR BILAN HAMKORLIGI</NavLink>
                                <NavLink to="/xalqaro_hamkorlik" className="dropdown-item">XALQARO HAMKORLIK</NavLink>
                                <NavLink to="/investitsion_faoliyat" className="dropdown-item">INVESTITSION FAOLIYAT</NavLink>
                                <NavLink to="/loyihalar" className="dropdown-item">LOYIHALAR</NavLink>
                                <NavLink to="/tenderlar" className="dropdown-item">TENDERLAR</NavLink>
                                <NavLink to="/elonlar" className="dropdown-item">E`LONLAR</NavLink>
                                <NavLink to="/vakansiyalar" className="dropdown-item">VAKANSIYALAR</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">HUJJATLAR</span>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/qonunchilik" className="dropdown-item">Qonunchilik</NavLink>
                                <NavLink to="/davlat_dasturlari" className="dropdown-item">DAVLAT DASTURLARI</NavLink>
                                <NavLink to="/viloyat_dasturlari" className="dropdown-item">VILOYAT DASTURLARI</NavLink>
                                <NavLink to="/normativ_hujjatlar" className="dropdown-item">NORMATIV HUQUQIY HUJJATLAR</NavLink>
                                <NavLink to="/meyoriy_hujjatlar" className="dropdown-item">HOKIMLIKNING ME'YORIY <br /> HUQUQIY HUJJATLARI</NavLink>
                                <NavLink to="/xalqaro_shartnomalar" className="dropdown-item">XALQARO SHARTNOMALAR</NavLink>
                                <NavLink to="/tadbirkorlik_hujjatlari" className="dropdown-item">TADBIRKORLIK SUBYEKTLARIGA <br /> OID HUJJATLAR</NavLink>
                                <NavLink to="/yerlar_malumoti" className="dropdown-item">YERLAR TO'G'RISIDA MA'LUMOT</NavLink>
                                <NavLink to="/statistik_axborotlar" className="dropdown-item">STATISTIK, TAHLILIY, <br /> MA'RUZA VA AXBOROTLAR</NavLink>
                                <NavLink to="/hujjatlarni_muhokamalash" className="dropdown-item">ME'YORIY HUQUQIY HUJJATLAR <br /> LOYIHALARINI MUHOKAMALASH</NavLink>
                                <NavLink to="/kuchini_yoqotgan_hujjatlar" className="dropdown-item">O'Z KUCHINI YO'QOTGAN HUJJATLAR</NavLink>
                            </div>
                        </li>

                        <li className="nav-item"><NavLink to="/murojaat" className="navbar-nav-link p-2">MUROJAAT</NavLink></li>

                        <li className="nav-item"><NavLink to="/yoshlar_sektori" className="navbar-nav-link p-2">YOSHLAR SEKTORI</NavLink></li>

                        <li className="nav-item"><NavLink to="/korrupsiyaga_qarshi_kurashish" className="navbar-nav-link p-2">KORRUPSIYAGA QARSHI KURASHISH</NavLink></li>


                        <i onClick={() => setShow(!show)} className='icon-grid5' ></i>
                    </ul>
                </Fade>
            }


            {
                show && <Fade bottom>
                    <div className='navs'>
                        <ul style={{ width: "100%", fontSize: "20px", overflowY: "scroll" }}>
                            {
                                data.map((item, index) => {
                                    return (
                                        item.links ? (<div key={index} onClick={() => { setChild(item.links); setActiveIndex(index) }} className='links' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", color: index === activeIndex ? "#2196F3" : "#808080" }}>
                                            <span className="py-1 px-2 links" style={{ color: index === activeIndex ? "#2196F3" : "#808080" }}>{item.link} </span>
                                            <i className='icon-arrow-right13 mr-3' style={{ fontSize: "20px" }}></i>
                                        </div>) : <NavLink key={index} style={{ backgroundColor: "white", color: "#808080" }} onClick={() => setShow(false)} to={item.url} className="dropdown-item py-1 px-2">{item.name}</NavLink>
                                    )
                                })
                            }
                        </ul>

                        {/* <div></div> */}

                        <ul style={{ width: "100%", fontSize: "20px", overflowY: "auto" }}>
                            {
                                child.map((link) => {
                                    return (
                                        <NavLink style={{ backgroundColor: "white", color: "#808080" }} onClick={() => setShow(false)} to={link.url} className="dropdown-item py-1 px-2">{link.name}</NavLink>
                                    )
                                })
                            }
                        </ul>
                        <i onClick={() => setShow(!show)} className='icon-cross2'></i>
                    </div>


                </Fade>
            }

        </Wrapper >
    );
}

export default Navbar;

const Wrapper = styled.header`

    .navs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: calc(100vh - 300px);
        background-color: white;
        padding: 50px;

        ul{
            list-style: none;
        }

    }

    .icon-cross2, .icon-grid5 {
        position: absolute;
        top: 30px;
        right: 65px;
        color: #2196F3;
        font-size: 24px;
        cursor: pointer;
        transition: .3s;
    }

    .tillar i {
            font-size: 24px;
            cursor: pointer;
            transition: .3s;
    }
    

    .tillar a{
        cursor: pointer;
        color: #808080;

        &.active {
            border-bottom: 1px solid #2196F3;
            color: #2196F3;
    }    
        
    }


    .icon-sphere:hover {
        transform: rotateY(180deg);
    }

    .icon-grid5 {
        top: auto;
    }

    .icon-cross2:hover, .icon-grid5:hover {
        transform: rotate(180deg);
    }

    ul a, ul span {
        color: #808080;
        font-weight: 500;
    }

    ul a:hover, ul a:focus, ul span:hover, ul span:focus  {
        color: #2196F3 !important;
    }

    .links:hover{
        color: #2196F3 !important;
        cursor: pointer;
        background-color: #F4F4F4;

        span{
            color: #2196F3 !important;
        cursor: pointer;
        }
    }

    .links:active, .links:focus{
        color: #2196F3 !important;
        cursor: pointer;
    }

    .dropdown-menu-left a {
        background-color: white;
    }

    .right-panel {
        display: flex !important;
        flex-direction: row !important;
    }

    .buxoro-img, .logo {
        height: 100px;
    }

`
