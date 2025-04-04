import { useState } from "react";
import Button from "./ui/Button.jsx";
import EditIcon from "./ui/EditIcon.jsx";
import XIcon from "./ui/XIcon.jsx";
import CheckIcon from "./ui/CheckIcon.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomSelect from "./ui/CustomSelect.jsx";

function Card({ type = null }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="card">
      <CardTitle type={type} onEditClick={handleEditClick} isEditing={isEditing} />
      {type === "details" && <CompanyDetailsList isEditing={isEditing} />}
      {type === "contacts" && <ContactsList isEditing={isEditing} />}
    </div>
  );
}

export default Card;

function CardTitle({ type, onEditClick, isEditing }) {
  return (
    <>
      <div className="card__title">
        <h2 className="card__title-text">
          {type === "details" && "Company Details"}
          {type === "contacts" && "Contacts"}
        </h2>

        {isEditing ? (
          <div className="card__buttons">
            <Button
              type="outline"
              size="mini"
              width="133px"
              icon={<CheckIcon />}
              onClick={onEditClick}
            >
              Save changes
            </Button>
            <Button
              type="outline"
              size="mini"
              width="91px"
              icon={<XIcon />}
              onClick={onEditClick}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            type="outline"
            size="mini"
            width="71px"
            icon={<EditIcon />}
            onClick={onEditClick}
          >
            Edit
          </Button>
        )}
      </div>
    </>
  );
}

function CompanyDetailsList({ isEditing }) {
  const [startDate, setStartDate] = useState(new Date());
  const [businessEntity, setBusinessEntity] = useState([]);
  const [companyTypes, setCompanyTypes] = useState([]);

  const businessEntityOptions = [
    "Sole Proprietorship",
    "Partnership",
    "Limited Liability Company",
  ];

  const companyTypeOptions = [
    "Funeral Home",
    "Logistics services",
    "Burial care contractor",
  ];

  return (
    <>
      {isEditing ? (
        <ul className="card__list card__list-edit">
          <li className="card__list-item">
            <span className="card__list-name">Agreement number:</span>
            <input
              className="card__list-input card__list-input--small"
              type="text"
              defaultValue="1624/2-24"
            />
            <span className="card__list-name card__list-date">Date:</span>
            <DatePicker
              className="card__list-input card__list-input--small"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM.dd.yyyy"
            />
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Business entity:</span>
            <CustomSelect
              options={businessEntityOptions}
              selectedOptions={businessEntity}
              onChange={setBusinessEntity}
              isMulti={false}
              placeholder="Select business entity"
            />
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Company type:</span>
            <CustomSelect
              options={companyTypeOptions}
              selectedOptions={companyTypes}
              onChange={setCompanyTypes}
              isMulti={true}
              placeholder="Select company types"
            />
          </li>
        </ul>
      ) : (
        <ul className="card__list">
          <li className="card__list-item">
            <span className="card__list-name">Agreement:</span>
            <span className="card__list-value">
              1624/2-24 <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>/</span> 03.12.2024
            </span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Business entity:</span>
            <span className="card__list-value">
              {businessEntity.length > 0 ? businessEntity : "-"}
            </span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Company type:</span>
            <span className="card__list-value">
              {companyTypes.length > 0 ? companyTypes.join(", ") : "-"}
            </span>
          </li>
        </ul>
      )}
    </>
  );
}

function ContactsList({ isEditing }) {
  return (
    <>
      {isEditing ? (
        <ul className="card__list card__list-edit">
          <li className="card__list-item">
            <span className="card__list-name">Responsible person:</span>
            <input
              type="text"
              defaultValue="David Rosenberg"
              className="card__list-input"
            />
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Phone number:</span>
            <input
              type="tel"
              defaultValue="+1 702 555 2345"
              className="card__list-input"
            />
          </li>
          <li className="card__list-item">
            <span className="card__list-name">E-mail:</span>
            <input
              type="email"
              defaultValue="david_rosenberg88@gmail.com"
              className="card__list-input"
            />
          </li>
        </ul>
      ) : (
        <ul className="card__list">
          <li className="card__list-item">
            <span className="card__list-name">Responsible person:</span>
            <span className="card__list-value">David Rosenberg</span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Phone number:</span>
            <span className="card__list-value">+1 702 555 2345</span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">E-mail:</span>
            <span className="card__list-value">david_rosenberg88@gmail.com</span>
          </li>
        </ul>
      )}
    </>
  );
}
