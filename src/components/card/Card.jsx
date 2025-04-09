import { useState } from "react";
import { observer } from "mobx-react-lite";
import CardTitle from "./CardTitle";
import CompanyDetailsList from "./CompanyDetailsList";
import ContactsList from "./ContactsList";
import companyStore from "../../stores/CompanyStore";

const Card = observer(({ type = null }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const handleCompanyUpdate = () => {
    const updatedCompany = {
      businessEntity: formData.businessEntity?.[0] || companyStore.company.businessEntity,
      contract: {
        no: formData.contractNo || companyStore.company.contract.no,
        issue_date: formData.issueDate || companyStore.company.contract.issue_date,
      },
      type: formData.companyTypes || companyStore.company.type,
    };
    companyStore.updateCompany(updatedCompany);
  };

  const handleContactUpdate = () => {
    const updatedContact = {
      lastname: formData.lastname || companyStore.contact.lastname,
      firstname: formData.firstname || companyStore.contact.firstname,
      phone: formData.phone || companyStore.contact.phone,
      email: formData.email || companyStore.contact.email,
    };
    companyStore.updateContact(updatedContact);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (type === "company") {
      handleCompanyUpdate();
    } else if (type === "contacts") {
      handleContactUpdate();
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
          company={companyStore.company}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {type === "contacts" && (
        <ContactsList
          isEditing={isEditing}
          contact={companyStore.contact}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
});

export default Card;
