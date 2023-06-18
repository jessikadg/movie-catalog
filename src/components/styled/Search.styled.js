import { styled } from "styled-components";

export const SearchBarWrapper = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBarContainer = styled.div`
  background-color: #1f1f1f;
  width: 70%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 140px;
  z-index: 1;

  span {
    margin: 20px auto;
  }
`;

export const SearchInput = styled.input`
  background-color: #2f2f2f;
  height: 30px;
  width: 300px;
  color: white;
  margin: 5px auto;
  font-size: 22px;
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
`;

export const SearchResultsDropDown = styled.div`
  z-index: 2;
  background-color: rgb(50, 50, 50);
  border-radius: 20px;
  padding: 5px 15px;
`;

export const SearchResultRow = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid darkgray;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;

  img {
    width: 50px;
  }

  &:hover {
    background: rgb(15, 15, 15);
    border-radius: 20px;
    border: none;
  }
`;

export const SearchBackgroundOverlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;
