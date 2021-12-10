import "./App.css";
import Lee from "./Lee";
import Example from "./Example";

function App() {
  const msg = "msg";
  return (
    <div>
      <Lee msg={msg}></Lee>
      <Lee msg={msg}>123</Lee>
      <Example msg={msg} age={1}></Example>
    </div>
  );
}

export default App;
