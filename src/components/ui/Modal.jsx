import Button from "./Button";

function Modal({ isOpen, type }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      {type === "rename" ? (
        <>
          <div className="modal__container modal__container--high">
            <h3 className="modal__title">Specify the Organization's name</h3>
            <input
              className="modal__input"
              type="text"
              placeholder="Eternal Rest Funeral Home"
            />
            <div className="modal__buttons">
              <Button type="outline" width="148px">
                Cancel
              </Button>
              <Button type="filled" width="148px">
                Save changes
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="modal__container modal__container--low">
            <div className="modal__dialog">
              <h3 className="modal__title">Remove the Organization?</h3>
              <p className="modal__text">
                Are you sure you want to remove this Organozation?
              </p>
            </div>
            <div className="modal__buttons">
              <Button type="outline" width="148px">
                No
              </Button>
              <Button type="filled" width="148px">
                Yes, remove
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
