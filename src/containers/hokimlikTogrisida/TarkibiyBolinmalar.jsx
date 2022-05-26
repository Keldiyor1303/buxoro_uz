import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import s1 from "../../images/s1.jpg"
import s2 from "../../images/s2.jpg"
import { Zoom } from 'react-reveal';

const data1 = [
    {
        id: 0,
        name: "Viloyat hokimi",
        title: "Viloyat hokimi viloyatda oliy mansabdor shaxs bo‘lib, ayni bir vaqtda hududda vakillik va ijroiya hokimiyatini boshqaradi. O‘z vakolatlarini yakkaboshchilik asosida amalga oshiradi.Viloyat hokimi O‘zbekiston Respublikasi Konstitutsiyasi, “Mahalliy davlat hokimiyati to‘g‘risida”gi O‘zbekiston Respublikasining Qonuni, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari, farmoyishlari hamda Vazirlar Mahkamasining qarorlari va farmoyishlari bilan belgilangan vakolatlar doirasida ijroiya hokimiyati faoliyatini tashkil etadi  Viloyatni ijtimoiy- iqtisodiy rivojlantirish vazifalari amalga oshirilishini, joylarda qonunlar, O‘zbekiston Respublikasi Oliy Majlisi palatalari qarorlari, O‘zbekiston Respublikasi Prezidenti farmonlari, qarorlari, farmoyishlari hamda Vazirlar Mahkamasining qarorlari, farmoyishlari va xalq deputatlari viloyat Kengashi qabul qilgan hujjatlar ijrosini, davlat boshqaruvi organlari bilan fuqarolarning o‘zini o‘zi boshqarish organlari o‘rtasidagi aloqalarni, aholini viloyat, tuman va shaharni boshqarishga jalb etishni ta’minlaydi.            Viloyatda qonuniylikni, jamoat tartibiga rioya etilishi va jinoyatchilikka qarshi kurash, fuqarolarning xavfsizligini ta’minlash, ularning huquqlarini himoya qilish va salomatligini muhofaza etish bilan bog‘liq chora - tadbirlarni ko‘radi, tabiiy ofatlar, epidemiyalar va boshqa favqulodda hollarda tegishli ishlarni tashkil etadi.Mudofaa, safarbarlik, favqulodda vaziyatlar hamda huquq - tartibot organlari faoliyatini muvofiqlashtirish masalalari bilan bevosita shug‘ullanadi.Kadrlar siyosatini amalga oshiradi.Viloyatda milliy g‘oya targ‘iboti va ma’naviy - ma’rifiy ishlarning samaradorligini, ularning hayotiyligi va ta’sirchanligini oshirish bilan bog‘liq ishlarni tashkil etishga rahbarlik qiladi. Viloyatda davlat dasturlari ijrosini ta’minlash choralarini ko‘radi.Nazorat organlari faoliyatini muvofiqlashtiradi.O‘z vakolatlari doirasida viloyat hududida joylashgan barcha korxonalar, muassasalar, tashkilotlar, mansabdor shaxslar va fuqarolar tomonidan ijro etilishi majburiy bo‘lgan qarorlar qabul qiladi va farmoyishlar chiqaradi. Viloyat hokimligi va viloyatdagi ijroiya hokimiyati organlarida ijro intizomini mustahkamlash choralarini ko‘radi. Jismoniy va yuridik shaxslarni qabul qilishni tashkil etadi, ularning shikoyatlari, arizalari va takliflarini ko‘rib chiqadi. Viloyat hokimligi apparatini boshqaradi.Hokim o‘rinbosarlari, viloyat hokimi yordamchisi, hokimlik apparatining tashkiliy - nazorat, harbiy safarbarlik va favqulodda vaziyatlar masalalari bo‘yicha guruhlari, Axborot - tahlil xizmati, ishlar boshqarmasi, yuridik xizmat va voyaga yetmaganlar ishlari bo‘yicha komissiyaga bevosita rahbarlik qiladi.",
        isShow: false,
        isShow2: false,
        isShow3: false,
        users: [
            {
                id: 0,
                rasmi: s1,
                ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
                lavozimi: "Buxoro viloyat hokimi",
                TugilganYili: "20-11-1969",
                TugilganJoyi: "G`ijduvon tumani",
                Millati: "O`zbek",
                Malumoti: "Oliy",
                TelefonRaqami: "-",
                isShow4: false,

            },
            {
                id: 1,
                rasmi: s2,
                ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
                lavozimi: "Buxoro viloyat hokimi",
                TugilganYili: "20-11-1969",
                TugilganJoyi: "G`ijduvon tumani",
                Millati: "O`zbek",
                Malumoti: "Oliy",
                TelefonRaqami: "-",
                isShow4: false,
            },
        ]
    },
    {
        id: 1,
        name: "Viloyat hokimining iqtisodiyot va tadbirkorlik masalalari bo‘yicha birinchi o‘rinbosari",
        title: "Viloyat hokimi viloyatda oliy mansabdor shaxs bo‘lib, ayni bir vaqtda hududda vakillik va ijroiya hokimiyatini boshqaradi. O‘z vakolatlarini yakkaboshchilik asosida amalga oshiradi.Viloyat hokimi O‘zbekiston Respublikasi Konstitutsiyasi, “Mahalliy davlat hokimiyati to‘g‘risida”gi O‘zbekiston Respublikasining Qonuni, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari, farmoyishlari hamda Vazirlar Mahkamasining qarorlari va farmoyishlari bilan belgilangan vakolatlar doirasida ijroiya hokimiyati faoliyatini tashkil etadi  Viloyatni ijtimoiy- iqtisodiy rivojlantirish vazifalari amalga oshirilishini, joylarda qonunlar, O‘zbekiston Respublikasi Oliy Majlisi palatalari qarorlari, O‘zbekiston Respublikasi Prezidenti farmonlari, qarorlari, farmoyishlari hamda Vazirlar Mahkamasining qarorlari, farmoyishlari va xalq deputatlari viloyat Kengashi qabul qilgan hujjatlar ijrosini, davlat boshqaruvi organlari bilan fuqarolarning o‘zini o‘zi boshqarish organlari o‘rtasidagi aloqalarni, aholini viloyat, tuman va shaharni boshqarishga jalb etishni ta’minlaydi.            Viloyatda qonuniylikni, jamoat tartibiga rioya etilishi va jinoyatchilikka qarshi kurash, fuqarolarning xavfsizligini ta’minlash, ularning huquqlarini himoya qilish va salomatligini muhofaza etish bilan bog‘liq chora - tadbirlarni ko‘radi, tabiiy ofatlar, epidemiyalar va boshqa favqulodda hollarda tegishli ishlarni tashkil etadi.Mudofaa, safarbarlik, favqulodda vaziyatlar hamda huquq - tartibot organlari faoliyatini muvofiqlashtirish masalalari bilan bevosita shug‘ullanadi.Kadrlar siyosatini amalga oshiradi.Viloyatda milliy g‘oya targ‘iboti va ma’naviy - ma’rifiy ishlarning samaradorligini, ularning hayotiyligi va ta’sirchanligini oshirish bilan bog‘liq ishlarni tashkil etishga rahbarlik qiladi. Viloyatda davlat dasturlari ijrosini ta’minlash choralarini ko‘radi.Nazorat organlari faoliyatini muvofiqlashtiradi.O‘z vakolatlari doirasida viloyat hududida joylashgan barcha korxonalar, muassasalar, tashkilotlar, mansabdor shaxslar va fuqarolar tomonidan ijro etilishi majburiy bo‘lgan qarorlar qabul qiladi va farmoyishlar chiqaradi. Viloyat hokimligi va viloyatdagi ijroiya hokimiyati organlarida ijro intizomini mustahkamlash choralarini ko‘radi. Jismoniy va yuridik shaxslarni qabul qilishni tashkil etadi, ularning shikoyatlari, arizalari va takliflarini ko‘rib chiqadi. Viloyat hokimligi apparatini boshqaradi.Hokim o‘rinbosarlari, viloyat hokimi yordamchisi, hokimlik apparatining tashkiliy - nazorat, harbiy safarbarlik va favqulodda vaziyatlar masalalari bo‘yicha guruhlari, Axborot - tahlil xizmati, ishlar boshqarmasi, yuridik xizmat va voyaga yetmaganlar ishlari bo‘yicha komissiyaga bevosita rahbarlik qiladi.",
        isShow: false,
        isShow2: false,
        isShow3: false,
        users: [
            {
                id: 0,
                rasmi: s1,
                ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
                lavozimi: "Buxoro viloyat hokimi",
                TugilganYili: "20-11-1969",
                TugilganJoyi: "G`ijduvon tumani",
                Millati: "O`zbek",
                Malumoti: "Oliy",
                TelefonRaqami: "-",
                isShow4: false,

            },
            {
                id: 1,
                rasmi: s2,
                ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
                lavozimi: "Buxoro viloyat hokimi",
                TugilganYili: "20-11-1969",
                TugilganJoyi: "G`ijduvon tumani",
                Millati: "O`zbek",
                Malumoti: "Oliy",
                TelefonRaqami: "-",
                isShow4: false,
            },
        ]
    },
    {
        id: 2,
        name: " Viloyat hokimining sanoatni rivojlantirish, kapital qurilish, kommunikatsiyalar va kommunal xo‘jaligi masalalari bo‘yicha o‘rinbosari",
        title: "Viloyat hokimi viloyatda oliy mansabdor shaxs bo‘lib, ayni bir vaqtda hududda vakillik va ijroiya hokimiyatini boshqaradi. O‘z vakolatlarini yakkaboshchilik asosida amalga oshiradi.Viloyat hokimi O‘zbekiston Respublikasi Konstitutsiyasi, “Mahalliy davlat hokimiyati to‘g‘risida”gi O‘zbekiston Respublikasining Qonuni, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari, farmoyishlari hamda Vazirlar Mahkamasining qarorlari va farmoyishlari bilan belgilangan vakolatlar doirasida ijroiya hokimiyati faoliyatini tashkil etadi  Viloyatni ijtimoiy- iqtisodiy rivojlantirish vazifalari amalga oshirilishini, joylarda qonunlar, O‘zbekiston Respublikasi Oliy Majlisi palatalari qarorlari, O‘zbekiston Respublikasi Prezidenti farmonlari, qarorlari, farmoyishlari hamda Vazirlar Mahkamasining qarorlari, farmoyishlari va xalq deputatlari viloyat Kengashi qabul qilgan hujjatlar ijrosini, davlat boshqaruvi organlari bilan fuqarolarning o‘zini o‘zi boshqarish organlari o‘rtasidagi aloqalarni, aholini viloyat, tuman va shaharni boshqarishga jalb etishni ta’minlaydi.            Viloyatda qonuniylikni, jamoat tartibiga rioya etilishi va jinoyatchilikka qarshi kurash, fuqarolarning xavfsizligini ta’minlash, ularning huquqlarini himoya qilish va salomatligini muhofaza etish bilan bog‘liq chora - tadbirlarni ko‘radi, tabiiy ofatlar, epidemiyalar va boshqa favqulodda hollarda tegishli ishlarni tashkil etadi.Mudofaa, safarbarlik, favqulodda vaziyatlar hamda huquq - tartibot organlari faoliyatini muvofiqlashtirish masalalari bilan bevosita shug‘ullanadi.Kadrlar siyosatini amalga oshiradi.Viloyatda milliy g‘oya targ‘iboti va ma’naviy - ma’rifiy ishlarning samaradorligini, ularning hayotiyligi va ta’sirchanligini oshirish bilan bog‘liq ishlarni tashkil etishga rahbarlik qiladi. Viloyatda davlat dasturlari ijrosini ta’minlash choralarini ko‘radi.Nazorat organlari faoliyatini muvofiqlashtiradi.O‘z vakolatlari doirasida viloyat hududida joylashgan barcha korxonalar, muassasalar, tashkilotlar, mansabdor shaxslar va fuqarolar tomonidan ijro etilishi majburiy bo‘lgan qarorlar qabul qiladi va farmoyishlar chiqaradi. Viloyat hokimligi va viloyatdagi ijroiya hokimiyati organlarida ijro intizomini mustahkamlash choralarini ko‘radi. Jismoniy va yuridik shaxslarni qabul qilishni tashkil etadi, ularning shikoyatlari, arizalari va takliflarini ko‘rib chiqadi. Viloyat hokimligi apparatini boshqaradi.Hokim o‘rinbosarlari, viloyat hokimi yordamchisi, hokimlik apparatining tashkiliy - nazorat, harbiy safarbarlik va favqulodda vaziyatlar masalalari bo‘yicha guruhlari, Axborot - tahlil xizmati, ishlar boshqarmasi, yuridik xizmat va voyaga yetmaganlar ishlari bo‘yicha komissiyaga bevosita rahbarlik qiladi.",
        isShow: false,
        isShow2: false,
        isShow3: false,
        users: [
            {
                id: 0,
                rasmi: s1,
                ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
                lavozimi: "Buxoro viloyat hokimi",
                TugilganYili: "20-11-1969",
                TugilganJoyi: "G`ijduvon tumani",
                Millati: "O`zbek",
                Malumoti: "Oliy",
                TelefonRaqami: "-",
                isShow4: false,

            },
            {
                id: 1,
                rasmi: s2,
                ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
                lavozimi: "Buxoro viloyat hokimi",
                TugilganYili: "20-11-1969",
                TugilganJoyi: "G`ijduvon tumani",
                Millati: "O`zbek",
                Malumoti: "Oliy",
                TelefonRaqami: "-",
                isShow4: false,
            },
        ]
    },
    {
        id: 3,
        name: "Hokim o`rinbosari - viloyat investitsiyalar va tashqi savdo boshqarmasi boshlig`i",
        title: "Viloyat hokimi viloyatda oliy mansabdor shaxs bo‘lib, ayni bir vaqtda hududda vakillik va ijroiya hokimiyatini boshqaradi. O‘z vakolatlarini yakkaboshchilik asosida amalga oshiradi.Viloyat hokimi O‘zbekiston Respublikasi Konstitutsiyasi, “Mahalliy davlat hokimiyati to‘g‘risida”gi O‘zbekiston Respublikasining Qonuni, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari, farmoyishlari hamda Vazirlar Mahkamasining qarorlari va farmoyishlari bilan belgilangan vakolatlar doirasida ijroiya hokimiyati faoliyatini tashkil etadi  Viloyatni ijtimoiy- iqtisodiy rivojlantirish vazifalari amalga oshirilishini, joylarda qonunlar, O‘zbekiston Respublikasi Oliy Majlisi palatalari qarorlari, O‘zbekiston Respublikasi Prezidenti farmonlari, qarorlari, farmoyishlari hamda Vazirlar Mahkamasining qarorlari, farmoyishlari va xalq deputatlari viloyat Kengashi qabul qilgan hujjatlar ijrosini, davlat boshqaruvi organlari bilan fuqarolarning o‘zini o‘zi boshqarish organlari o‘rtasidagi aloqalarni, aholini viloyat, tuman va shaharni boshqarishga jalb etishni ta’minlaydi.            Viloyatda qonuniylikni, jamoat tartibiga rioya etilishi va jinoyatchilikka qarshi kurash, fuqarolarning xavfsizligini ta’minlash, ularning huquqlarini himoya qilish va salomatligini muhofaza etish bilan bog‘liq chora - tadbirlarni ko‘radi, tabiiy ofatlar, epidemiyalar va boshqa favqulodda hollarda tegishli ishlarni tashkil etadi.Mudofaa, safarbarlik, favqulodda vaziyatlar hamda huquq - tartibot organlari faoliyatini muvofiqlashtirish masalalari bilan bevosita shug‘ullanadi.Kadrlar siyosatini amalga oshiradi.Viloyatda milliy g‘oya targ‘iboti va ma’naviy - ma’rifiy ishlarning samaradorligini, ularning hayotiyligi va ta’sirchanligini oshirish bilan bog‘liq ishlarni tashkil etishga rahbarlik qiladi. Viloyatda davlat dasturlari ijrosini ta’minlash choralarini ko‘radi.Nazorat organlari faoliyatini muvofiqlashtiradi.O‘z vakolatlari doirasida viloyat hududida joylashgan barcha korxonalar, muassasalar, tashkilotlar, mansabdor shaxslar va fuqarolar tomonidan ijro etilishi majburiy bo‘lgan qarorlar qabul qiladi va farmoyishlar chiqaradi. Viloyat hokimligi va viloyatdagi ijroiya hokimiyati organlarida ijro intizomini mustahkamlash choralarini ko‘radi. Jismoniy va yuridik shaxslarni qabul qilishni tashkil etadi, ularning shikoyatlari, arizalari va takliflarini ko‘rib chiqadi. Viloyat hokimligi apparatini boshqaradi.Hokim o‘rinbosarlari, viloyat hokimi yordamchisi, hokimlik apparatining tashkiliy - nazorat, harbiy safarbarlik va favqulodda vaziyatlar masalalari bo‘yicha guruhlari, Axborot - tahlil xizmati, ishlar boshqarmasi, yuridik xizmat va voyaga yetmaganlar ishlari bo‘yicha komissiyaga bevosita rahbarlik qiladi.",
        isShow: false,
        isShow2: false,
        isShow3: false,
        users: [
            {
                id: 0,
                rasmi: s1,
                ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
                lavozimi: "Buxoro viloyat hokimi",
                TugilganYili: "20-11-1969",
                TugilganJoyi: "G`ijduvon tumani",
                Millati: "O`zbek",
                Malumoti: "Oliy",
                TelefonRaqami: "-",
                isShow4: false,

            },
            {
                id: 1,
                rasmi: s2,
                ismiFamiliyasi: "ZARIPOV BOTIR KOMILOVICH",
                lavozimi: "Buxoro viloyat hokimi",
                TugilganYili: "20-11-1969",
                TugilganJoyi: "G`ijduvon tumani",
                Millati: "O`zbek",
                Malumoti: "Oliy",
                TelefonRaqami: "-",
                isShow4: false,
            },
        ]
    },
]


