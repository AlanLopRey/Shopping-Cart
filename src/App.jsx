import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemList } from "./components/ItemList";
import NavBar from "./components/NavBar";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
