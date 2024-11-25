import { useRef } from "react";
import styled from "styled-components";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

const SearchBar = () => {
  const inputRef = useRef();
  const { setSearchText } = useSearchTextStore();
  return (
    <SearchContainer>
      <StyledInput ref={inputRef} />
      <SearchText
        onClick={() => {
          setSearchText(inputRef.current.value);
          console.log(inputRef.current.value);
        }}
      >
        검색
      </SearchText>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 5px;
`;

const StyledInput = styled.input`
  border: 1px solid #dddddd;
  border-right: none;
  border-radius: 50px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 16px;
  padding: 10px 15px;
`;

const SearchText = styled.button`
  border: 1px solid #dddddd;
  border-radius: 50px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 16px;
  padding: 10px 15px;
`;
