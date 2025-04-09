import { observer } from "mobx-react-lite";
import Button from "./ui/Button";
import PhotoIcon from "./ui/PhotoIcon";
import TrashIcon from "./ui/TrashIcon";
import companyStore from "../stores/CompanyStore";
import { useRef, useState } from "react";
import { validateImageFile } from "../utils/validators";
import { toast } from "react-toastify";
import Modal from "./ui/Modal";

const Photos = observer(() => {
  const { photos } = companyStore.company;
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [filePath, setFilePath] = useState("");

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

  const handleOpenImage = (filePath) => {
    setIsPhotoModalOpen(true);
    setFilePath(filePath);
    console.log(filePath);
  };

  return (
    <>
      <div className="photos">
        <PhotosTitle handleUpload={handleUpload} />
        <PhotosContainer
          photos={photos}
          handleDelete={handleDelete}
          handleOpenImage={handleOpenImage}
        />
      </div>
      <Modal
        type="photo"
        isModalOpen={isPhotoModalOpen}
        setIsModalOpen={setIsPhotoModalOpen}
        filePath={filePath}
      />
    </>
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

function PhotosContainer({ photos, handleDelete, handleOpenImage }) {
  return (
    <div className="photos__content">
      <ul className="photos__items">
        {photos.map((photo) => (
          <PhotoItem
            key={photo.name}
            path={photo.thumbpath}
            onOpen={() => handleOpenImage(photo.filepath)}
            onClick={() => handleDelete(photo.name)}
          />
        ))}
      </ul>
    </div>
  );
}

function PhotoItem({ path, onClick, onOpen }) {
  return (
    <li className="photos__item" onClick={onOpen}>
      <img src={path} alt="image" loading="lazy" />
      <button className="photos__item-delete" aria-label="Delete photo" onClick={onClick}>
        <TrashIcon />
      </button>
    </li>
  );
}
