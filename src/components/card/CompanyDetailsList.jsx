import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomSelect from "../ui/CustomSelect.jsx";

function CompanyDetailsList({ isEditing, companyStore, formData, setFormData }) {
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

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <>
      {isEditing ? (
        <ul className="card__list card__list-edit">
          <li className="card__list-item">
            <span className="card__list-name">Agreement number:</span>
            <input
              className="card__list-input card__list-input--small"
              type="text"
              value={formData.contractNo || companyStore.company.contract.no}
              onChange={(e) => handleInputChange("contractNo", e.target.value)}
            />
            <span className="card__list-name card__list-date">Date:</span>
            <DatePicker
              className="card__list-input card__list-input--small"
              selected={
                formData.issueDate
                  ? new Date(formData.issueDate)
                  : new Date(companyStore.company.contract.issue_date)
              }
              onChange={(date) => handleInputChange("issueDate", date.toISOString())}
              dateFormat="MM.dd.yyyy"
            />
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Business entity:</span>
            <CustomSelect
              options={businessEntityOptions}
              selectedOptions={
                formData.businessEntity || [companyStore.company.businessEntity]
              }
              onChange={(value) => handleInputChange("businessEntity", value)}
              isMulti={false}
              placeholder="Select business entity"
            />
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Company type:</span>
            <CustomSelect
              options={companyTypeOptions}
              selectedOptions={formData.companyTypes || companyStore.company.type}
              onChange={(value) => handleInputChange("companyTypes", value)}
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
              {companyStore.company.contract.no || "-"}{" "}
              <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>/</span>{" "}
              {companyStore.company.contract.issue_date
                ? new Date(companyStore.company.contract.issue_date)
                    .toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    })
                    .replace(/\//g, ".")
                : "-"}
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
