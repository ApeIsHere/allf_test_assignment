function ContactsList({ isEditing, companyStore }) {
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
            <span className="card__list-value">
              {companyStore.contact.firstname} {companyStore.contact.lastName}
            </span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">Phone number:</span>
            <span className="card__list-value">{companyStore.contact.phone}</span>
          </li>
          <li className="card__list-item">
            <span className="card__list-name">E-mail:</span>
            <span className="card__list-value">{companyStore.contact.email}</span>
          </li>
        </ul>
      )}
    </>
  );
}

export default ContactsList;
