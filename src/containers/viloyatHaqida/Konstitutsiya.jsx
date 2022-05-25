import React from 'react';
import styled from 'styled-components';

import konstitutsiya from "../../images/konstitutsiya.jpg"

const Konstitutsiya = () => {
    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>O‘ZBEKISTON RESPUBLIKASINING KONSTITUTSIYASI</div>

            <div className="col-xl-12 p-0">
                <div className="card blog-horizontal">
                    <div className="card-body">
                        <div className="card-img-actions mr-sm-3 mb-sm-0">
                            <a href="#course_preview" data-toggle="modal">
                                <img src={konstitutsiya} className="img-fluid card-img" alt="konstitutsiya" style={{ width: "400px", height: "300px", objectFit: "cover" }} />
                                {/* <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x"></i></span> */}
                            </a>
                        </div>

                        <div className="">
                            <h2 className="text-success m-0 p-0">O‘ZBEKISTON RESPUBLIKASINING KONSTITUTSIYASI</h2>

                            <p style={{ fontSize: "18px" }}>MUQADDIMA</p>
                        </div>

                        <p>O‘zbekiston xalqi:

                            inson huquqlariga va davlat suvereniteti g‘oyalariga sodiqligini tantanali ravishda e’lon qilib,

                            hozirgi va kelajak avlodlar oldidagi yuksak mas’uliyatini anglagan holda,

                            o‘zbek davlatchiligi rivojining tarixiy tajribasiga tayanib,

                            demokratiya va ijtimoiy adolatga sadoqatini namoyon qilib,

                            xalqaro huquqning umum e’tirof etilgan qoidalari ustunligini tan olgan holda,

                            respublika fuqarolarining munosib hayot kechirishlarini ta’minlashga intilib,

                            insonparvar demokratik huquqiy davlat barpo etishni ko‘zlab,

                            fuqarolar tinchligi va milliy totuvligini ta’minlash maqsadida,

                            o‘zining muxtor vakillari siymosida O‘zbekiston Respublikasining mazkur Konstitutsiyasini qabul qiladi.</p>

                    </div>

                    <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">

                        <div className="mt-2 mt-sm-0 ml-auto">
                            <a href="/">Batafsil <i className="icon-arrow-right8"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Konstitutsiya;

const Wrapper = styled.div`
    
`
