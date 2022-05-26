import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import logo from "../images/logo_nav.png"
import buxoro from "../images/bux.png"

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <Wrapper>
            <div className="navbar navbar-expand-xl sticky-top"
                style={{ backgroundColor: "#fff", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "50px", width: "100%" }}>


                <div className="navbar-nav" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className='tillar' style={{ display: "flex", gap: "16px" }}>
                        <i className='icon-sphere'></i>
                        <span className='active'>O'zbekcha</span>
                        <span>Ўзбекча</span>
                        <span>English</span>

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
                <div class="d-flex align-items-center gap-2">
                    <img src={logo} alt="logo" class="logo" />
                    <h1>BUXORO VILOYATI HOKIMLIGI</h1>
                </div>
                <img src={buxoro} alt="buxoro" class="buxoro-img" />
            </div>
            <hr style={{ margin: "0" }} />

            {
                !show && <Fade bottom>
                    <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", alignItems: "center", position: "relative", zIndex: "999", marginBottom: "0" }}>
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
                    <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", alignItems: "start", backgroundColor: "white", height: "calc(100vh - 200px)", padding: "20px 60px", position: "relative" }}>
                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle p-2" data-toggle="dropdown">VILOYAT HAQIDA</span>
                            <div className="">
                                <NavLink style={{ width: "200px" }} to="/umumiy_malumot" className="dropdown-item py-1 px-2">UMUMIY MA'LUMOT</NavLink>
                                <NavLink to="/konstitutsiya" className="dropdown-item py-1 px-2">O'ZBEKISTON RESPUBLIKASI <br /> KONSTITUTSIYASI</NavLink>
                                <NavLink to="/davlat_ramzlari" className="dropdown-item py-1 px-2">DAVLAT RAMZLARI</NavLink>
                                <NavLink to="/milliy_bayramlar" className="dropdown-item py-1 px-2">MILLIY BAYRAMLAR</NavLink>
                                <NavLink to="/milliy_valyuta" className="dropdown-item py-1 px-2">MILLIY VALYUTA</NavLink>
                                <NavLink to="/davlat_mukofotlari" className="dropdown-item py-1 px-2">DAVLAT MUKOFOTLARI</NavLink>
                                <NavLink to="/hududi_va_aholisi" className="dropdown-item py-1 px-2">HUDUDI VA AHOLI</NavLink>
                            </div>

                            <li className="nav-item dropdown mt-4">
                                <span className="navbar-nav-link dropdown-toggle p-2" data-toggle="dropdown">MAHALLIYLASHTIRISH</span>
                                <div className="">
                                    <NavLink to="/qonunchilik" className="dropdown-item py-1 px-2">QONUNCHILIK</NavLink>
                                    <NavLink to="/statistik_hisobotlar" className="dropdown-item py-1 px-2">STATISTIK HISOBOT</NavLink>
                                    <NavLink to="/hududiy_import_tahlili" className="dropdown-item py-1 px-2">HUDUDIY IMPORT TAHLILI</NavLink>
                                </div>
                            </li>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle p-2" data-toggle="dropdown">HOKIMLIK TO`G`RISIDA</span>
                            <div className="">
                                <NavLink to="/hokimlik_vazifalari" className="dropdown-item py-1 px-2">HOKIMLIK FUNKSIYA VA VAZIFALARI</NavLink>
                                <NavLink to="/xalq_deputatlari_kengashi" className="dropdown-item py-1 px-2">XALQ DEPUTATLARI BUXORO <br /> VILOYATI KENGASHI</NavLink>
                                <NavLink to="/rahbariyat" className="dropdown-item py-1 px-2">RAHBARIYAT</NavLink>
                                <NavLink to="/sxematik_korinish" className="dropdown-item py-1 px-2">TARKIBIY TUZILMANING <br /> SXEMATIK KO'RINISHI</NavLink>
                                <NavLink to="/tarkibiy_bolinmalar" className="dropdown-item py-1 px-2">TARKIBIY BO'LINMALAR</NavLink>
                                <NavLink to="/hokimlikka_murojaat" className="dropdown-item py-1 px-2">HOKIMLIKKA MUROJAAT</NavLink>
                                <NavLink to="/hokimlik_tarixi" className="dropdown-item py-1 px-2">HOKIMLIK TARIXI</NavLink>
                                <NavLink to="/ochiq_malumotlar" className="dropdown-item py-1 px-2">OCHIQ MA’LUMOTLAR <br /> PF-6247 BO‘YICHA</NavLink>
                            </div>


                            <li className="nav-item dropdown mt-3">
                                <span className="navbar-nav-link dropdown-toggle p-2" data-toggle="dropdown">MEDIATEKA</span>
                                <div className="">
                                    <NavLink to="/fotogalereya" className="dropdown-item py-1 px-2">FOTOGALEREYA</NavLink>
                                    <NavLink to="/videogalereya" className="dropdown-item py-1 px-2">VIDEOGALEREYA</NavLink>
                                </div>
                            </li>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle p-2" data-toggle="dropdown">HOKIMLIK FAOLIYATI</span>
                            <div className="">
                                <NavLink to="/davlat_dasturi_doirasida" className="dropdown-item py-1 px-2">DAVLAT DASTURI DOIRASIDA <br /> AMALGA OSHIRILGAN ISHLAR</NavLink>
                                <NavLink to="/maslahat_organlari" className="dropdown-item py-1 px-2">MUVOFIQLASHTIRUVCHI MASLAHAT <br /> ORGANLAR RAHBARLARI <br />(KOMISSIYALAR, KENGASHLAR, QO'MITALAR)</NavLink>
                                <NavLink to="/idoralar_hamkorligi" className="dropdown-item py-1 px-2">HOKIMLIKNING TASHKILOT VA <br /> IDORALAR BILAN HAMKORLIGI</NavLink>
                                <NavLink to="/xalqaro_hamkorlik" className="dropdown-item py-1 px-2">XALQARO HAMKORLIK</NavLink>
                                <NavLink to="/investitsion_faoliyat" className="dropdown-item py-1 px-2">INVESTITSION FAOLIYAT</NavLink>
                                <NavLink to="/loyihalar" className="dropdown-item py-1 px-2">LOYIHALAR</NavLink>
                                <NavLink to="/tenderlar" className="dropdown-item py-1 px-2">TENDERLAR</NavLink>
                                <NavLink to="/elonlar" className="dropdown-item py-1 px-2">E`LONLAR</NavLink>
                                <NavLink to="/vakansiyalar" className="dropdown-item py-1 px-2">VAKANSIYALAR</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle p-2" data-toggle="dropdown">HUJJATLAR</span>
                            <div className="">
                                <NavLink to="/qonunchilik" className="dropdown-item py-1 px-2">Qonunchilik</NavLink>
                                <NavLink to="/davlat_dasturlari" className="dropdown-item py-1 px-2">DAVLAT DASTURLARI</NavLink>
                                <NavLink to="/viloyat_dasturlari" className="dropdown-item py-1 px-2">VILOYAT DASTURLARI</NavLink>
                                <NavLink to="/normativ_hujjatlar" className="dropdown-item py-1 px-2">NORMATIV HUQUQIY HUJJATLAR</NavLink>
                                <NavLink to="/meyoriy_hujjatlar" className="dropdown-item py-1 px-2">HOKIMLIKNING ME'YORIY <br /> HUQUQIY HUJJATLARI</NavLink>
                                <NavLink to="/xalqaro_shartnomalar" className="dropdown-item py-1 px-2">XALQARO SHARTNOMALAR</NavLink>
                                <NavLink to="/tadbirkorlik_hujjatlari" className="dropdown-item py-1 px-2">TADBIRKORLIK SUBYEKTLARIGA <br /> OID HUJJATLAR</NavLink>
                                <NavLink to="/yerlar_malumoti" className="dropdown-item py-1 px-2">YERLAR TO'G'RISIDA MA'LUMOT</NavLink>
                                <NavLink to="/statistik_axborotlar" className="dropdown-item py-1 px-2">STATISTIK, TAHLILIY, <br /> MA'RUZA VA AXBOROTLAR</NavLink>
                                <NavLink to="/hujjatlarni_muhokamalash" className="dropdown-item py-1 px-2">ME'YORIY HUQUQIY HUJJATLAR <br /> LOYIHALARINI MUHOKAMALASH</NavLink>
                                <NavLink to="/kuchini_yoqotgan_hujjatlar" className="dropdown-item py-1 px-2">O'Z KUCHINI YO'QOTGAN HUJJATLAR</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle p-2" data-toggle="dropdown">AXBOROT XIZMATI</span>
                            <div className="">
                                <NavLink to="/yangiliklar" className="dropdown-item py-1 px-2">YANGILIKLAR</NavLink>
                                <NavLink to="/hokimlar_nutqi" className="dropdown-item py-1 px-2">HOKIMNING NUTQ VA MA'RUZALARI</NavLink>
                                <NavLink to="/matbuot_anjumanlari" className="dropdown-item py-1 px-2">MATBUOT ANJUMANLARI</NavLink>
                                <NavLink to="/majlis_tartibi" className="dropdown-item py-1 px-2">OCHIQ MAJLISLARDA HOZIR <br /> BO’LISH TARTIBI</NavLink>
                                <NavLink to="/axborotlar_ruyxati" className="dropdown-item py-1 px-2">WEB SAYTDA JOYLASHTIRILADIGAN <br /> AXBOROTLAR RO’YXATI</NavLink>
                                <NavLink to="/press_relizlar" className="dropdown-item py-1 px-2">PRESS-RELIZLAR</NavLink>
                                <NavLink to="/surovlarni_qabul_qilish" className="dropdown-item py-1 px-2">AXBOROT OLISHGA DOIR <br /> SO’ROVLARNI QABUL <br /> QILISH TARTIBI</NavLink>
                                <NavLink to="/akkreditatsiya" className="dropdown-item py-1 px-2">AKKREDITATSIYA O'TKAZISH</NavLink>
                            </div>
                        </li>

                        <i onClick={() => setShow(!show)} className='icon-cross2'></i>
                    </ul>
                </Fade>
            }

        </Wrapper >
    );
}

export default Navbar;

const Wrapper = styled.header`
    .icon-cross2, .icon-grid5 {
        position: absolute;
        top: 30px;
        right: 50px;
        font-size: 24px;
        cursor: pointer;
        transition: .3s
    }

    .icon-sphere {
        font-size: 24px;
        cursor: pointer;
        transition: .3s
    }

    .tillar * {
        cursor: pointer;
    }

    .tillar .active {
        border-bottom: 1px solid #2196F3;
        color: #2196F3;
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
        color: #2196F3;
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
