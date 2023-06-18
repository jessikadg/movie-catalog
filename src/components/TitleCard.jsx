import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { Card } from "./styled/TitleCard.styled";

export default function TitleCard(props) {
  const { tvShow, rowCategory } = props;

  return (
    <LazyLoad offset={300}>
      <Link to={`/show/${tvShow.id}`}>
        <Card
          backgroundImage={tvShow.image.medium}
          key={`${rowCategory}-${tvShow.id}`}
        />
      </Link>
    </LazyLoad>
  );
}
