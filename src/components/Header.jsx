import styled from "styled-components";
import Button from "./Button";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 24px 24px;
  padding: 0 135px;
  height: 68px;
  background: #101010;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const Header = () => {
  return (
    <SHeader>
      <Logo>SkyWords</Logo>
      <div className="header__actions">
        <Button type="tertiary" text="Выйти" />
      </div>
    </SHeader>
  );
};

export default Header;
