import "./App.css";
import Header from "./Components/Header";
import Template from "./Components/Template";
import Repository from "./Components/Repository";
import Permission from "./Components/Permission";
import Create from "./Components/Create";

function App() {
  return (
    <div className="App">
      <form>
        <Header />
        <Template />
        <Repository />
        <Permission />
        <Create />
      </form>
    </div>
  );
}

export default App;
