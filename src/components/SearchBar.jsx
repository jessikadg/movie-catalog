import getSearchResults from "../api/getSearchResults";
import { useState, useEffect } from "react";
import {
  SearchBarContainer,
  SearchBarWrapper,
  SearchInput,
  SearchResultRow,
  SearchResultsDropDown,
  SearchBackgroundOverlay,
  SearchInputArea,
} from "./styled/Search.styled";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchTerm !== "" &&
      getSearchResults(searchTerm).then((results) => setSearchResults(results));
  }, [searchTerm]);

  return (
    <>
      <SearchBarWrapper>
        <SearchBarContainer>
          <span>Know everything about your favourite show</span>
          <SearchInputArea>
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <AiOutlineSearch size={25} />
          </SearchInputArea>

          {/* Loading and Error handling could also be implemented here */}
          {searchTerm !== "" && (
            <>
              <SearchBackgroundOverlay />
              <SearchResultsDropDown>
                {/* Accessibility can be improved: making the focus managable by keyboard for example */}
                {searchResults.length ? (
                  searchResults.map((result) => (
                    <Link to={`/show/${result.show.id}`}>
                      <SearchResultRow>
                        {result.show.name}
                        <img
                          src={result?.show?.image?.medium}
                          alt={`${result.show.name}`}
                        />
                      </SearchResultRow>
                    </Link>
                  ))
                ) : (
                  <p>Sorry, we couldn't find the show you are looking for</p>
                )}
              </SearchResultsDropDown>
            </>
          )}
        </SearchBarContainer>
      </SearchBarWrapper>
    </>
  );
}
