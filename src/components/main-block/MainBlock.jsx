import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Card from "../card/Card";
import Photos from "../Photos";
import MainBlockTitle from "./MainBlockTitle";
import companyStore from "../../stores/CompanyStore";

const MainBlock = observer(() => {
  {
    useEffect(() => {
      companyStore.fetchData();
    }, []);

    return (
      <main className="main-block">
        <div className="main-block__container">
          {companyStore.error ? (
            <div className="error-message">Error: {companyStore.error}</div>
          ) : companyStore.loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <MainBlockTitle companyName={companyStore.company.name} />
              <Card type="company" />
              <Card type="contacts" />
              <Photos />
            </>
          )}
        </div>
      </main>
    );
  }
});

export default MainBlock;
