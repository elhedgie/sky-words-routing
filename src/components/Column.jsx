import styled from "styled-components";
import { words } from "../mock/data";
import Card from "./Card";
import Loader from "./Loader";

const SColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Heading = styled.h2``;

const Column = ({ title, loading }) => {
  return (
    <SColumn>
      {loading ? <Loader /> : <Heading>{title}</Heading>}
      <CardsContent>
        {words
          .filter((item) => item.status === title)
          .map((item, i) => (
            <Card loading={loading} word={item} key={i} />
          ))}
      </CardsContent>
    </SColumn>
  );
};

export default Column;
