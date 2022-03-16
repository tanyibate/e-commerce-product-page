import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemPage from "./pages/item-page/ItemPage";
import { ItemProvider } from "./components/item-provider/ItemProvider";

function App() {
  return (
    <ItemProvider>
      <div className="App">
        <NavBar />
        <ItemPage />
      </div>
    </ItemProvider>
  );
}

export default App;
