import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter basename="/react-market_pages">
      
      <header >
       <Header /> 
      </header>
      

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>


    </BrowserRouter>
  );
}

export default App;