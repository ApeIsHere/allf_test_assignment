import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import useOutsideClickAndEscape from "../../hooks/useOutsideClickAndEscape";
import companyStore from "../../stores/CompanyStore";
import { validateName } from "../../utils/validators";

function Modal({ type, isModalOpen, setIsModalOpen, filePath }) {
  const [companyName, setCompanyName] = useState(companyStore.company.name);
  const modalRef = useRef(null);

  const handleEditConfirm = () => {
    if (!validateName(companyName)) {
      toast.error("Company name shouldn't be empty");
      return;
    }
    companyStore.updateCompany({ name: companyName });
    setIsModalOpen(false);
  };
  const handleDeleteConfirm = () => {
    companyStore.deleteCompany();
    setIsModalOpen(false);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
    setCompanyName(companyStore.company.name);
  };

  useOutsideClickAndEscape(modalRef, handleCancelClick);

  if (!isModalOpen) return null;

  return (
    <div className="modal">
      {type === "edit" && (
        <>
          <div className="modal__container modal__container--high" ref={modalRef}>
            <h3 className="modal__title">Specify the Organization's name</h3>
            <input
              className="modal__input"
              type="text"
              placeholder="Enter the company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <div className="modal__buttons">
              <Button type="outline" width="148px" onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button type="filled" width="148px" onClick={handleEditConfirm}>
                Save changes
              </Button>
            </div>
          </div>
        </>
      )}{" "}
      {type === "delete" && (
        <>
          <div className="modal__container modal__container--low" ref={modalRef}>
            <div className="modal__dialog">
              <h3 className="modal__title">Remove the Organization?</h3>
              <p className="modal__text">
                Are you sure you want to remove this Organization?
              </p>
            </div>
            <div className="modal__buttons">
              <Button type="outline" width="148px" onClick={handleCancelClick}>
                No
              </Button>
              <Button type="filled" width="148px" onClick={handleDeleteConfirm}>
                Yes, remove
              </Button>
            </div>
          </div>
        </>
      )}
      {type === "photo" && (
        <img className="modal__image" src={filePath} alt="Preview" ref={modalRef} />
      )}
    </div>
  );
}

export default Modal;
