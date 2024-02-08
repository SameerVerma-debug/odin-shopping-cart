import { Home } from "./pages/Home";
import { Shop } from "./pages/shop";
import { Cart } from "./pages/cart";
import { AllProducts } from "./components/AllProducts";
import { CategoryProducts } from "./components/CategoryProducts";
import { ProductDetail } from "./components/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { createContext, useState } from "react";
import "./styles/app.css"

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartProductsQuantity,setCartProductsQuantity] = useState(new Map());
  return (
    <div className="app">
      <CartContext.Provider value={{ cartItems, setCartItems,cartProductsQuantity,setCartProductsQuantity }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="shop" element={<Shop />}>
              <Route path="all" element={<AllProducts />} />
              <Route path="category/:name" element={<CategoryProducts />} />
            </Route>
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
