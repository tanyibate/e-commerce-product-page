import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemPage from "./pages/item-page/ItemPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemPage />
    </div>
  );
}

export default App;
