import "./my_reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import list from "./productData";
import { useState } from "react";
function App() {
  let [data] = useState(list);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/Shop" element={<Shop data={data} />}></Route>
        <Route path="/Detail/:id" element={<Detail data={data} />}></Route>
        <Route path="/*" element={<div>404 페이지 입니다</div>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
