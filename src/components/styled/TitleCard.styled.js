import { styled } from "styled-components";

export const Card = styled.div`
  height: 300px;
  width: 200px;
  margin-right: 5px;
  display: block;
  background-size: cover;
  background-image: ${(props) => `url(${props.backgroundimage})`};
  // Index here is used to make a 'domino effect' on the animation, from left to right, when page is loaded
  animation: fadein ${(props) => `${Number(props.index * 0.1)}s`} ease-in-out;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
