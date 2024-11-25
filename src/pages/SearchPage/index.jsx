import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/liked");
        }}
      >
        Liked
      </button>
      <SearchBar />
      <SongList />
    </div>
  );
};

export default SearchPage;
