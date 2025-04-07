import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomSelect from "../ui/CustomSelect.jsx";

function CompanyDetailsList({ isEditing, companyStore }) {
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
              {companyStore.company.contract.no}{" "}
              <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>/</span>{" "}
              {new Date(companyStore.company.contract.issue_date)
                .toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })
                .replace(/\//g, ".")}
            </span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Business entity:</span>
            <span className="card__list-value">
              {companyStore.company.businessEntity || "-"}
            </span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Company type:</span>
            <span className="card__list-value">
              {companyStore.company.type.length > 0
                ? companyStore.company.type.join(", ")
                : "-"}
            </span>
          </li>
        </ul>
      )}
    </>
  );
}

export default CompanyDetailsList;
