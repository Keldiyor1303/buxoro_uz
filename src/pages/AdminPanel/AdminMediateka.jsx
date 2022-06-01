import React from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';

const AdminMediateka = () => {
    return (
        <Wrapper>
            <div class="card">

                <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-solid nav-justified">
                        <li class="nav-item"><a href="#solid-justified-tab1" class="nav-link active" data-toggle="tab">FOTOGALEREYA</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab2" class="nav-link" data-toggle="tab">VIDEOGALEREYA</a></li>
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

export default AdminMediateka;

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
