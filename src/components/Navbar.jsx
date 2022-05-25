import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from "../images/logo_nav.png"
import buxoro from "../images/bux.png"

const Navbar = () => {
    return (
        <Wrapper>
            <div className="navbar navbar-expand-xl sticky-top"
                style={{ backgroundColor: "#fff", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>


                <div className="d-xl-none">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-demo5-mobile">
                        <i className="icon-grid3"></i>
                    </button>
                </div>

                <div className="navbar-collapse collapse" id="navbar-demo5-mobile">
                    <ul className="navbar-nav" style={{ display: "flex", maxWidth: "1000px", flexWrap: "wrap" }}>

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

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">MEDIATEKA</span>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/fotogalereya" className="dropdown-item">FOTOGALEREYA</NavLink>
                                <NavLink to="/videogalereya" className="dropdown-item">VIDEOGALEREYA</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">AXBOROT XIZMATI</span>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/yangiliklar" className="dropdown-item">YANGILIKLAR</NavLink>
                                <NavLink to="/hokimlar_nutqi" className="dropdown-item">HOKIMNING NUTQ VA MA'RUZALARI</NavLink>
                                <NavLink to="/matbuot_anjumanlari" className="dropdown-item">MATBUOT ANJUMANLARI</NavLink>
                                <NavLink to="/majlis_tartibi" className="dropdown-item">OCHIQ MAJLISLARDA HOZIR <br /> BO’LISH TARTIBI</NavLink>
                                <NavLink to="/axborotlar_ruyxati" className="dropdown-item">WEB SAYTDA JOYLASHTIRILADIGAN <br /> AXBOROTLAR RO’YXATI</NavLink>
                                <NavLink to="/press_relizlar" className="dropdown-item">PRESS-RELIZLAR</NavLink>
                                <NavLink to="/surovlarni_qabul_qilish" className="dropdown-item">AXBOROT OLISHGA DOIR SO’ROVLARNI <br /> QABUL QILISH TARTIBI</NavLink>
                                <NavLink to="/akkreditatsiya" className="dropdown-item">AKKREDITATSIYA O'TKAZISH</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <span className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">MAHALLIYLASHTIRISH</span>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/qonunchilik" className="dropdown-item">QONUNCHILIK</NavLink>
                                <NavLink to="/statistik_hisobotlar" className="dropdown-item">STATISTIK HISOBOT</NavLink>
                                <NavLink to="/hududiy_import_tahlili" className="dropdown-item">HUDUDIY IMPORT TAHLILI</NavLink>
                            </div>
                        </li>

                        <li className="nav-item"><NavLink to="/murojaat" className="navbar-nav-link">Link</NavLink></li>

                        <li className="nav-item"><NavLink to="/yoshlar_sektori" className="navbar-nav-link">Link</NavLink></li>

                        <li className="nav-item"><NavLink to="/korrupsiyaga_qarshi_kurashish" className="navbar-nav-link">Link</NavLink></li>

                    </ul>

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

                        <li className="nav-item">
                            <div className="form-group m-0">
                                <select className="form-control select">
                                    <option value="AL">UZB</option>
                                    <option value="AR">ЎЗБ</option>
                                    <option value="KS">RU</option>
                                </select>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>

            <div class="d-flex justify-content-between align-items-center px-3 py-3">
                <div class="d-flex align-items-center gap-2">
                    <img src={logo} alt="logo" class="logo" />
                    <h1>BUXORO VILOYATI HOKIMLIGI</h1>
                </div>
                <img src={buxoro} alt="buxoro" class="buxoro-img" />
            </div>
            <hr style={{ margin: "0" }} />

        </Wrapper >
    );
}

export default Navbar;

const Wrapper = styled.header`
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
