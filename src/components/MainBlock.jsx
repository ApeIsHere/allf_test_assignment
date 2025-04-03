import Button from "./ui/Button";
import Card from "./Card";
import ChevronIcon from "./ui/ChevronIcon";
import EditIcon from "./ui/EditIcon";
import TrashIcon from "./ui/TrashIcon";

function MainBlock() {
  return (
    <main className="main-block">
      <div className="main-block__container">
        <MainBlockTitle />
        <Card type="details" />
        <Card type="contacts" />
        <Card />
      </div>
    </main>
  );
}

export default MainBlock;

function MainBlockTitle() {
  return (
    <div className="main-block__title">
      <span className="main-block__title-chevron">
        <Button type="bright" size="small" icon={<ChevronIcon />} />
      </span>
      <h1 className="main-block__title-text">Eternal Rest Funeral Home</h1>
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
