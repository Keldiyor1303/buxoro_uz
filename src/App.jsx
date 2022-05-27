import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import YangilikDetail from "./components/YangilikDetail";
import UmumiyMalumot from "./containers/viloyatHaqida/UmumiyMalumot";
import Layout from "./Layout";
import Home from "./pages/Home";
import Konstitutsiya from "./containers/viloyatHaqida/Konstitutsiya";
import DavlatRamzlari from "./containers/viloyatHaqida/DavlatRamzlari";
import MilliyBayramlar from "./containers/viloyatHaqida/MilliyBayramlar";
import MilliyValyuta from "./containers/viloyatHaqida/MilliyValyuta";
import HududiVaAholisi from "./containers/viloyatHaqida/HududiVaAholisi";
import HokimlikVazifalari from "./containers/hokimlikTogrisida/HokimlikVazifalari";
import XalqDeputatlari from "./containers/hokimlikTogrisida/XalqDeputatlari";
import Rahbariyat from "./containers/hokimlikTogrisida/Rahbariyat";
import SxematikKorinish from "./containers/hokimlikTogrisida/SxematikKorinish";
import TarkibiyBolinmalar from "./containers/hokimlikTogrisida/TarkibiyBolinmalar";
import HokimlikkaMurojaat from "./containers/hokimlikTogrisida/HokimlikkaMurojaat";
import HokimlikTarixi from "./containers/hokimlikTogrisida/HokimlikTarixi";
import OchiqMalumotlar from "./containers/hokimlikTogrisida/OchiqMalumotlar";
import DavlatDasturiDoirasida from "./containers/hokimlikFaoliyati/DavlatDasturiDoirasida";
import MaslahatOrganlari from "./containers/hokimlikFaoliyati/MaslahatOrganlari";
import IdoralarHamkorligi from "./containers/hokimlikFaoliyati/IdoralarHamkorligi";
import XalqaroHamkorlik from "./containers/hokimlikFaoliyati/XalqaroHamkorlik";
import InvestitsionHamkorlik from "./containers/hokimlikFaoliyati/InvestitsionHamkorlik";
import Loyihalar from "./containers/hokimlikFaoliyati/Loyihalar";
import Tenderlar from "./containers/hokimlikFaoliyati/Tenderlar";
import Elonlar from "./containers/hokimlikFaoliyati/Elonlar";
import Vakansiyalar from "./containers/hokimlikFaoliyati/Vakansiyalar";
import Qonunchilik from "./containers/hujjatlar/Qonunchilik";
import DavlatDasturlari from "./containers/hujjatlar/DavlatDasturlari";
import ViloyatDasturlari from "./containers/hujjatlar/ViloyatDasturlari";
import NormativHujjatlar from "./containers/hujjatlar/NormativHujjatlar";
import MemoriyHujjatlar from "./containers/hujjatlar/MemoriyHujjatlar";
import XalqaroShartnomalar from "./containers/hujjatlar/XalqaroShartnomalar";
import TadbirkorlikHujjatlari from "./containers/hujjatlar/TadbirkorlikHujjatlari";
import YerlarMalumoti from "./containers/hujjatlar/YerlarMalumoti";
import StatistikAxborotlar from "./containers/hujjatlar/StatistikAxborotlar";
import HujjatlarniMuhokamalash from "./containers/hujjatlar/HujjatlarniMuhokamalash";
import KuchiniYoqotganHujjatlar from "./containers/hujjatlar/KuchiniYoqotganHujjatlar";
import Fotogalereya from "./containers/mediateka/Fotogalereya";
import Videogalereya from "./containers/mediateka/Videogalereya";
import Yangiliklar from "./containers/axborotXizmati/Yangiliklar";
import HokimliklarNutqi from "./containers/axborotXizmati/HokimliklarNutqi";
import MatbuotAnjumanlari from "./containers/axborotXizmati/MatbuotAnjumanlari";
import MajlisTartibi from "./containers/axborotXizmati/MajlisTartibi";
import AxborotlarRuyxati from "./containers/axborotXizmati/AxborotlarRuyxati";
import PressRelizlar from "./containers/axborotXizmati/PressRelizlar";
import SurovlarniQabulQilish from "./containers/axborotXizmati/SurovlarniQabulQilish";
import Akkreditatsiya from "./containers/axborotXizmati/Akkreditatsiya";
import Qonunchilik2 from "./containers/mahalliylashtirish/Qonunchilik";
import StatistikHisobotlar from "./containers/mahalliylashtirish/StatistikHisobotlar";
import HududiyImportTahlili from "./containers/mahalliylashtirish/HududiyImportTahlili";
import Murojaat from "./containers/Murojaat";
import YoshlarSektori from "./containers/YoshlarSektori";
import KorrupsiyagaQarshiKurashish from "./containers/KorrupsiyagaQarshiKurashish";
import Navbar2 from "./components/Navbar2";
import DavlatMukofotlari from "./containers/viloyatHaqida/DavlatMukofotlari";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* VILOYAT HAQIDA */}
      <Route path="/umumiy_malumot" element={<Layout> <UmumiyMalumot /> </Layout>} />
      <Route path="/konstitutsiya" element={<Layout> <Konstitutsiya /> </Layout>} />
      <Route path="/davlat_ramzlari" element={<Layout> <DavlatRamzlari /> </Layout>} />
      <Route path="/milliy_bayramlar" element={<Layout> <MilliyBayramlar /> </Layout>} />
      <Route path="/milliy_valyuta" element={<Layout> <MilliyValyuta /> </Layout>} />
      <Route path="/davlat_mukofotlari" element={<Layout> <DavlatMukofotlari /> </Layout>} />
      <Route path="/hududi_va_aholisi" element={<Layout> <HududiVaAholisi /> </Layout>} />

      {/* HOKIMLIK TO`G`RISIDA */}
      <Route path="/hokimlik_vazifalari" element={<Layout> <HokimlikVazifalari /> </Layout>} />
      <Route path="/xalq_deputatlari_kengashi" element={<Layout> <XalqDeputatlari /> </Layout>} />
      <Route path="/rahbariyat" element={<Layout> <Rahbariyat /> </Layout>} />
      <Route path="/sxematik_korinish" element={<Layout> <SxematikKorinish /> </Layout>} />
      <Route path="/tarkibiy_bolinmalar" element={<Layout> <TarkibiyBolinmalar /> </Layout>} />
      <Route path="/hokimlikka_murojaat" element={<Layout> <HokimlikkaMurojaat /> </Layout>} />
      <Route path="/hokimlik_tarixi" element={<Layout> <HokimlikTarixi /> </Layout>} />
      <Route path="/ochiq_malumotlar" element={<Layout> <OchiqMalumotlar /> </Layout>} />

      {/* HOKIMLIK FAOLIYATI */}
      <Route path="/davlat_dasturi_doirasida" element={<Layout> <DavlatDasturiDoirasida /> </Layout>} />
      <Route path="/maslahat_organlari" element={<Layout> <MaslahatOrganlari /> </Layout>} />
      <Route path="/idoralar_hamkorligi" element={<Layout> <IdoralarHamkorligi /> </Layout>} />
      <Route path="/xalqaro_hamkorlik" element={<Layout> <XalqaroHamkorlik /> </Layout>} />
      <Route path="/investitsion_faoliyat" element={<Layout> <InvestitsionHamkorlik /> </Layout>} />
      <Route path="/loyihalar" element={<Layout> <Loyihalar /> </Layout>} />
      <Route path="/tenderlar" element={<Layout> <Tenderlar /> </Layout>} />
      <Route path="/elonlar" element={<Layout> <Elonlar /> </Layout>} />
      <Route path="/vakansiyalar" element={<Layout> <Vakansiyalar /> </Layout>} />

      {/* HUJJATLAR */}
      <Route path="/qonunchilik" element={<Layout> <Qonunchilik /> </Layout>} />
      <Route path="/davlat_dasturlari" element={<Layout> <DavlatDasturlari /> </Layout>} />
      <Route path="/viloyat_dasturlari" element={<Layout> <ViloyatDasturlari /> </Layout>} />
      <Route path="/normativ_hujjatlar" element={<Layout> <NormativHujjatlar /> </Layout>} />
      <Route path="/meyoriy_hujjatlar" element={<Layout> <MemoriyHujjatlar /> </Layout>} />
      <Route path="/xalqaro_shartnomalar" element={<Layout> <XalqaroShartnomalar /> </Layout>} />
      <Route path="/tadbirkorlik_hujjatlari" element={<Layout> <TadbirkorlikHujjatlari /> </Layout>} />
      <Route path="/yerlar_malumoti" element={<Layout> <YerlarMalumoti /> </Layout>} />
      <Route path="/statistik_axborotlar" element={<Layout> <StatistikAxborotlar /> </Layout>} />
      <Route path="/hujjatlarni_muhokamalash" element={<Layout> <HujjatlarniMuhokamalash /> </Layout>} />
      <Route path="/kuchini_yoqotgan_hujjatlar" element={<Layout> <KuchiniYoqotganHujjatlar /> </Layout>} />

      {/* MEDIATEKA */}
      <Route path="/fotogalereya" element={<Layout> <Fotogalereya /> </Layout>} />
      <Route path="/videogalereya" element={<Layout> <Videogalereya /> </Layout>} />

      {/* AXBOROT XIZMATI */}
      <Route path="/yangiliklar" element={<Layout> <Yangiliklar /> </Layout>} />
      <Route path="/hokimlar_nutqi" element={<Layout> <HokimliklarNutqi /> </Layout>} />
      <Route path="/matbuot_anjumanlari" element={<Layout> <MatbuotAnjumanlari /> </Layout>} />
      <Route path="/majlis_tartibi" element={<Layout> <MajlisTartibi /> </Layout>} />
      <Route path="/axborotlar_ruyxati" element={<Layout> <AxborotlarRuyxati /> </Layout>} />
      <Route path="/press_relizlar" element={<Layout> <PressRelizlar /> </Layout>} />
      <Route path="/surovlarni_qabul_qilish" element={<Layout> <SurovlarniQabulQilish /> </Layout>} />
      <Route path="/akkreditatsiya" element={<Layout> <Akkreditatsiya /> </Layout>} />

      {/* MAHALLIYLASHTIRISH */}
      <Route path="/mahalliy_qonunchilik" element={<Layout> <Qonunchilik2 /> </Layout>} />
      <Route path="/statistik_hisobotlar" element={<Layout> <StatistikHisobotlar /> </Layout>} />
      <Route path="/hududiy_import_tahlili" element={<Layout> <HududiyImportTahlili /> </Layout>} />

      {/* MUROJAAT */}
      <Route path="/murojaat" element={<Layout> <Murojaat /> </Layout>} />

      {/* YOSHLAR SEKTORI */}
      <Route path="/yoshlar_sektori" element={<Layout> <YoshlarSektori /> </Layout>} />

      {/* KORRUPSIYAGA QARSHI KURASHISH */}
      <Route path="/korrupsiyaga_qarshi_kurashish" element={<Layout> <KorrupsiyagaQarshiKurashish /> </Layout>} />




      <Route path="/1" element={<Layout> <YangilikDetail /> </Layout>} />
      <Route path="/2" element={<Layout> <Card /> </Layout>} />
      <Route path="/3" element={<Layout> <Navbar2 /> </Layout>} />
    </Routes>
  );
}

export default App;
