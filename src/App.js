import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import Index from "./pages/Index";
import Car from "./pages/Car";
import Owl from "./components/Carousel";
import Hello from "./components/Carousel2";

function App() {
  return (
    <>
      {/* <Owl /> */}
      <Index />
      {/* <Car /> */}
    </>
  );
}

export default App;
