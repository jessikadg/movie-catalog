import ShowCatalog from "../components/ShowCatalog";
import SearchBar from "../components/SearchBar";
import { TopBar, ShadowOverlay } from "../components/styled/Home";

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
