import Navbar from "./components/Navbar";
import "./index.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import AboutUsPage from "./pages/AboutUsPage";
import { useState } from "react";
import HooksPage from "./pages/HooksPage";

function App() {
  const [page, setPage] = useState<"home" | "products" | "about" | "useEffect">(
    "home"
  );
  return (
    <div className="container mx-auto">
      <h1
        className="text-2xl text-center my-10 bg-red-600 text-black
      font-bold w-fit mx-auto p-2 rounded-md"
      >
        Component Lifecycle (Class Component)
      </h1>
      <Navbar setPage={setPage} />
      {page === "home" && <HomePage />}
      {page === "products" && <ProductsPage />}
      {page === "about" && <AboutUsPage />}
      {page === "useEffect" && <HooksPage />}
    </div>
  );
}

export default App;
