// import { useState } from "react";
import styled from "styled-components";

export function HomeHeader(props) {
  //   const [featuredShowByIndex, setFeaturedShowByIndex] = useState();

  //   const { featuredShows } = props;

  //   setTimeout(()=>{}, 3000)

  return <Header>The best shows of all time</Header>;
}

const Header = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 32px;

  @media screen and (max-width: 589px) {
    height: 60vh;
  }
`;
