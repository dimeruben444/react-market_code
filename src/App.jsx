import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage"


function App() {
  return (
    <HashRouter>
      
      <header  >
       <Header /> 
      </header>
      

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:mainCategory" element={<CategoryPage />} />
        </Routes>
      </main>


    </HashRouter>
  );
}

export default App;