import { useEffect, useState } from "react";
import getShowInfo from "../api/getShowInfo";
import { Link, useParams } from "react-router-dom";
import {
  DetailsContainer,
  DetailsTextArea,
  BackToHome,
  ShowTitle,
  ShowCategoryTag,
  ShowRating,
  ShowSummary,
  MoreInfoButton,
  BannerContainer,
} from "../components/styled/ShowDetails.styled";

export default function ShowDetails() {
  const [showInfo, setShowInfo] = useState();

  const router = useParams();
  let showId = router.id;

  useEffect(() => {
    getShowInfo(showId).then((info) => setShowInfo(info));
  }, [showId]);

  function createMarkup() {
    return { __html: showInfo?.summary };
  }
  return (
    <DetailsContainer>
      <DetailsTextArea>
        <Link to="/">
          <BackToHome> ← </BackToHome>
        </Link>

        <ShowTitle>{showInfo?.name}</ShowTitle>
        {showInfo?.genres.map((category) => (
          <ShowCategoryTag>{category}</ShowCategoryTag>
        ))}
        <ShowRating>Show Rating: {showInfo?.rating.average}</ShowRating>
        <ShowSummary>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </ShowSummary>
        <MoreInfoButton href={showInfo?.url} target="blank">
          Check it out on Tv Maze
        </MoreInfoButton>
      </DetailsTextArea>

      <BannerContainer>
        <img
          src={showInfo?.image?.original}
          alt="show cover"
          height="100%"
          width="100%"
        />
      </BannerContainer>
    </DetailsContainer>
  );
}
