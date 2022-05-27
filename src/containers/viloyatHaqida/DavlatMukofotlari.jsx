import React from 'react';
import Zoom from 'react-reveal';
import styled from 'styled-components';

import unvon from "../../images/unvon.jpg"

const DavlatMukofotlari = () => {
    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Davlat mukofotlari</div>

            <div class="col-lg-12 px-0 mt-3">
                <div class="card">

                    <div class="card-body">
                        <ul class="nav nav-tabs nav-tabs-solid nav-justified">
                            <li class="nav-item"><a href="#solid-justified-tab1" class="nav-link active" data-toggle="tab">Unvonlar</a></li>
                            <li class="nav-item"><a href="#solid-justified-tab2" class="nav-link" data-toggle="tab">Ordenlar</a></li>
                            <li class="nav-item"><a href="#solid-justified-tab3" class="nav-link" data-toggle="tab">Medallar</a></li>
                            <li class="nav-item"><a href="#solid-justified-tab4" class="nav-link" data-toggle="tab">Mukofotlar</a></li>
                            <li class="nav-item"><a href="#solid-justified-tab5" class="nav-link" data-toggle="tab">Faxriy unvonlar</a></li>
                            {/* <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Tangalar</a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="#solid-justified-tab2" class="dropdown-item" data-toggle="tab">1994-2000 yillar</a>
                                    <a href="#solid-justified-tab3" class="dropdown-item" data-toggle="tab">2000-2004 yillar</a>
                                    <a href="#solid-justified-tab4" class="dropdown-item" data-toggle="tab">2018-yillar</a>
                                </div>
                            </li> */}
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="solid-justified-tab1" style={{ backgroundColor: "#F4F4F4" }}>
                                <Zoom bottom>

                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "16px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                </Zoom>
                            </div>

                            <div class="tab-pane fade" id="solid-justified-tab2" style={{ backgroundColor: "#F4F4F4" }}>
                                <Zoom bottom>

                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "16px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "16px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "16px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "16px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                </Zoom>
                            </div>

                            <div class="tab-pane fade" id="solid-justified-tab3" style={{ backgroundColor: "#F4F4F4" }}>
                                <Zoom bottom>

                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "16px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                </Zoom>
                            </div>

                            <div class="tab-pane fade" id="solid-justified-tab4" style={{ backgroundColor: "#F4F4F4" }}>
                                <Zoom bottom>

                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "16px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                </Zoom>
                            </div>

                            <div class="tab-pane fade" id="solid-justified-tab5" style={{ backgroundColor: "#F4F4F4" }}>
                                <Zoom bottom>

                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "8px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                    <div style={{ display: "flex", gap: "16px", backgroundColor: "#fff", padding: "8px", marginTop: "16px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                        <img src={unvon} alt="" />
                                        <p style={{ fontSize: "18px" }}>
                                            <a href="https://lex.uz/docs/3676244" target={"_blank"}>«O‘zbekiston Qahramoni»</a> unvoni. «O‘zbekiston Qahramoni» unvoni oliy darajadagi mukofot bo‘lib, O‘zbekiston Respublikasining fuqarolariga davlat va xalq oldidagi qahramonona jasorat ko‘rsatish bilan bog‘liq xizmatlari uchun beriladi.

                                            «O‘zbekiston Qahramoni» unvoni ayrim hollarda O‘zbekiston Respublikasi fuqarosi bo‘lmagan shaxslarga ham berilishi mumkin.

                                            «O‘zbekiston Qahramoni» unvoni bilan taqdirlangan shaxsga «Oltin Yulduz» medali va unvon berilganligi to‘g‘risidagi tegishli hujjat topshiriladi.
                                        </p>
                                    </div>


                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default DavlatMukofotlari;

const Wrapper = styled.div`
td, tr {
        text-align: center;
    }
    
`
