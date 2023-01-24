import Clock from "../component/clock";
import Stopwatch from "./stopwatch";

function App() {
  return (
    <>
      <div className="clock">
        <Clock />
      </div>
      <div>
        <Stopwatch />
      </div>
    </>
  );
}
export default App;
