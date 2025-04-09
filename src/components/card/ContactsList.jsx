import { formatPhone } from "../../utils/formatPhone";

function ContactsList({ isEditing, contact, formData, setFormData }) {
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const formattedPhone = formatPhone(contact.phone);

  return (
    <>
      {isEditing ? (
        <ul className="card__list card__list-edit">
          <li className="card__list-item">
            <span className="card__list-name">Responsible person:</span>
            <input
              type="text"
              value={`${formData.firstname || contact.firstname} ${
                formData.lastname || contact.lastname
              }`}
              className="card__list-input"
              onChange={(e) => {
                const [firstname, lastname] = e.target.value.split(" ");
                handleInputChange("firstname", firstname);
                handleInputChange("lastname", lastname || "");
              }}
            />
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Phone number:</span>
            <input
              type="tel"
              value={formData.phone || contact.phone}
              className="card__list-input"
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </li>
          <li className="card__list-item">
            <span className="card__list-name">E-mail:</span>
            <input
              type="email"
              value={formData.email || contact.email}
              className="card__list-input"
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </li>
        </ul>
      ) : (
        <ul className="card__list">
          <li className="card__list-item">
            <span className="card__list-name">Responsible person:</span>
            <span className="card__list-value">
              {contact.firstname} {contact.lastname}
            </span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Phone number:</span>
            <span className="card__list-value">{formattedPhone}</span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">E-mail:</span>
            <span className="card__list-value">{contact.email}</span>
          </li>
        </ul>
      )}
    </>
  );
}

export default ContactsList;
