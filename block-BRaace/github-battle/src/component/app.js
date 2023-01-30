import Topstar from "../component/topstar";
import Header from "./header";
import Battle from "./battle";
import { Routes, Route } from "react-router-dom";
import Javascript from "./javascript";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Topstar />} />
        <Route path="/all" element={<Topstar />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </>
  );
}
export default App;
