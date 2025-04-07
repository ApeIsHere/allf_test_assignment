import Button from "../ui/Button.jsx";
import EditIcon from "../ui/EditIcon.jsx";
import XIcon from "../ui/XIcon.jsx";
import CheckIcon from "../ui/CheckIcon.jsx";

function CardTitle({ type, onSaveClick, onCancelClick, onEditClick, isEditing }) {
  return (
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
            onClick={onSaveClick}
          >
            Save changes
          </Button>
          <Button
            type="outline"
            size="mini"
            width="91px"
            icon={<XIcon />}
            onClick={onCancelClick}
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
  );
}

export default CardTitle;
