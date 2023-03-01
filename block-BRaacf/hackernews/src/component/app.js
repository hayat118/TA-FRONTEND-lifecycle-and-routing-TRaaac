import Header from "./header";
import { Routes, Route } from "react-router-dom";
import All from "../component/all";

function App() {
  return (
    <>
      <div className="grid-container">
        <div>
          <Header />
        </div>
      </div>
      <Routes>
        <Route path="/all" element={<All />} />
      </Routes>
    </>
  );
}
export default App;
