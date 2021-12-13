import "./App.css";
import Lee from "./Lee";
import Example from "./Example";
import MyForm from "./MyForm";
import { UserList } from "./UserList";
import ClassStyle from "./ClassStyle";
import Admin from "./Admin";

function App() {
  const msg = "msg";
  return (
    <div>
      <Lee msg={msg}></Lee>
      <Lee msg={msg}>123</Lee>
      <Example msg={msg} age={1}></Example>
      <MyForm></MyForm>
      <UserList></UserList>
      <ClassStyle></ClassStyle>
      <Admin></Admin>
    </div>
  );
}

export default App;
