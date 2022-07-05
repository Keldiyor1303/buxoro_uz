import React from 'react';
import styled from 'styled-components';
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';

import hokimiyat from "../../images/hokimiyat.jpg"

const UmumiyMalumot = () => {


    const images = [
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
        {
            original: hokimiyat,
            thumbnail: hokimiyat,
        },
    ];

    return (


        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Viloyat haqida umumiy ma`lumot</div>

            <ImageGallery items={images} autoPlay={true} showPlayButton={false} showBullets={true} showNav={true} className="p-0 m-0" />

            <p className='mt-3' style={{ fontSize: "18px", textAlign: "justify" }}>Buxoro viloyati — O`zbekiston Respublikasining viloyatlaridan biri. O`zbekiston viloyatlari ichida, chegarasining kattaligi bo`yicha Navoiydan keyin ikkinchi o`rinda turadi. 1938-yil 15-yanvarda tashkil etilgan. Buxoro viloyati hududi asosan Qizilqum cho‘lida joylashgan. Janubi-sharqini Zarafshon vodiysi egallagan. Shimoli-g`arbda Xorazm viloyati va Qoraqalpog‘iston Respublikasi, shimol va sharqdan Navoiy viloyati, janubi-sharqda Qashqadaryo viloyati, janubi-g`arbda Turkmaniston bilan chegaradosh. Maydoni 39,4 ming km2. Aholisi 1800 mingdan ziyod kishi (2017). Buxoro viloyati tarkibida 11 qishloq tumani: Buxoro, Vobkent, Jondor, Kogon, Olot, Peshku, Romitan, Shofirkon, Qorovulbozor, Qorako‘l, G‘ijduvon, 11 shahar (Buxoro, Galaosiyo, Vobkent, Gazli, Kogon, Olot, Romitan, Shofirkon, Qorako‘l, Qorovulbozor, G‘ijduvon), 540 ta mahalla fuqarolari yig‘ini bor.  Buxoro shahar aholisining etnik tarkibi asosan Uzbek, Rus, Fors(Eroniylar), Turkman, tojik, Ukrain, koreys, tatar va boshqalar tashkil etadi.
            </p>

            <div className="card card-body bg-light" style={{ borderRadius: "0" }}>
                <h3 className='text-secondary'>Senatning mutlaq vakolatlari</h3>
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

            <p className='mt-3' style={{ fontSize: "18px", textAlign: "justify" }}>

                SANOATI

                Sharofiddin Buxoriy (13—14-asrlar) mashhur „Chor kitob“ni tuzgan shofirkonlik ulug‘ chiqadi. Viloyatda, shuningdek 9 tarmoq gazetasi nashr etiladi. Buxoro viloyati da dastlabki radio eshittirishlari 1922-yildan boshlagan. O‘sha davrdan radio ijtimoiysiyosiy hayotga doyr mazmunli eshittirishlari bilan e`tibor qozonmoqdasr Buxoro viloyati radiosi oyiga 30 soatlik hajmda eshittirishlar beradi (2001).1924-yilda Turkistondagi dastlabki kino tashkiloti Buxoroda tuzildi (q. „Buxkino“). 1993 ylan Buxoro viloyati televideniyesi faoliyat ko‘rsatmoqdasr Studiya uchun maxsus bino kurilgan. Bir oylik ko‘rsatuvlar vaqgi 30 soatdan ortadi. Buxoroda „Istiqlol“ xususiy televideniyesi tashkil ztilgan (1995). Buxoro viloyati G‘ijduvon shla „Ark“ xususiy televideniyesi ham bor. Me`moriy yodgorliklari. Buxoro viloyati kddimiy davr, ilk va o‘rta asrlarda qurilgan me`moriy yodgorliklarga juda boy. Hozirgi vaqtda Buxoro davlat me`moriybadiiy muzeyqo‘rikxonasi hisobida 997 tarixiy yodgorliklar mavjud. Turondagi eng qad. yodgorliklardan biri sanalgan Buxoro hukmdorlarining qarorgohi — Buxoro arki (mil. av. 1-asr) bugungi kungacha saqlangan.Shahar yonidagi Fathobodda Sayfiddin Boharziy makbarasi (13-asr), Bayonkulixon makbarasi (14-asr), Buxoro tumanidagi Sumiton qishlog‘ida Chorbakr ansambli (16-asr), Hazrat bobo masjidi (18-asr), amirning yozgi qarorgohi — Sitorai Mohi Xosa saroyi (19—20-asrlar), Vobkent tumanida Vobkent minorasi (12-asr), Chashmai Ayyub hazirasi (1208), Xoja Mahmud Anjir Fag‘naviy maqbarasi (13-asr), Abdurahmon Vali maqbarasi (14-asr), Vobkent hammomi (16—17-asrlar), Toshmasjid (16—17-asrlar), So‘fidehqon xonaqosi (17—18-asrlar), Jondor tumanida Varaxsha shahar harobalari (7-asr), Mahmud Torobiy dahmasi (13-asr), Qizbibi majmuasi (15-asr), Kogon tumanidagi Qasri Orifonda Hazrat Bahouddin majmuasi, Abdulazizxon honaqosi va Dahmai Shohon (14—16-asrlar), Hazrat Mir Kulol maqbarasi (14-asr), Kogon shahrida Temiryo‘lchilar (sobiq Amir) saroyi (19—20-asrlar), Peshku tumanida Xo‘jam Bandi Kushod va Xo‘jam Sayd Po‘lat maqbaralari (18—19-asrlar), Romitan tumanida Xoja Ali Rometaniy — Xojai Azizon va Xoja Muhammad Boboyi Samosiy maqbaralari (14-asr), Mulla Mir Hakim xonaqosi, Shofirkon tumanida Vardonze shahar yodgorligi (6—7-asrlar), Hazor Hyp daxmasi (8-asr), Xoja Orif Revgariy — Mohitobon maqbarasi (13-asr), Qorovulbozor tumanida Bo‘zachi va Qorovulbozor sardobalari (17-asr), Qorako‘l tumanida Poykend shahar harobalari (8-asr). Shoburxon ota maqbarasi va masjidi, G‘ijduvon tumanida Hazrat Abduxoliq G‘ijduvoniy — Xojai Jahon (12-asr) masjidi va maqbarasi, Ulug‘bek madrasasi (15-asr), Toshmasjid va Dehqonbobo xonaqosi (15—16-asrlar), Xoja Soktare masjidi (17-asr), Chorsu masjidi (18— 19-asrlar) kabi noyob me`moriy obidalar saqlangan. Shuningdek, Buxoro vohasida Raboti Malik karvonsaroyi va Malik sardobasi (11-asr), Karmana shahrida Mirsaid Bahrom maqbarasi (10—11-asrlar), Qosim shayx xonaqosi (16-asr) mavjud.Bu tarixiy yodgorliklarda Sharq me`morlik an`analari o‘zaro uyg‘unlashib ketgan. O‘zbek xalqi tomonidan ikki ming yil mobaynida bunyod qilingan bu obidalar ajdodlarimizning boy iste`dodi va badiiy mahoratidan, katta yaratuvchilik qudratidan dalolat beradi.</p>
        </Wrapper>
    );
}

export default UmumiyMalumot;

const Wrapper = styled.div`
    background-color: #F4F4F4;
    width:100%;

    .image {
        width: 100%;
        object-fit: cover;
        padding: 0;
        margin: 0;
    }
`




