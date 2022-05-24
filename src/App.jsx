import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import YangilikDetail from "./components/YangilikDetail";
import UmumiyMalumot from "./components/viloyatHaqida/UmumiyMalumot";
import Layout from "./Layout";
import Home from "./pages/Home";
import Konstitutsiya from "./components/viloyatHaqida/Konstitutsiya";
import DavlatRamzlari from "./components/viloyatHaqida/DavlatRamzlari";
import MilliyBayramlar from "./components/viloyatHaqida/MilliyBayramlar";
import MilliyValyuta from "./components/viloyatHaqida/MilliyValyuta";
import HududiVaAholisi from "./components/viloyatHaqida/HududiVaAholisi";

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
      <Route path="/hududi_va_aholisi" element={<Layout> <HududiVaAholisi /> </Layout>} />



      <Route path="/1" element={<Layout> <YangilikDetail /> </Layout>} />
      <Route path="/2" element={<Layout> <Card /> </Layout>} />
    </Routes>
  );
}

export default App;
