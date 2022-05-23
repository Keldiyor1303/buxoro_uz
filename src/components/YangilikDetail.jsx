import React from 'react';
import styled from 'styled-components';
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';

const YangilikDetail = () => {


    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/1000/600/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/1000/600/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/1000/600/',
        },
    ];

    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Oyliklar, gaz-svet, konstitutsiya va ro‘shnolik va’dasi - hafta dayjesti</div>

            <ImageGallery items={images} autoPlay={true} showPlayButton={false} showBullets={true} showNav={true} />

            <p className='mt-3' style={{ fontSize: "18px", textAlign: "justify" }}>Oyliklar oshdi. Shifokorlarning oyligi ko‘proq oshdi, o‘qituvchilar-chi?

                1 maydan e’tiboran pensiya va nafaqalar 12 foizga oshirilgan edi. 1 iyundan boshlab budjet tashkilotlaridagi oyliklar ham xuddi shunchaga oshadigan bo‘ldi.

                1 iyundan, shuningdek, bazaviy hisoblash miqdori 270 ming so‘mdan 300 ming so‘mga, mehnatga haq to‘lashning eng kam miqdori oyiga 822 ming so‘mdan 920 mingga ko‘tariladi.

                Budjet tashkilotlarida oyliklar o‘tgan yili ikki marta 10 foizdan oshirilgan, har ikki safar stipendiyalar miqdori ham ko‘tarilgan edi. Bu galgi farmonda stipendiyalar oshishi ko‘zda tutilmagan. Shu bilan birga, oliygohlarda to‘lov-kontrakt miqdorlari oshishi mumkin.

                Maoshlar ko‘tarilishi budjet tashkilotlarida ishlovchi qariyb 2 million xodimga taalluqli bo‘ladi. Ular orasidan tibbiyot va farmatsevtika xodimlarining oyliklari boshqalarnikidan ko‘proq oshirilyapti. Gap shundaki, maoshlar 12 foizga oshirilishi bo‘yicha farmon 20 may kuni imzolangan bo‘lsa, undan uch kun avval shifokorlar oyligi bo‘yicha alohida farmon chiqqandi. Unga ko‘ra, 1 iyundan boshlab tibbiyot va farmatsevtika xodimlarining maoshi malaka toifasiga qarab 10-15 foizga oshyapti.

                Bu ikkita farmonni qo‘shib hisoblaganda, oliy va birinchi toifali tibbiyot xodimlarining maoshi kamida 27 foizga, ikkinchi toifa va toifasi yo‘q tibbiyot xodimlarining maoshi esa kamida 22 foizga oshdi. Bundan tashqari, tibbiyotchilar uchun olti xil turdagi ustamalar joriy etildi.

                Buning muhimligi shundaki, tibbiyot va ta’limdagi oyliklar uzoq yillardan beri O‘zbekiston bo‘yicha o‘rtacha oyliklardan past bo‘lib kelyapti. Sohalar bo‘yicha maoshlar statistikasida o‘qituvchi va shifokorlar doim eng oxirgi o‘rinlarda qolib ketyapti. 2022 yilning birinchi choragidagi raqamlarga qarasak ham, o‘qituvchi va shifokorlarning o‘rtacha oyliklari bilan respublikadagi o‘rtacha oyliklar o‘rtasidagi salbiy farq yanada kattalashgan.

                1 iyundan shifokorlar oyligining boshqalarga nisbatan ko‘proqqa oshirilishi ularning nisbiy kambag‘allashishini to‘xtatishi mumkin. Xuddi shunday holat o‘qituvchilar bilan ham kuzatilishi kerak. 2022 yilgi davlat dasturiga binoan, maktab o‘qituvchilarining ish haqlari malaka toifasiga qarab, tabaqalashtirilgan holda oshirilishi lozim. Tegishli qaror loyihasini ishlab chiqish uchun 1 iyulgacha muhlat belgilangan.

                Qolaversa, shu yil sentabr oyigacha prezident qarori loyihasi ishlab chiqilishi, unda o‘qituvchilarning maoshini bosqichma-bosqich oshirishga qaratilgan aniq qadamlar belgilanishi kerak.

                Eslatib o‘tamiz, 2026 yilgacha malakali o‘qituvchilar va shifokorlarning oyliklari ming dollarga yetkazilishi va’da qilingan. Aniqlik kiritib o‘tish lozim, bu yerda o‘qituvchi va shifokorlarning hammasi haqida gap ketmayapti, aynan malakali mutaxassislar nazarda tutilyapti. Ya’ni ming dollarlik maosh faqat oliy toifali, shu bilan birga, ma’lum yutuqlarga egaligi uchun turli ustamalar ham oluvchilarga nasib etishi mumkin.</p>
        </Wrapper>
    );
}

export default YangilikDetail;

const Wrapper = styled.div`
    background-color: #F4F4F4;
    width:100%;

    .image {
        width: 1000px;
    }
`




