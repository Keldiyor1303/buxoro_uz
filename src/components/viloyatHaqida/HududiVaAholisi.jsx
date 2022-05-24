import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

import xarita from "../../images/xarita.jpg"

const HududiVaAholisi = () => {

    const data = [
        {
            name: 'Buxoro shahar',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Buxoro shahar',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Buxoro shahar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Buxoro shahar',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Buxoro shahar',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Buxoro shahar',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Buxoro shahar',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Buxoro shahar',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Buxoro shahar',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Buxoro shahar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Buxoro shahar',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Buxoro shahar',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Buxoro shahar',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
    ];

    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Hududi va aholisi</div>

            <div className="col-xl-12 p-0">
                <div className="card blog-horizontal">
                    <div className="card-body">
                        <div className="card-img-actions mr-sm-3 mb-sm-0">
                            <a href="#course_preview" data-toggle="modal">
                                <img src={xarita} className="img-fluid card-img" alt="" style={{ width: "500px", height: "400px", objectFit: "cover" }} />
                                {/* <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x"></i></span> */}
                            </a>
                        </div>

                        <div className="">
                            <h2 className="text-secondary m-0 p-0">GEOGRAFIK JOYLASHUVI</h2>
                        </div>

                        <p>Buxoro viloyati hududining relyefi aksariyat geomorfologik xususiyatlariga ko‘ra birmuncha murakkab tekisliklardan iborat. Eng baland joyi Quljuqtov tizmasi. Quljuqtov bilan Zarafshon daryosi vodiysi oralig‘ida Oyoqog‘itma botig‘i joylashgan. Buxoro viloyatida quyidagi relyef ko‘rinishlarini ajratish mumkin:

                            Alohida ifodalangan past tog‘lar, platolar (Kuljuqtov, Tuzkoy tog‘i, Jarqoq, Saritosh);

                            Tekis yuzali plato va qirlar (Qorako‘l, Dengizko‘l, Uchbosh, Qoraqir);

                            Daryo va ko‘l yotqiziqlari bilan qoplangan va shamol taʼsirida vujudga kelgan akkumulyativ tekisliklar;

                            Alohida ifodalangan berk botiqlar (Qoraxotin, Oyoqog‘itma, Dengizko‘l);

                            Yassi yuzali vohalarda balandligi 5–15 m li tepalar uchraydi.</p>

                        <p>Tog‘lar asosan silur, devon, toshko‘mir, bo‘r, paleogen, neogen davrlari jinslaridan tuzilgan. Tekislik va qumliklar to‘rtlamchi geologik davr tabiiy omillari taʼsirida o‘zgargan. Foydali qazilmalardan Setalantepa, Jarqoq, Gazli, Uchqirda gaz, Kemachi, Zikri, O‘rtabuloqda neftgaz hamda grafit konlari, ohaktosh, bentonit (gilmoya), granit konlari topilgan. Buxoro viloyatida juda ko‘p mineral suv zaxiralari aniqlangan. Quljuqtov, Qoraxotin, Jing‘ildi,Oyoqog‘itma botig‘i atroflaridan topilgan suvlardan xo‘jalikda qisman foydalaniladi. Viloyat seysmik jihatdan 7 balli, faqat Gazli shahri atrofi 9 balli zilzila zonasiga kiradi. Iqlimi keskin kontinental: yozi issiq, uzoq, quruq, iyulning o‘rtacha harorati 28—32°, qumliklarda 60—70° gacha ko‘tariladi. yanvarning o‘rtacha harorati 0° dan —2° gacha yiliga 90–150 mm yog‘in tushadi. Asosan bahor va qishda yog‘adi. Vegetatsiya davri 220 kun. Buxoro viloyatining asosiy suv manbai — Amu-Buxoro mashina kanali. Quyimozor, To‘dakul, Sho‘rkul suv omborlarining ahamiyati katta. Bundan tashqari vohalar atrofida zovur va oqova suvlar tashlanadigan Dengizko‘l, Qoraqir, Katta Tuzkon va Devxona kabi ko‘llar mavjud. Buxoro viloyati bo‘yicha obikor yerlarning 94,4 % turli darajada sho‘rlangan. Cho‘l zonasida kam chirindili qo‘ng‘ir tusli sur, qumli ishgandan so‘ng, oziq-ovqat sanoatida tashkiliy va iqtisodiy islohotlar amalga oshirildi.</p>

                        <h2 className="text-secondary" style={{ textAlign: "center" }}>HUDUD VA AHOLI</h2>

                        <p>Oʻzbekiston viloyatlari ichida, chegasining kattaligi boʻyicha Navoiydan keyin ikkinchi oʻrinda turadi. 1938-yil 15-yanvarda tashkil etilgan. Buxoro viloyati hududi asosan Qizilqum cho‘lida joylashgan. Janubi-sharqini Zarafshon vodiysi egallagan. Shimoli-gʻarbda Xorazm viloyati va Qoraqalpog‘iston Respublikasi, shimol va sharqdan Navoiy viloyati, janubi-sharqda Qashqadaryo viloyati, janubi-gʻarbda Turkmaniston bilan chegaradosh.

                            Maydoni: 40,3 ming kv.km.

                            Aholi soni: 1 mln. 899 ming 500 kishidan ortiq (01.01.2019-yil)

                            Markazi: Buxoro shahri (39°46′ sh.k.  64°26′ shq.uz)

                            Ma`muriy bo`linishi: 11 ta tuman, 11 ta shahar va 62 ta shaharcha

                            Buxoro viloyati — Oʻzbekiston viloyatlari ichida, chegasining kattaligi boʻyicha Navoiy viloyatidan keyin ikkinchi oʻrinda turadi. Buxoro viloyati hududi asosan Qizilqum cho‘lida joylashgan. Janubi-sharqini Zarafshon vodiysi egallagan. Shimoli-gʻarbda Xorazm viloyati va Qoraqalpog‘iston Respublikasi, shimol va sharqdan Navoiy viloyati, janubi-sharqda Qashqadaryo viloyati, janubi-gʻarbda Turkmaniston bilan chegaradosh. Buxoro viloyati tarkibida 11 qishloq tumani: Buxoro, Vobkent, Jondor, Kogon, Olot, Peshku, Romitan, Shofirkon, Qorovulbozor, Qorako‘l, G‘ijduvon, 11 shahar (Buxoro, Galaosiyo, Vobkent, Gazli, Kogon, Olot, Romitan, Shofirkon, Qorako‘l, Qorovulbozor, G‘ijduvon), 3 shaharcha (Jondor, Zafarobod, Yangibozor), 121 qishloq fuqarolari yig‘ini bor. Buxoro shahar aholisining etnik tarkibi asosan o`zbek, rus, fors (eroniylar), turkman, tojik, ukrain, koreys, tatar va boshqalar tashkil etadi.</p>
                    </div>

                    <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">

                        <div className="mt-2 mt-sm-0 ml-auto">
                            <a href="/">Batafsil <i className="icon-arrow-right8"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%", height: "600px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" opacity={0} />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                        <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Wrapper>
    );
}

export default HududiVaAholisi;

const Wrapper = styled.div`
    
`