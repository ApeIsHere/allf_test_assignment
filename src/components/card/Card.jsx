import { useState } from "react";
import { inject, observer } from "mobx-react";
import CardTitle from "./CardTitle";
import CompanyDetailsList from "./CompanyDetailsList";
import ContactsList from "./ContactsList";

function Card({ type = null, companyStore }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="card">
      <CardTitle type={type} onEditClick={handleEditClick} isEditing={isEditing} />
      {type === "details" && (
        <CompanyDetailsList isEditing={isEditing} companyStore={companyStore} />
      )}
      {type === "contacts" && (
        <ContactsList isEditing={isEditing} companyStore={companyStore} />
      )}
    </div>
  );
}

const CardWithMobX = inject("companyStore")(observer(Card));
export default CardWithMobX;
