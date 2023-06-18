import { styled } from "styled-components";

export const Card = styled.div`
  height: 300px;
  width: 200px;
  margin-right: 5px;
  display: block;
  background-size: cover;
  background-image: ${(props) => `url(${props.backgroundimage})`};
`;
