import MainBlock from "./components/MainBlock";
import MainMenu from "./components/MainMenu";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <MainMenu />
      <Sidebar />
      <MainBlock />
    </div>
  );
}

export default App;
