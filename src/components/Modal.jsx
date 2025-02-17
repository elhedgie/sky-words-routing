import { Link } from "react-router-dom";
import styled from "styled-components";
import CloseIcon from "./icons/CloseIcon";

const Modal = ({ hasCloseButton, children }) => {
  return (
    <StyledBg>
      <StyledModal>
        {hasCloseButton && (
          <StyledCloseButton>
            <Link to="/">
              <CloseIcon />
            </Link>
          </StyledCloseButton>
        )}
        {children}
      </StyledModal>
    </StyledBg>
  );
};

// Стилизованные компоненты
const StyledBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(16, 16, 16, 0.2);
`;

const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  min-width: 310px;
  min-height: 354px;
  background-color: #f3f3f3;
  border-radius: 24px;
  border: 1px solid #101010;
`;

const StyledCloseButton = styled.div`
  position: absolute;
  top: 27px;
  right: 20px;
`;

export default Modal;
