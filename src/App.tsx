import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import CustomSwitch from "./CustomSwitch";

function App() {
  return (
    <BrowserRouter>
      <CustomSwitch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CustomSwitch>
    </BrowserRouter>
  );
}

export default App;
