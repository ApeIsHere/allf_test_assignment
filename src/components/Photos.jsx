import { observer } from "mobx-react-lite";
import Button from "./ui/Button";
import PhotoIcon from "./ui/PhotoIcon";
import TrashIcon from "./ui/TrashIcon";
import companyStore from "../stores/CompanyStore";
import { useRef } from "react";
import { validateImageFile } from "../utils/validators";
import { toast } from "react-toastify";

const Photos = observer(() => {
  const { photos } = companyStore.company;

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!validateImageFile(file)) {
        toast.error("Selected file should be image and less than 2mb.");
        return;
      }

      companyStore.uploadPhoto(file);
    }
    e.target.value = null; // reset
  };

  const handleDelete = (photoName) => {
    companyStore.deletePhoto(photoName);
  };

  return (
    <div className="photos">
      <PhotosTitle handleUpload={handleUpload} />
      <PhotosContainer photos={photos} handleDelete={handleDelete} />
    </div>
  );
});

export default Photos;

function PhotosTitle({ handleUpload }) {
  const inputRef = useRef(null);
  return (
    <>
      <div className="photos__title">
        <h2 className="photos__title-text">Photos</h2>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleUpload}
          style={{ display: "none" }}
        />
        <Button
          aria-label="Add photo"
          type="outline"
          size="mini"
          width="73px"
          icon={<PhotoIcon />}
          onClick={() => inputRef.current.click()}
        >
          Add
        </Button>
      </div>
    </>
  );
}

function PhotosContainer({ photos, handleDelete }) {
  return (
    <div className="photos__content">
      <ul className="photos__items">
        {photos.map((photo) => (
          <PhotoItem
            key={photo.name}
            path={photo.filepath}
            onClick={() => handleDelete(photo.name)}
          />
        ))}
      </ul>
    </div>
  );
}

function PhotoItem({ path, onClick }) {
  return (
    <li className="photos__item">
      <img src={path} alt="image" loading="lazy" />
      <button className="photos__item-delete" aria-label="Delete photo" onClick={onClick}>
        <TrashIcon />
      </button>
    </li>
  );
}
