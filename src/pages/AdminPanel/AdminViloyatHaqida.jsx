import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-reveal';
import styled from 'styled-components';

import API from '../../utils/config';
import UmumiyMalumot from './AdminViloyatHaqida/UmumiyMalumot';

const AdminViloyatHaqida = () => {

    const [allData, setAllData] = useState([])

    // useEffect(() => {
    //     console.log("sdsdsd", gallery);
    //     Object.values(gallery)?.map((item) => {
    //         return (
    //             setImages([...images, { original: URL.createObjectURL(item), thumbnail: URL.createObjectURL(item) }])
    //         )
    //     })
    // }, [gallery]);

    useEffect(() => {
        API.get("api/admin_panel/about_regions_views")
            .then((res) => {
                setAllData(res.data)
                console.log(res.data)
            }
            )
    }, [])

    function qwer() {
        API.post("api/admin_panel/about_regions_views/", {
            arr: [{
                title: "233lkvgfghfg;kl;kl;",
                content: "«Mustaqillik» olk;k;k;k;k;rdeni bilan O‘zbekiston Respublikasining fuqarolari mustaqil huquqiy",
                categor_id: 3
            }]
        }).then((res) => console.log(res))
    }









    return (
        <Wrapper>
            <div class="card">

                <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-solid nav-justified">
                        <li class="nav-item"><a href="#solid-justified-tab1" class="nav-link active" data-toggle="tab">UMUMIY MA`LUMOT</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab2" class="nav-link" data-toggle="tab">O'ZBEKISTON RESPUBLIKASI KONSTITUTSIYASI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab3" class="nav-link" data-toggle="tab">DAVLAT RAMZLARI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab4" class="nav-link" data-toggle="tab">MILLIY BAYRAMLAR</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab5" class="nav-link" data-toggle="tab">MILLIY VALYUTA</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab6" class="nav-link" data-toggle="tab">DAVLAT MUKOFOTLARI</a></li>
                        <li class="nav-item"><a href="#solid-justified-tab7" class="nav-link" data-toggle="tab">HUDUDI VA AHOLI</a></li>
                        <button onClick={qwer}>boss</button>

                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="solid-justified-tab1">
                            {/* <UmumiyMalumot data={allData[0]} /> */}

                        </div>

                        <div class="tab-pane fade" id="solid-justified-tab2">
                            <Zoom bottom>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div >

            {/* {show && <div className='modall'>
                <div style={{ width: "100%", minHeight: "90vh", maxHeight: "90vh", overflowY: "auto" }}>
                    <div class="modal-dialog modal-full">
                        <div class="modal-content" style={{ backgroundColor: "#F4F4F4" }}>
                            <div class="modal-header bg-primary text-white">
                                <h5 class="modal-title">QO'SHISH</h5>
                                <button onClick={() => setShow(false)} type="button" class="close" data-dismiss="modal"><i className='icon-cross2'></i></button>
                            </div>

                            <div class="modal-body">
                                <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
                                    <div style={{ width: "100%" }}>
                                        <label>Sarlavha matni</label>
                                        <input type="text" placeholder="Sarlavha matnini kiriting" class="form-control" />
                                    </div>

                                    <div style={{ width: "100%" }}>
                                        <label>Sarlavha rasmi</label>
                                        <div class="custom-file">
                                            <input type="file" onChange={(e) => setImage(e.target.files[0])} class="custom-file-input" id="customFile" />
                                            <label class="custom-file-label" for="customFile">{image ? "Rasm tanlandi" : "Rasm tanlash"}</label>
                                        </div>
                                    </div>

                                    <div style={{ width: "100%" }}>
                                        <label>Rasmlar galeriyasi</label>
                                        <div class="custom-file">
                                            <input type="file" multiple onChange={(e) => setGallery(e.target.files)} class="custom-file-input" id="customFile" />
                                            <label class="custom-file-label" for="customFile">{gallery.length > 0 ? gallery.length + " ta rasm tanlandi" : "Rasmlar tanlash"}</label>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>

                                    <button onClick={() => added("textarea")} className='btn btn-primary w-100'>Textarea</button>

                                    <div className='w-100'>
                                        <button onClick={() => setShowTableParam(!showTableParam)} className='btn btn-primary w-100'>Table</button>

                                        {showTableParam && <div class="col-lg-12" style={{ backgroundColor: "#F4F4F4", padding: "16px" }}>
                                            <div class="col-lg-12">
                                                <label>Ustunlar soni:</label>
                                                <input onChange={(e) => setCols(e.target.value)} type="number" placeholder="2" class="form-control" defaultValue={2} />
                                            </div>
                                            <div class="col-lg-12 mt-2">
                                                <label>Qatorlar soni:</label>
                                                <input onChange={(e) => setRows(e.target.value)} type="number" placeholder="2" class="form-control" defaultValue={2} />
                                            </div>

                                            <div class="col-lg-12 mt-2">
                                                <button onClick={() => { added("table"); setShowTableParam(false) }} className='btn btn-primary w-100'>qo`shish</button>
                                            </div>
                                        </div>}
                                    </div>

                                    <div className='w-100'>
                                        <button onClick={() => setShowUlParam(!showUlParam)} className='btn btn-primary w-100'>Ro`yxat</button>

                                        {showUlParam && <div class="col-lg-12" style={{ backgroundColor: "#F4F4F4", padding: "16px" }}>
                                            <div class="col-lg-12">
                                                <label>Malumotlar soni:</label>
                                                <input onChange={(e) => setUlRows(e.target.value)} type="number" placeholder="2" class="form-control" defaultValue={2} />
                                            </div>

                                            <div class="col-lg-12 mt-2">
                                                <button onClick={() => { added("ul"); setShowUlParam(false) }} className='btn btn-primary w-100'>qo`shish</button>
                                            </div>
                                        </div>}
                                    </div>

                                    <button className='btn btn-primary w-100' onClick={() => added("todo")}>Eslatma</button>

                                    <button className='btn btn-primary w-100' onClick={() => added("image")}>Rasm</button>
                                </div>
                            </div>

                            <div className="korinish px-3">
                                {
                                    addedData.map((element, indexData) => {
                                        return (
                                            <>
                                                {element.name === "textarea" && (
                                                    <textarea onChange={(e) => ozgartir2(e.target.value, indexData)} rows="3" cols="3" class="form-control mb-3" defaultValue={textarea}></textarea>
                                                )}

                                                {element.name === "table" && (
                                                    <table class="table bg-white datatable-colvis-basic table-hover border table-bordered mb-3">
                                                        {
                                                            element?.tableData.map((malumot, index) => {
                                                                return (
                                                                    index === 0 ? (
                                                                        <thead key={index}>
                                                                            <tr>
                                                                                {Object.values(malumot).map((d, index2) => (
                                                                                    <th key={index2}>
                                                                                        <input style={{ border: "none", width: "100%", outline: "none", backgroundColor: "transparent", textAlign: "center" }} onChange={(e) => ozgartir(e.target.value, indexData, index, index2)} defaultValue={d}></input>
                                                                                    </th>
                                                                                ))}

                                                                            </tr>
                                                                        </thead>
                                                                    ) : (
                                                                        <tbody>
                                                                            <tr key={index}>
                                                                                {Object.values(malumot).map((d, index2) => (
                                                                                    <td key={index2}>
                                                                                        <textarea style={{ border: "none", width: "100%", outline: "none", backgroundColor: "transparent", textAlign: "center" }} onChange={(e) => ozgartir(e.target.value, indexData, index, index2)} defaultValue={d}></textarea>
                                                                                    </td>
                                                                                ))}
                                                                            </tr>
                                                                        </tbody>
                                                                    )
                                                                )
                                                            })
                                                        }
                                                    </table>

                                                )}

                                                {element.name === "ul" && (
                                                    <div className="card card-body bg-white mb-3 p-2" style={{ borderRadius: "0" }}>
                                                        <div className="list-feed">
                                                            {
                                                                element?.ulData.map((malumot, index2) => {
                                                                    return (
                                                                        <div className="list-feed-item">
                                                                            <input onChange={(e) => ozgartir3(e.target.value, indexData, index2)} defaultValue={malumot} style={{ border: "none", width: "100%", outline: "none", backgroundColor: "transparent", textAlign: "star" }} ></input>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                )}

                                                {element.name === "todo" && (
                                                    <div class="card border-left-3 bg-white border-left-primary rounded-left-0 mb-3">
                                                        <textarea onChange={(e) => ozgartir2(e.target.value, indexData)} style={{ padding: "8px", border: "none", width: "100%", outline: "none", backgroundColor: "transparent", textAlign: "star" }} defaultValue={todo}></textarea>
                                                    </div>
                                                )}

                                                {element.name === "image" && (
                                                    <div className='mb-3' style={{ width: "100%" }}>
                                                        <label>Rasmni tanlang</label>
                                                        <div class="custom-file">
                                                            <input type="file" onChange={(e) => ozgartir4(e.target.files[0], indexData)} class="custom-file-input" id="customFile" />
                                                            <label class="custom-file-label" for="customFile">{image ? "Rasm tanlandi" : "Rasm tanlash"}</label>
                                                        </div>
                                                    </div>
                                                )

                                                }

                                            </>
                                        )
                                    })
                                }
                            </div>


                            {addedData.length >= 1 && <div className='px-3'>
                                <button onClick={() => setNatija(!natija)} className='btn btn-primary mb-3 w-100'>Natijani ko'rish</button>
                            </div>}

                            {natija && <div className='px-3'>
                                <ImageGallery items={images} autoPlay={true} showPlayButton={false} showBullets={true} showNav={true} className="p-0 m-0" />
                                <p className='text-secondary px-3' style={{ fontSize: "18px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis ut, officiis deleniti suscipit praesentium dolores quaerat totam amet nostrum, ipsum cupiditate accusamus! Qui corrupti vel quisquam quam alias veritatis aspernatur et voluptates beatae temporibus, facilis perspiciatis? Dolorum, voluptate saepe, rerum eum suscipit praesentium debitis officia qui magni esse dolorem consequatur. Reiciendis consectetur obcaecati fugit aspernatur, architecto dolorem neque fuga, omnis sunt, dicta non? A sapiente nobis perspiciatis expedita ratione quos inventore laudantium exercitationem maiores. In suscipit perferendis ducimus, at accusamus reiciendis ipsa, consectetur totam adipisci facilis id provident nulla delectus dolorum magnam similique ab autem deserunt ex quos a consequuntur aperiam. Debitis labore vel ea repellat, quia quae voluptatibus alias sed earum odit fugit soluta repudiandae natus laborum veritatis laudantium, ullam aperiam repellendus tenetur impedit, qui architecto commodi eaque sequi! Perspiciatis expedita quisquam ipsam, quia omnis quo veniam vero officia officiis esse sint iusto in culpa quod exercitationem assumenda iure pariatur molestiae suscipit accusamus odio? Quisquam quo eveniet asperiores at a. Dignissimos quasi quidem fuga quas atque enim animi vitae a, ipsam molestias id ex est quis architecto dolorem! Necessitatibus laboriosam corrupti voluptate hic suscipit perferendis dolore laudantium in quibusdam odio. Nemo doloribus dignissimos error minima, illo officia consequatur!</p>

                                {
                                    addedData.map((element, indexData) => {
                                        return (
                                            <>
                                                {element.name === "textarea" && (
                                                    <p class="mb-3">{element.title}</p>
                                                )}

                                                {element.name === "table" && (
                                                    <table class="table bg-white datatable-colvis-basic table-hover border table-bordered mb-3">
                                                        {
                                                            element?.tableData.map((malumot, index) => {
                                                                return (
                                                                    index === 0 ? (
                                                                        <thead key={index}>
                                                                            <tr>
                                                                                {Object.values(malumot).map((d, index2) => (
                                                                                    <th key={index2}> {d} </th>
                                                                                ))}

                                                                            </tr>
                                                                        </thead>
                                                                    ) : (
                                                                        <tbody>
                                                                            <tr key={index}>
                                                                                {Object.values(malumot).map((d, index2) => (
                                                                                    <td key={index2}> {d} </td>
                                                                                ))}
                                                                            </tr>
                                                                        </tbody>
                                                                    )
                                                                )
                                                            })
                                                        }
                                                    </table>

                                                )}

                                                {element.name === "ul" && (
                                                    <div className="card card-body mb-3 p-2" style={{ border: "none" }}>
                                                        <div className="list-feed" >
                                                            {
                                                                element?.ulData.map((malumot, index2) => {
                                                                    return (
                                                                        <div className="list-feed-item">
                                                                            <p>{malumot}</p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                )}

                                                {element.name === "todo" && (
                                                    <div class="card border-left-3 bg-white border-left-primary rounded-left-0 mb-3 d-flex align-items-star justify-content-center p-2">
                                                        <p className='m-0 p-0' style={{ textAlign: "justify" }}>{element.title}</p>
                                                    </div>
                                                )}

                                                {element.name === "image" && (
                                                    <div className='mb-3'>
                                                        <img src={URL.createObjectURL(element.image)} alt="" />

                                                    </div>
                                                )

                                                }

                                            </>
                                        )
                                    })
                                }
                            </div>}
                        </div>
                    </div>
                </div>
            </div>} */}
        </Wrapper >
    );
}


export default AdminViloyatHaqida;

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

    td, tr {
        text-align: center;
        cursor: pointer;
    }

    img {
        width: 200px;
    }

    .modall {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6 );
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        .row {
            height: 100px !important;
        }

        .input-group {
            width: 80%;
            height: 80%;
            background-color: #F4F4F4;
            border-radius: 5px;
        }
    }

    .toliq p {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
    }

    .modal-content {
        border: none;
    }

    .list-feed-item:before {
        border: 2px solid  #2196F3;
        background-color:  #2196F3;
    }
    
    .list-feed-item:after {
        border-left: 1px solid #2196F3;
    border-right: 1px solid #2196F3;
    }


`
