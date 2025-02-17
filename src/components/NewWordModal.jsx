import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import Calendar from "./Calendar";
const NewWordModal = () => {
  const [isDeadline, setIsDeadline] = useState(false);

  const [status, setStatus] = useState("Новое");

  const handleAddWord = async () => {};

  return (
    <Modal hasCloseButton={true}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Новое слово</h2>
        </div>
        <div className="modal-body">
          <div>
            <Input type="text" placeholder="Слово" required />
            <Input type="text" placeholder="Перевод" required />
          </div>
          <div className="deadline">
            <label className="deadline-label">
              <input
                type="checkbox"
                checked={isDeadline}
                onChange={() => setIsDeadline(!isDeadline)}
                className="custom-checkbox"
              />
              <span className="deadline-custom-checkbox"></span>
              <span>Дедлайн</span>
            </label>
          </div>
          {isDeadline && <Calendar />}
          <div className="categories-wrapper">
            <h3 className="categories-title">Категория</h3>
            <div className="categories-block">
              {["Новое", "В процессе", "Выучено"].map((option) => (
                <label key={option} className="custom-radio">
                  <input
                    type="radio"
                    value={option}
                    checked={status === option}
                    onChange={() => setStatus(option)}
                    required
                  />
                  <span className="radio-mark"></span>
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button text="Добавить слово" onClick={handleAddWord} />
        </div>
      </div>
    </Modal>
  );
};

export default NewWordModal;
