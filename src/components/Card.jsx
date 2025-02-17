import styled from "styled-components";
import Loader from "./Loader";
import LoaderCard from "./LoaderCard";
import { colors } from "../utils/colors";
import { Link } from "react-router-dom";

const SCard = styled.article`
  width: 270px;
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ $color }) => $color};
  border: 1px solid #101010;
  border-radius: 24px;

  font-size: 24px;
`;

const CardTitle = styled.div`
  color: ${(props) => (!props.$open ? "#101010" : "#ffffff")};
  font-size: ${(props) => (!props.$open ? "16px" : "24px")};
`;
const CardBottom = styled.div`
  color: ${(props) => (!props.$open ? "#101010" : "#ffffff")};
  font-size: ${(props) => (!props.$date ? "14px" : "12px")};
`;

const Card = ({ word, loading, open }) => {
  return (
    <>
      {open ? (
        <SCard $color="#101010">
          {loading ? <Loader /> : <CardTitle $open>{word?.name}</CardTitle>}
          {loading ? (
            <Loader />
          ) : (
            <CardBottom $open>{word?.translation}</CardBottom>
          )}
        </SCard>
      ) : (
        <>
          {loading ? (
            <LoaderCard />
          ) : (
            <Link to={"/card/" + word?.id}>
              <SCard $color={colors[word?.status]}>
                {loading ? <Loader /> : <CardTitle>{word?.name}</CardTitle>}
                {loading ? (
                  <Loader />
                ) : (
                  <CardBottom $date>{word?.deadline}</CardBottom>
                )}
              </SCard>
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default Card;
