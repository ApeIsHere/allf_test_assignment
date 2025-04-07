import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import Card from "../card/Card";
import Photos from "../Photos";
import MainBlockTitle from "./MainBlockTitle";

function MainBlock({ companyStore }) {
  useEffect(() => {
    companyStore.fetchData();
  }, [companyStore]);

  return (
    <main className="main-block">
      <div className="main-block__container">
        {companyStore.error ? (
          <div className="error-message">Error: {companyStore.error}</div>
        ) : companyStore.loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <MainBlockTitle companyStore={companyStore} />
            <Card type="details" />
            <Card type="contacts" />
            <Photos />
          </>
        )}
      </div>
    </main>
  );
}

const MainBlockWithMobX = inject("companyStore")(observer(MainBlock));
export default MainBlockWithMobX;
