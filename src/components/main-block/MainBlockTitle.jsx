import Button from "../ui/Button";
import ChevronIcon from "../ui/ChevronIcon";
import EditIcon from "../ui/EditIcon";
import TrashIcon from "../ui/TrashIcon";

function MainBlockTitle({ companyStore }) {
  return (
    <div className="main-block__title">
      <span className="main-block__title-chevron">
        <Button type="bright" size="small" icon={<ChevronIcon />} />
      </span>
      <h1 className="main-block__title-text">{companyStore.company.name}</h1>
      <div className="main-block__title-buttons">
        <span className="main-block__title-pen">
          <Button type="bright" size="small" icon={<EditIcon />} />
        </span>
        <span className="main-block__title-trash">
          <Button type="bright" size="small" icon={<TrashIcon />} />
        </span>
      </div>
    </div>
  );
}

export default MainBlockTitle;
