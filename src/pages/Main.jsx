import styled from "styled-components";
import Content from "../components/Content";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
`;
const MainPage = ({ loading }) => {
  return (
    <Container>
      <Header />
      <Content loading={loading} />
      <Outlet />
    </Container>
  );
};

export default MainPage;