const TarkibiyBolinmalar = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(data1)
    }, [data])

    function show1(element) {
        const faceData = data?.filter((item) => {
            if (item.id === element.id) {
                item.isShow = !element.isShow
            } else {
                item.isShow = false
            }
            return item
        })

        setData(faceData)
    }

    function show2(element) {
        const faceData = data?.filter((item) => {
            if (item.id === element.id) {
                item.isShow2 = !element.isShow2
            }
            return item
        })

        setData(faceData)
    }

    function show3(element) {
        const faceData = data?.filter((item) => {
            if (item.id === element.id) {
                item.isShow3 = !element.isShow3
            }
            return item
        })

        setData(faceData)
    }



    function show4(element) {
        const faceData = data?.filter((item) => {

            item?.users.filter((item2) => {
                if (item2.id === element?.users?.id) {
                    item2.isShow4 = !element?.users?.isShow4
                }
                return item2
            })

            return item
        })

        setData(faceData)
    }




    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Tarkibiy bo`linmalar</div>

            {
                data?.map((element) => {
                    return (
                        <div>

                            <h2 onClick={() => show1(element)} className="p-2 text-light rounded bg-secondary mb-2" style={{ cursor: "pointer" }}>
                                {element.isShow ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}{element.name}</h2>
                            {
                                element.isShow && <Fade bottom cascade> <ul>
                                    <li onClick={() => show2(element)} className="p-2 text-light rounded bg-secondary mb-2">{element.isShow2 ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}Bo'lim haqida ma'lumot</li>

                                    {
                                        element.isShow2 && <Fade bottom>
                                            <div>
                                                <h4 style={{ textAlign: "justify" }}>{element.title}</h4>
                                            </div>
                                        </Fade>
                                    }
                                    <li onClick={() => show3(element)} className="p-2 text-light rounded bg-secondary mb-2">{element.isShow3 ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}Bo'lim xodimlari</li>
                                    <Fade bottom cascade>
                                        <div className='boxes'>
                                            {element.isShow3 && element?.users?.map((item) => {
                                                return (
                                                    <div className='p-2 bg-white'>
                                                        <div key={item.id} className='d-flex gap-2 senatorlar p-0 bg-light'>
                                                            <img src={item.rasmi} alt="" style={{ width: "250px", height: "300px", objectFit: "cover" }} />

                                                            <div style={{ width: "100%", height: "300px" }}>
                                                                <div className="p-2 text-light bg-secondary" style={{ fontSize: "18px" }}>{item.ismiFamiliyasi}</div>

                                                                <div className="list-group bg-light" style={{ border: "none" }}>
                                                                    <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                                                        <span>Lavozimi</span>
                                                                        <span>{item.lavozimi}</span>
                                                                    </li>

                                                                    <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                                                        <span>Tug'ilgan yili</span>
                                                                        <span>{item.TugilganYili}</span>
                                                                    </li>

                                                                    <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                                                        <span>Tug'ilgan joyi</span>
                                                                        <span>{item.TugilganJoyi}</span>
                                                                    </li>

                                                                    <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                                                        <span>Millati</span>
                                                                        <span>{item.Millati}</span>
                                                                    </li>

                                                                    <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                                                        <span>Ma'lumoti</span>
                                                                        <span>{item.Malumoti}</span>
                                                                    </li>

                                                                    <li className="list-group-item list-group-item-action px-3 py-1 d-flex">
                                                                        <span>Telefon raqami</span>
                                                                        <span>{item.TelefonRaqami}</span>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <h2 onClick={() => show4(element)} className='text-secondary mx-3 mt-2' style={{ cursor: "pointer" }}>{item.isShow4 ? <i className='icon-arrow-down15'></i> : <i className='icon-arrow-right15'></i>}Funksiya va vazifalari</h2>

                                                        {item.isShow4 && <Zoom>
                                                            <div className="list-feed mx-3 ">
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
                                                        </Zoom>
                                                        }

                                                    </div>

                                                )
                                            })}
                                        </div>
                                    </Fade>



                                </ul>
                                </Fade>
                            }
                        </div>

                    )

                })


            }
        </Wrapper >
    );
}

export default TarkibiyBolinmalar;

const Wrapper = styled.div`
    ul{
        list-style: none;

        li {
            font-size: 18px;
            cursor: pointer;
        }
    }

    .senatorlar span {
        width: 50%;
    }

    .boxes {
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
    }
    
`
