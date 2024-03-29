import Navbar from "./Opening/Navbar/Navbar";
import "./All.css"
import Footer from "./Opening/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Opening/Home/Home";
import Liked from "./Opening/Product/Selected/Liked";
import Basket from "./Opening/Product/Selected/Basket";
import Scale from "./Opening/Product/Selected/Scale";
import ViewProduct from "./Opening/Product/View/ViewProduct";
import Section1 from "./Opening/konpaniyaHaqida page/section-1";
import Mahslulotlar from "./Pages/Mahslulotlar";
function App() {
  return (
    <div className="App">
      <h1><Navbar /></h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="liked" element={<Liked />} />
        <Route path="basket" element={<Basket />} />
        <Route path="scale" element={<Scale />} />
        <Route path="konpaniyaHaqida" element={<Section1 />} />
        <Route path='/view/:id' element={<ViewProduct />} />
        <Route path="mahsulotlar" element={<Mahslulotlar />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
