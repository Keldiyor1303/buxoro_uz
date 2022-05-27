import React, { useState } from 'react';
import styled from 'styled-components';


const Murojaat = () => {
    const [alert, setAlert] = useState({ open: false, color: "", title: "" });
    const [ism, setIsm] = useState("");
    const [tel, setTel] = useState("");
    const [mavzu, setMavzu] = useState("");
    const [tur, setTur] = useState("ariza");
    const [matn, setMatn] = useState("ariza");

    function submit() {
        if (matn.trim() === "") {
            setAlert({ open: true, color: "#ef5350", title: "Murojaat matni kiritilmagan" })
            setTimeout(() => setAlert({ open: false, color: "#ef5350", title: "" }), 3000)
        }

        if (mavzu.trim() === "") {
            setAlert({ open: true, color: "#ef5350", title: "Murojaat mavzusi kiritilmagan" })
            setTimeout(() => setAlert({ open: false, color: "#ef5350", title: "" }), 3000)
        }

        if (tel.trim() === "") {
            setAlert({ open: true, color: "#ef5350", title: "Telefon raqam kiritilmagan" })
            setTimeout(() => setAlert({ open: false, color: "#ef5350", title: "" }), 3000)
        }

        if (ism.trim() === "") {
            setAlert({ open: true, color: "#ef5350", title: "Familiya ism sharif kiritilmagan" })
            setTimeout(() => setAlert({ open: false, color: "#ef5350", title: "" }), 3000)
        }

        if (ism.trim() !== "" && tel.trim() !== "" && mavzu.trim() !== "" && matn.trim() !== "") {
            setAlert({ open: true, color: "#25b372", title: "Ma'lumotingiz jo'natildi" })
            setIsm("")
            setMatn("")
            setMavzu("")
            setTel("")
            setTimeout(() => setAlert({ open: false, color: "#25b372;", title: "" }), 3000)
        }
    }

    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Murojaat</div>

            <div class="form-group row">
                <label class="col-form-label col-lg-2">Familiya ism sharif:</label>
                <div class="col-lg-10">
                    <input value={ism} onChange={(e) => setIsm(e.target.value)} type="text" name="basic" class="form-control" placeholder="Familiya ism va sharifingizni kiriting" />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-form-label col-lg-2">Telefon raqam:</label>
                <div class="col-lg-10">
                    <input value={tel} onChange={(e) => setTel(e.target.value)} type="text" name="basic" class="form-control" placeholder="Telefon raqamingizni kiriting kiriting" />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-form-label col-lg-2">Murojaat mavzusi:</label>
                <div class="col-lg-10">
                    <input value={mavzu} onChange={(e) => setMavzu(e.target.value)} type="text" name="basic" class="form-control" placeholder="Murojaat mavzusini kiriting" />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-form-label col-lg-2">Murojaat turi:</label>
                <div class="col-lg-10">
                    <select value={tur} onChange={(e) => setTur(e.target.value)} name="default_select" class="form-control" style={{ color: "#808080" }}>
                        <option value="Ariza">Ariza</option>
                        <option value="Taklif">Taklif</option>
                        <option value="Shikoyat">Shikoyat</option>
                    </select>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-form-label col-lg-2">Murojaat matni:</label>
                <div class="col-lg-10">
                    <textarea value={matn} onChange={(e) => setMatn(e.target.value)} rows="10" cols="10" class="form-control" placeholder="Murojaat matnini kiriting:"></textarea>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "end" }}>
                <button onClick={submit} class="btn btn-secondary">Jo'natish <i class="icon-paperplane ml-2"></i></button>
            </div>

            {alert.open && <div class="alert" style={{ backgroundColor: `${alert.color}` }} role="alert">
                {alert.title}
            </div>}
        </Wrapper >
    );
}

export default Murojaat;

const Wrapper = styled.div`
    .alert {
        position: fixed;
        z-index: 1000;
        top: 100px;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
`