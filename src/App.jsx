import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import YangilikDetail from "./components/YangilikDetail";
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Layout> <YangilikDetail /> </Layout>} />
      <Route path="/2" element={<Layout> <Card /> </Layout>} />
    </Routes>
  );
}

export default App;
