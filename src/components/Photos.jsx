import Button from "./ui/Button";
import PhotoIcon from "./ui/PhotoIcon";
import TrashIcon from "./ui/TrashIcon";

function Photos() {
  return (
    <div className="photos">
      <PhotosTitle />
      <PhotosContainer />
    </div>
  );
}

export default Photos;

function PhotosTitle() {
  return (
    <>
      <div className="photos__title">
        <h2 className="photos__title-text">Photos</h2>
        <Button
          aria-label="Add photo"
          type="outline"
          size="mini"
          width="73px"
          icon={<PhotoIcon />}
        >
          Add
        </Button>
      </div>
    </>
  );
}

function PhotosContainer() {
  return (
    <div className="photos__content">
      <ul className="photos__items">
        <PhotoItem path={"images/image_2.png"} />
        <PhotoItem path={"images/image_3.png"} />
        <PhotoItem path={"images/image_1.png"} />
      </ul>
    </div>
  );
}

function PhotoItem({ path }) {
  return (
    <li className="photos__item">
      <img src={path} alt="image" loading="lazy" />
      <button className="photos__item-delete" aria-label="Delete photo">
        <TrashIcon />
      </button>
    </li>
  );
}
