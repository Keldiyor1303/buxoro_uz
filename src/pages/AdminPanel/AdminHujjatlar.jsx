import React from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';

const AdminHujjatlar = () => {
    return (
        <Wrapper>
            <div class="card">

                <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-solid nav-justified">
                        <li class="nav-item"><a href="#solid-justified-tab1" class="nav-link active" data-toggle="tab">QONUNCHILIK</a></li>
                        <li class="nav-item" ><a href="#solid-justified-tab2" class="nav-link" data-toggle="tab">DAVLAT DASTURLARI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab3" class="nav-link" data-toggle="tab">VILOYAT DASTURLARI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab4" class="nav-link" data-toggle="tab">NORMATIV HUQUQIY HUJJATLAR</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab5" class="nav-link" data-toggle="tab">HOKIMLIKNING ME'YORIY HUQUQIY HUJJATLARI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab6" class="nav-link" data-toggle="tab">XALQARO SHARTNOMALAR</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab7" class="nav-link" data-toggle="tab">TADBIRKORLIK SUBYEKTLARIGA OID HUJJATLAR</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab8" class="nav-link" data-toggle="tab">YERLAR TO'G'RISIDA MA'LUMOT</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab9" class="nav-link" data-toggle="tab">STATISTIK, TAHLILIY, MA'RUZA VA AXBOROTLAR</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab10" class="nav-link" data-toggle="tab">ME'YORIY HUQUQIY HUJJATLAR LOYIHALARINI MUHOKAMALASH</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab11" class="nav-link" data-toggle="tab">O'Z KUCHINI YO'QOTGAN HUJJATLAR</a></li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="solid-justified-tab1">
                            <Zoom bottom>

                            </Zoom>
                        </div>

                        <div class="tab-pane fade" id="solid-justified-tab2">
                            <Zoom bottom>

                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default AdminHujjatlar;

const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 100px);

    .card {
        background-color: #F4F4F4;
        border-radius: 0;
        box-shadow: none;
        margin: 0;
        padding: 0;
    }

    li {
        height: 90px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        padding: 0;
        margin: 0;
    }

    li .active {
        height: 90px;
        background-color: #2196F3 !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`
