import { Link, useParams } from "react-router-dom";

import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";
import EditIcon from "./icons/EditIcon";
import { useMemo } from "react";
import { words } from "../mock/data";

const WordModal = () => {
  const { id } = useParams();
  const word = useMemo(
    () => words.find((w) => w.id === id) || { name: "", translation: "" },
    [id]
  );

  return (
    <Modal>
      <div className="modal-content">
        <Card word={word} open={true} />
        <div className="actions">
          <Button type="icon">
            <div style={{ display: "flex" }}>
              <EditIcon />
            </div>
          </Button>
          <Link to="/">
            <Button type="secondary" text="Закрыть" />{" "}
          </Link>
        </div>
        <Button text="Начать тренировку" />
      </div>
    </Modal>
  );
};

export default WordModal;
