import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from "../../images/sektor-1.png"

const Login = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function login() {
        if (name === "keldiyor" && password === "13032003") {
            navigate("/admin/viloyat_haqida")
        } else {
            console.log("ishlamadi");
        }

    }

    return (
        <Wrapper>
            <div className="auth-page">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-xxl-3 col-lg-4 col-md-5">
                            <div className="auth-full-page-content d-flex p-sm-5 p-4">
                                <div className="w-100">
                                    <div className="d-flex flex-column h-100">
                                        <div className="mb-4 mb-md-5 text-center d-flex justify-content-center align-items-center" style={{ gap: "10px" }}>
                                            <img src={logo} alt="" height="80px" />
                                            <h2 className="logo-txt m-0 p-0" style={{ textTransform: "uppercase" }}>Buxoro viloyat <br /> hokimligi</h2>
                                        </div>
                                        <div className="auth-content my-auto">
                                            <div className="text-center">
                                                <h5 className="mb-0">Xush kelibsiz!</h5>
                                                <p className="text-muted mt-2">Buxoro.uz saytining admin paneliga.</p>
                                            </div>
                                            <div className="mt-4 pt-2">
                                                <div className="mb-3">
                                                    <label className="form-label">Foydalanuvchi nomi</label>
                                                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Foydalanuvchi nomini kiriting" />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="d-flex align-items-start">
                                                        <div className="flex-grow-1">
                                                            <label className="form-label">Parol</label>
                                                        </div>
                                                    </div>

                                                    <div className="input-group auth-pass-inputgroup">
                                                        <input onChange={(e) => setPassword(e.target.value)} type={show ? "text" : "password"} className="form-control" placeholder="Parolni kiriting" aria-label="Password" aria-describedby="password-addon" />
                                                        <button onClick={() => setShow(!show)} className="btn btn-light shadow-none ms-0" type="button"><i className="mdi mdi-eye-outline"></i></button>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <button onClick={login} className="btn btn-primary w-100 waves-effect waves-light">Kirish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-lg-8 col-md-7">
                            <div className="auth-bg pt-md-5 p-4 d-flex">
                                <div className="bg-overlay bg-primary"></div>
                                <ul className="bg-bubbles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                {/* <div className="row justify-content-center align-items-center">
                                    <div className="col-xl-7">
                                        <div className="p-0 p-sm-4 px-xl-0">
                                            <div id="reviewcarouselIndicators" className="carousel slide" data-bs-ride="carousel">
                                                <div className="carousel-indicators carousel-indicators-rounded justify-content-start ms-0 mb-0">
                                                    <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                </div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="testi-contain text-white">
                                                            <i className="bx bxs-quote-alt-left text-success display-6"></i>

                                                            <h4 className="mt-4 fw-medium lh-base text-white">“I feel confident
                                                                imposing change
                                                                on myself. It's a lot more progressing fun than looking back.
                                                                That's why
                                                                I ultricies enim
                                                                at malesuada nibh diam on tortor neaded to throw curve balls.”
                                                            </h4>
                                                            <div className="mt-4 pt-3 pb-5">
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-shrink-0">
                                                                        <img src="assets2/images/users/avatar-1.jpg" className="avatar-md img-fluid rounded-circle" alt="..." />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3 mb-4">
                                                                        <h5 className="font-size-18 text-white">Richard Drews
                                                                        </h5>
                                                                        <p className="mb-0 text-white-50">Web Designer</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <div className="testi-contain text-white">
                                                            <i className="bx bxs-quote-alt-left text-success display-6"></i>

                                                            <h4 className="mt-4 fw-medium lh-base text-white">“Our task must be to
                                                                free ourselves by widening our circle of compassion to embrace
                                                                all living
                                                                creatures and
                                                                the whole of quis consectetur nunc sit amet semper justo. nature
                                                                and its beauty.”</h4>
                                                            <div className="mt-4 pt-3 pb-5">
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-shrink-0">
                                                                        <img src="assets2/images/users/avatar-2.jpg" className="avatar-md img-fluid rounded-circle" alt="..." />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3 mb-4">
                                                                        <h5 className="font-size-18 text-white">Rosanna French
                                                                        </h5>
                                                                        <p className="mb-0 text-white-50">Web Developer</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <div className="testi-contain text-white">
                                                            <i className="bx bxs-quote-alt-left text-success display-6"></i>

                                                            <h4 className="mt-4 fw-medium lh-base text-white">“I've learned that
                                                                people will forget what you said, people will forget what you
                                                                did,
                                                                but people will never forget
                                                                how donec in efficitur lectus, nec lobortis metus you made them
                                                                feel.”</h4>
                                                            <div className="mt-4 pt-3 pb-5">
                                                                <div className="d-flex align-items-start">
                                                                    <img src="assets2/images/users/avatar-3.jpg"
                                                                        className="avatar-md img-fluid rounded-circle" alt="..." />
                                                                    <div className="flex-1 ms-3 mb-4">
                                                                        <h5 className="font-size-18 text-white">Ilse R. Eaton</h5>
                                                                        <p className="mb-0 text-white-50">Manager
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Login;

const Wrapper = styled.div`
    background-color: #F4F4F4;
    height: 100vh;
    overflow: hidden;    
`