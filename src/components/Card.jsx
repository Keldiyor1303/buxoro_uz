import React from 'react';
import styled from 'styled-components';

import image from "../images/navruz.jpg"

const Card = () => {

    const data = [
        {
            id: 1,
            image: image,
            name: "Navruz bayrami",
            date: "21-mart",
            title: "O‘zbekistonda Navro‘z bayrami mamlakatdagi eng sevimli, rang-barang va qiziqarli bayramlardan biridir. U 21 mart kuni, kunduzi va qorong'uligi teng bo'lgan bahorgi tengkunlik kuni nishonlanadi. Uning tarixini uch ming yildan ko'proq vaqt oldin Eron shimoli-sharqidagi Xuroson viloyatiga borib taqalsa bo'ladi va u yerdan G'arbiy va Markaziy Osiyoga tarqaldi."
        },
        {
            id: 1,
            image: image,
            name: "Navruz bayrami",
            date: "21-mart",
            title: "O‘zbekistonda Navro‘z bayrami mamlakatdagi eng sevimli, rang-barang va qiziqarli bayramlardan biridir. U 21 mart kuni, kunduzi va qorong'uligi teng bo'lgan bahorgi tengkunlik kuni nishonlanadi. Uning tarixini uch ming yildan ko'proq vaqt oldin Eron shimoli-sharqidagi Xuroson viloyatiga borib taqalsa bo'ladi va u yerdan G'arbiy va Markaziy Osiyoga tarqaldi."
        }
    ]

    return (
        <Wrapper>

            <div className="sidebar sidebar-light sidebar-secondary sidebar-expand-lg">

                <button type="button" className="btn btn-sidebar-expand sidebar-control sidebar-secondary-toggle">
                    <i className="icon-arrow-right13"></i>
                </button>

                <div className="sidebar-content">

                    <div className="sidebar-section sidebar-section-body d-flex align-items-center">
                        <h5 className="mb-0">Sidebar</h5>
                        <div className="ml-auto">
                            <button type="button"
                                className="btn btn-outline-dark border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-secondary-toggle">
                                <i className="icon-transmission"></i>
                            </button>

                            <button type="button"
                                className="btn btn-outline-dark border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-secondary-toggle d-lg-none">
                                <i className="icon-cross2"></i>
                            </button>
                        </div>
                    </div>


                    <div className="sidebar-section">
                        <div className="sidebar-section-body pt-0">
                            <a href="/" className="btn btn-indigo btn-block">Compose mail</a>
                        </div>
                    </div>


                    <div className="sidebar-section">
                        <div className="sidebar-section-header">
                            <span className="font-weight-semibold">Navigation</span>
                        </div>

                        <ul className="nav nav-sidebar my-2" data-nav-type="accordion">
                            <li className="nav-item-header">Folders</li>
                            <li className="nav-item">
                                <a href="/" className="nav-link active">
                                    <i className="icon-drawer-in"></i>
                                    Inbox
                                    <span className="badge badge-success badge-pill ml-auto">32</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><i className="icon-drawer3"></i> Drafts</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><i className="icon-drawer-out"></i> Sent mail</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><i className="icon-stars"></i> Starred</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    <i className="icon-spam"></i>
                                    Spam
                                    <span className="badge badge-danger badge-pill ml-auto">99+</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><i className="icon-bin"></i> Trash</a>
                            </li>
                            <li className="nav-item-header">Labels</li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><span
                                    className="badge badge-mark border-primary align-self-center mr-3"></span> Facebook</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><span
                                    className="badge badge-mark border-success align-self-center mr-3"></span> Spotify</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><span
                                    className="badge badge-mark border-indigo align-self-center mr-3"></span> Twitter</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><span
                                    className="badge badge-mark border-pink align-self-center mr-3"></span> Dribbble</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </Wrapper >
    );
}

export default Card;

const Wrapper = styled.div`
    
`
