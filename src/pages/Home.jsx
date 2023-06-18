import { styled } from "styled-components";
import ShowCatalog from "../components/ShowCatalog";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <>
      <ShadowOverlay />

      <TopBar>
        <div>Ubi Ops</div>
        <div>Assessment by Jess Gomes</div>
      </TopBar>
      <SearchBar />
      <ShowCatalog />
    </>
  );
}
const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5vh;

  @media screen and (max-width: 589px) {
    padding: 2vh;
  }
`;

const ShadowOverlay = styled.div`
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
