import {
  CategoryFixedRow,
  ScrollCategory,
  CategoryTitle,
} from "./styled/CategoryRow.styled";
import TitleCard from "./TitleCard";

export default function CategoryRow(props) {
  const { showsOnCategory, category } = props;

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>

      <CategoryFixedRow>
        <ScrollCategory>
          {showsOnCategory.map((tvShow, index) => (
            <TitleCard tvShow={tvShow} rowCategory={category} index={index} />
          ))}
        </ScrollCategory>
      </CategoryFixedRow>
    </>
  );
}
