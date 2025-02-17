import styled from "styled-components";
import Loader from "./Loader";

const SCard = styled.div`
  width: 270px;
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #d9d9d9;
  border: 1px solid #101010;
  border-radius: 24px;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const LoaderCard = () => {
  return (
    <SCard>
      <LoaderContainer>
        <Loader />
        <Loader width={164} />
      </LoaderContainer>
      <Loader width={81} height={15} />
    </SCard>
  );
};

export default LoaderCard;
