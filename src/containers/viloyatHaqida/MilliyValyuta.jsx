import React from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';

import oldiTomon from "../../images/100-1.png"
import orqaTomon from "../../images/100-2.png"

const MilliyValyuta = () => {
    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Milliy valyuta</div>


            <div className="card card-body bg-white" style={{ borderRadius: "0" }}>
                <h3 className='p-2 text-light rounded bg-secondary mb-2 text-center'>MILLIY VALYUTA</h3>
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

            <div class="col-lg-12 px-0 mt-3">
                <div class="card">

                    <div class="card-body">
                        <ul class="nav nav-tabs nav-tabs-solid nav-justified">
                            <li class="nav-item"><a href="#solid-justified-tab1" class="nav-link active" data-toggle="tab">Banknotlar</a></li>
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Tangalar</a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="#solid-justified-tab2" class="dropdown-item" data-toggle="tab">1994-2000 yillar</a>
                                    <a href="#solid-justified-tab3" class="dropdown-item" data-toggle="tab">2000-2004 yillar</a>
                                    <a href="#solid-justified-tab4" class="dropdown-item" data-toggle="tab">2018-yillar</a>
                                </div>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="solid-justified-tab1">
                                <Zoom bottom>
                                    <div class="card">
                                        <table class="table datatable-colvis-basic">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "20%" }}>Rasm</th>
                                                    <th style={{ width: "20%" }}>Birligi</th>
                                                    <th style={{ width: "20%" }}>O`lchami(mm)</th>
                                                    <th style={{ width: "20%" }}>Chiqarilgan yili</th>
                                                    <th style={{ width: "20%", textAlign: "center" }}>Muomaladan chiqarilishi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-success px-3 py-2">Muomilada</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-danger px-3 py-2">2000</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-success px-3 py-2">Muomilada</span></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </Zoom>
                            </div>

                            <div class="tab-pane fade" id="solid-justified-tab2">
                                <Zoom bottom>
                                    <div class="card">
                                        <table class="table datatable-colvis-basic">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "20%" }}>Rasm</th>
                                                    <th style={{ width: "20%" }}>Birligi</th>
                                                    <th style={{ width: "20%" }}>O`lchami(mm)</th>
                                                    <th style={{ width: "20%" }}>Chiqarilgan yili</th>
                                                    <th style={{ width: "20%", textAlign: "center" }}>Muomaladan chiqarilishi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-success px-3 py-2">Muomilada</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-danger px-3 py-2">2000</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-success px-3 py-2">Muomilada</span></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </Zoom>
                            </div>

                            <div class="tab-pane fade" id="solid-justified-tab3">
                                <Zoom bottom>
                                    <div class="card">
                                        <table class="table datatable-colvis-basic">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "20%" }}>Rasm</th>
                                                    <th style={{ width: "20%" }}>Birligi</th>
                                                    <th style={{ width: "20%" }}>O`lchami(mm)</th>
                                                    <th style={{ width: "20%" }}>Chiqarilgan yili</th>
                                                    <th style={{ width: "20%", textAlign: "center" }}>Muomaladan chiqarilishi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-success px-3 py-2">Muomilada</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-danger px-3 py-2">2000</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-success px-3 py-2">Muomilada</span></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </Zoom>
                            </div>

                            <div class="tab-pane fade" id="solid-justified-tab4">
                                <Zoom bottom>
                                    <div class="card">
                                        <table class="table datatable-colvis-basic">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "20%" }}>Rasm</th>
                                                    <th style={{ width: "20%" }}>Birligi</th>
                                                    <th style={{ width: "20%" }}>O`lchami(mm)</th>
                                                    <th style={{ width: "20%" }}>Chiqarilgan yili</th>
                                                    <th style={{ width: "20%", textAlign: "center" }}>Muomaladan chiqarilishi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-success px-3 py-2">Muomilada</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-danger px-3 py-2">2000</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src={oldiTomon} alt="" />
                                                        <img src={orqaTomon} alt="" />
                                                    </td>
                                                    <td>100 000</td>
                                                    <td>144 x 78</td>
                                                    <td>2019</td>
                                                    <td><span class="badge badge-success px-3 py-2">Muomilada</span></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper >
    );
}

export default MilliyValyuta;

const Wrapper = styled.div`
    td, tr {
        text-align: center;
    }
    
`
