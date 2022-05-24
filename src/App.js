import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Car from "./pages/Car";
import MainLayout from "./mainlayout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Index />} />
          <Route path="/car" element={<Car />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
