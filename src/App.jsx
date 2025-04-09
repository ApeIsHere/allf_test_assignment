import { Provider } from "mobx-react";
import MainBlock from "./components/main-block/MainBlock";
import MainMenu from "./components/MainMenu";
import Sidebar from "./components/Sidebar";
import companyStore from "./stores/CompanyStore";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider companyStore={companyStore}>
      <div className="app">
        <MainMenu />
        <Sidebar />
        <MainBlock />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Provider>
  );
}

export default App;
