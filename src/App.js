import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Imprint from "./pages/Imprint";
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="imprint" element={<Imprint />} />
      </Routes>
    </>
  );
}

export default App;
