import About from "./pages/About";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import NavBar from "./pages/components/NavBar";
import Research from "./pages/Research";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
        <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="*" element={<NoMatch />} />
        </Route>
        
    </Routes>

  );
}
export default App;
