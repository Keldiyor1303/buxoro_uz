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
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown">
                            <NavLink to="/" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</NavLink>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/" className="dropdown-item">Action</NavLink>
                                <NavLink to="/" className="dropdown-item">Another action</NavLink>
                                <NavLink to="/" className="dropdown-item">Something else here</NavLink>
                                <NavLink to="/" className="dropdown-item">One more line</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</NavLink>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/" className="dropdown-item">Action</NavLink>
                                <NavLink to="/" className="dropdown-item">Another action</NavLink>
                                <NavLink to="/" className="dropdown-item">Something else here</NavLink>
                                <NavLink to="/" className="dropdown-item">One more line</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</NavLink>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/" className="dropdown-item">Action</NavLink>
                                <NavLink to="/" className="dropdown-item">Another action</NavLink>
                                <NavLink to="/" className="dropdown-item">Something else here</NavLink>
                                <NavLink to="/" className="dropdown-item">One more line</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</NavLink>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/" className="dropdown-item">Action</NavLink>
                                <NavLink to="/" className="dropdown-item">Another action</NavLink>
                                <NavLink to="/" className="dropdown-item">Something else here</NavLink>
                                <NavLink to="/" className="dropdown-item">One more line</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</NavLink>
                            <div className="dropdown-menu dropdown-menu-left">
                                <NavLink to="/" className="dropdown-item">Action</NavLink>
                                <NavLink to="/" className="dropdown-item">Another action</NavLink>
                                <NavLink to="/" className="dropdown-item">Something else here</NavLink>
                                <NavLink to="/" className="dropdown-item">One more line</NavLink>
                            </div>
                        </li>

                        <li className="nav-item"><NavLink to="/" className="navbar-nav-link">Link</NavLink></li>

                        <li className="nav-item"><NavLink to="/" className="navbar-nav-link">Link</NavLink></li>

                        <li className="nav-item"><NavLink to="/" className="navbar-nav-link">Link</NavLink></li>

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
                                <select className="form-control select" data-fouc>
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
    ul a {
        color: #808080;
    }

    ul a:hover, ul a:focus {
        color: #2196F3;;
        font-weight: 500;
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
