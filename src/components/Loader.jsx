import styled from "styled-components";

const SLoader = styled.div`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border-radius: 50px;
  background-color: #b1b1b1;
`;

const Loader = ({ width = 230, height = 30 }) => {
  return <SLoader $width={width} $height={height} />;
};

export default Loader;
