import { Provider } from "mobx-react";
import MainBlock from "./components/main-block/MainBlock";
import MainMenu from "./components/MainMenu";
import Sidebar from "./components/Sidebar";
import companyStore from "./stores/CompanyStore";

function App() {
  return (
    <Provider companyStore={companyStore}>
      <div className="app">
        <MainMenu />
        <Sidebar />
        <MainBlock />
      </div>
    </Provider>
  );
}

export default App;
