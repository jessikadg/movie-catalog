import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { Card } from "./styled/TitleCard.styled";

export default function TitleCard(props) {
  const { tvShow, rowCategory, index } = props;

  return (
    <LazyLoad offset={300}>
      <Link to={`/show/${tvShow.id}`}>
        {/* Index here is used as a prop for the animation */}
        <Card
          backgroundimage={tvShow.image.medium}
          key={`${rowCategory}-${tvShow.id}`}
          index={index}
        />
      </Link>
    </LazyLoad>
  );
}
