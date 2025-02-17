import styled from "styled-components";
import Button from "./Button";
import Column from "./Column";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 24px;
  padding: 0 135px;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 42px;
  overflow-x: scroll;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding-top: 96px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const Content = ({ loading }) => {
  return (
    <Container>
      <ContentContainer>
        {["Новое", "В процессе", "Выучено"].map((title, i) => (
          <Column loading={loading} title={title} key={i} />
        ))}
      </ContentContainer>
      <ButtonContainer>
        <ButtonWrapper>
          {loading ? (
            <Loader />
          ) : (
            <Link to="/card/add">
              <Button type="secondary" text="Добавить слово" />
            </Link>
          )}
        </ButtonWrapper>
        {loading ? (
          <Loader />
        ) : (
          <Link to="/train">
            <Button text="Начать тренировку" />
          </Link>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Content;
