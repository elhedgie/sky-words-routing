import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";
import { words } from "../mock/data";
import ClosedWordIcon from "./icons/ClosedWordIcon";
import { OpenWordIcon } from "./icons/OpenWordIcon";

const CardWrapper = styled.div`
  position: relative;
  padding-left: 20px;
  perspective: 1000px;
`;

const CardContainer = styled.div`
  position: relative;
  width: 270px;
  height: 159px;
  perspective: 1000px;
`;

const Card = styled.div`
  width: 270px;
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px solid #101010;
  border-radius: 24px;
  position: absolute;
  top: 0;
  right: 20px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 0.7s ease;
`;

const FrontCard = styled(Card)`
  background-color: #d9b6ff;
  color: #101010;
  transform: rotateY(0deg);
`;

const BackCard = styled(Card)`
  background-color: #101010;
  color: white;
  transform: rotateY(180deg);
`;

const GreenBackground = styled.div`
  position: absolute;
  width: 270px;
  height: 159px;
  background-color: #d5ff42;
  border-radius: 24px;
  border: 1px solid #101010;
  top: 0;
  right: 20px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    right: -16px;
    bottom: 0;
    z-index: -1;
    width: 40px;
    background-image: url("src/assets/card-bg.png");
    background-repeat: no-repeat;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 7px;
`;

const TrainingComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex] = useState(0);

  const trainArray = useMemo(
    () => words.filter((w) => w.status !== "Выучено") || [],
    []
  );

  const currentWord = useMemo(
    () => ({
      id: trainArray[startIndex]?.id,
      name: trainArray[startIndex]?.name,
      translation: trainArray[startIndex]?.translation || "",
    }),
    [trainArray, startIndex]
  );

  const handleOpenCard = () => setIsOpen((prev) => !prev);

  const handleSuccess = async () => {};
  const handleFail = async () => {};

  return (
    <div className="bg">
      <Modal>
        <div className="progress-bar"></div>
        <CardWrapper>
          <GreenBackground />
          <CardContainer>
            <FrontCard
              style={{
                transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <p className="word-name_closed">{currentWord.name}</p>
              {!trainArray.length && <p>Слов больше нет</p>}
            </FrontCard>

            <BackCard
              style={{
                transform: isOpen ? "rotateY(0deg)" : "rotateY(-180deg)",
              }}
            >
              <div className="word-wrapper">
                <p className="word-name">{currentWord.name}</p>
                <p className="word-translation">{currentWord.translation}</p>
              </div>
            </BackCard>
          </CardContainer>
        </CardWrapper>

        <ButtonWrapper>
          {isOpen ? (
            <Button
              disabled={!trainArray.length}
              onClick={handleFail}
              type="secondary"
              text="Далее"
            />
          ) : (
            <Button
              disabled={!trainArray.length}
              onClick={handleFail}
              type="secondary"
              text="Не помню"
            />
          )}

          <Button
            disabled={isOpen || !trainArray.length}
            onClick={handleOpenCard}
            type="icon"
          >
            <div style={{ display: "flex" }}>
              {!isOpen ? <ClosedWordIcon /> : <OpenWordIcon />}
            </div>
          </Button>

          <Button
            onClick={handleSuccess}
            disabled={isOpen || !trainArray.length}
            text="Помню"
          />
        </ButtonWrapper>

        <Link to="/">
          <Button text="Завершить тренировку" />
        </Link>
      </Modal>
    </div>
  );
};

export default TrainingComponent;
