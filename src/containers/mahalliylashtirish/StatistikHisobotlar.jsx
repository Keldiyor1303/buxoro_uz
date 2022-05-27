import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import statistika from "../../images/statistika.jpg"
import pdf from "../../images/pdf.jpg"

const StatistikHisobotlar = () => {
    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Statistik hisobotlar</div>

            <h2 className="text-light bg-secondary rounded p-2 text-center" style={{ fontWeight: "500" }}>Бухоро вилоятида 2019  йил давомида  ҳудудий корхоналар томонидан ишлаб чиқарилган импорт ўрнини босувчи маҳаллийлаштирилган маҳсулотларлар  тўғрисида маълумот</h2>


            <div className="row mt-2">
                <div className="col-xl-12">
                    <div className="card blog-horizontal">
                        <div className="card-body">
                            <div className="card-img-actions mr-sm-3 mb-sm-0">
                                <a href="#course_preview" data-toggle="modal">
                                    <img src={statistika} className="img-fluid card-img" alt="" style={{ width: "400px", height: "300px", objectFit: "cover" }} />
                                </a>
                            </div>

                            <div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img src={pdf} alt="" style={{ width: "70px", height: "80px", objectFit: "cover" }} />
                                    <Link to="/" className='p-2 text-justify'> Бухоро вилоятида 2019  йил давомида  ҳудудий Бухоро вилоятида 2019  йил давомида  ҳудудий Бухоро вилоятида 2019  йил давомида  ҳудудийБухоро вилоятида 2019  йил давомида  ҳудудий корхоналар томонидан ишлаб чиқарилган импорт ўрнини босувчи маҳаллийлаштирилган маҳсулотларлар  тўғрисида маълумот  (Ҳудуд бўйича) (Размер 309 KB)</Link>
                                </div>

                                <br />

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img src={pdf} alt="" style={{ width: "70px", height: "80px", objectFit: "cover" }} />
                                    <Link to="/" className='px-2 text-justify'> Бухоро вилоятида 2019  йил давомида  ҳудудий Бухоро вилоятида 2019  йил давомида  ҳудудий Бухоро вилоятида 2019  йил давомида  ҳудудийБухоро вилоятида 2019  йил давомида  ҳудудий корхоналар томонидан ишлаб чиқарилган импорт ўрнини босувчи маҳаллийлаштирилган маҳсулотларлар  тўғрисида маълумот  (Ҳудуд бўйича) (Размер 309 KB)</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default StatistikHisobotlar;

const Wrapper = styled.div`
    
`