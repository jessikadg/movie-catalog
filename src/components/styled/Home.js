import { styled } from "styled-components";

export const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5vh;

  @media screen and (max-width: 589px) {
    padding: 2vh;
  }
`;

export const ShadowOverlay = styled.div`
  position: fixed;
  pointer-events: none;
  bottom: 0;
  height: 50vh;
  width: 100vw;
  z-index: 2;
  background: linear-gradient(
    0deg,
    rgba(00, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 30%
  );
`;
