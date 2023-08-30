import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Home,
  About,
  Experience,
  Projects,
  Contacts,
} from "./components/";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </BrowserRouter>
  );
}
