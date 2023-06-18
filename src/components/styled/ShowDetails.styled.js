import { styled } from "styled-components";
import { device } from "../../global-styles/breakpoints";

export const DetailsContainer = styled.div`
  display: flex;
  padding: 5vh;
  gap: 20px;
  align-items: center;
  height: 90vh;
  justify-content: space-between;

  @media ${device.sm} {
    padding: 2vh;
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const DetailsTextArea = styled.div`
  width: 60%;

  @media ${device.sm} {
    width: 100%;
    margin-bottom: 60px;
  }
`;

export const BackToHome = styled.div`
  border: 2px solid white;
  color: white;
  width: min-content;
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
  position: absolute;
  top: 5vh;

  &:hover {
    background: white;
    color: black;
  }

  @media ${device.sm} {
    display: none;
  }
`;

export const ShowTitle = styled.h1`
  font-size: 36px;
`;

export const ShowCategoryTag = styled.span`
  background-color: rgba(100, 100, 100, 0.4);
  margin-right: 10px;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 12px;
`;

export const ShowRating = styled.div`
  margin-top: 20px;
`;

export const ShowSummary = styled.div`
  line-height: 2;
  margin-bottom: 36px;
`;

export const MoreInfoButton = styled.a`
  background-color: silver;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
  letter-spacing: 1px;
  text-decoration: none;
  color: white

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const BannerContainer = styled.div`
  max-width: 480px;
  display: flex;
  align-items: center;
  animation: fade-in 1s ease-in-out;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
