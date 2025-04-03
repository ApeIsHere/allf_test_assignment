import Button from "./ui/Button.jsx";
import EditIcon from "./ui/EditIcon.jsx";

function Card({ type = null }) {
  return (
    <div className="card">
      <CardTitle type={type} />
      {type === "details" && <CompanyDetailsList />}
      {type === "contacts" && <ContactsList />}
    </div>
  );
}

export default Card;

function CardTitle({ type }) {
  return (
    <>
      <div className="card__title">
        <h2 className="card__title-text">
          {type === "details" && "Company Details"}
          {type === "contacts" && "Contacts"}
        </h2>
        <Button type="outline" size="mini" width="71px" icon={<EditIcon />}>
          Edit
        </Button>
      </div>
    </>
  );
}

function CompanyDetailsList() {
  return (
    <ul className="card__list">
      <li className="card__list-item">
        <span className="card__list-name">Agreement:</span>
        <span className="card__list-value">
          1624/2-24 <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>/</span> 03.12.2024
        </span>
      </li>
      <li className="card__list-item">
        <span className="card__list-name">Business entity:</span>
        <span className="card__list-value">Partnership</span>
      </li>
      <li className="card__list-item">
        <span className="card__list-name">Company type:</span>
        <span className="card__list-value">Funeral Home, Logistics services</span>
      </li>
    </ul>
  );
}

function ContactsList() {
  return (
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
  );
}
