import Button from "../ui/Button";
import ChevronIcon from "../ui/ChevronIcon";
import EditIcon from "../ui/EditIcon";
import TrashIcon from "../ui/TrashIcon";
import Modal from "../ui/Modal";
import { useState } from "react";

function MainBlockTitle({ companyName }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="main-block__title">
      <span className="main-block__title-chevron">
        <Button type="bright" size="small" icon={<ChevronIcon />} />
      </span>
      <h1 className="main-block__title-text">{companyName}</h1>
      <div className="main-block__title-buttons">
        <span className="main-block__title-pen">
          <Button
            type="bright"
            size="small"
            icon={<EditIcon />}
            onClick={() => setIsEditModalOpen(true)}
          />
        </span>
        <span className="main-block__title-trash">
          <Button
            type="bright"
            size="small"
            icon={<TrashIcon />}
            onClick={() => setIsDeleteModalOpen(true)}
          />
        </span>
      </div>
      <Modal
        type="edit"
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
      />
      <Modal
        type="delete"
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
      />
    </div>
  );
}

export default MainBlockTitle;
