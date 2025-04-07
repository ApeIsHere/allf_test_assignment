import { useState } from "react";
import { inject, observer } from "mobx-react";
import CardTitle from "./CardTitle";
import CompanyDetailsList from "./CompanyDetailsList";
import ContactsList from "./ContactsList";

function Card({ type = null, companyStore }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (type === "details") {
      const updatedCompany = {
        name: companyStore.company.name,
        shortName: companyStore.company.shortName,
        businessEntity:
          formData.businessEntity?.[0] || companyStore.company.businessEntity,
        contract: {
          no: formData.contractNo || companyStore.company.contract.no,
          issue_date: formData.issueDate || companyStore.company.contract.issue_date,
        },
        type: formData.companyTypes || companyStore.company.type,
      };
      companyStore.updateCompany(updatedCompany);
    } else if (type === "contacts") {
      const updatedContact = {
        lastname: formData.lastname || companyStore.contact.lastname,
        firstname: formData.firstname || companyStore.contact.firstname,
        phone: formData.phone || companyStore.contact.phone,
        email: formData.email || companyStore.contact.email,
      };
      companyStore.updateContact(updatedContact);
    }
    setIsEditing(false);
    setFormData({});
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({});
  };

  return (
    <div className="card">
      <CardTitle
        type={type}
        onEditClick={handleEditClick}
        onSaveClick={handleSaveClick}
        onCancelClick={handleCancelClick}
        isEditing={isEditing}
      />
      {type === "company" && (
        <CompanyDetailsList
          isEditing={isEditing}
          companyStore={companyStore}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {type === "contacts" && (
        <ContactsList
          isEditing={isEditing}
          companyStore={companyStore}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

const CardWithMobX = inject("companyStore")(observer(Card));
export default CardWithMobX;
