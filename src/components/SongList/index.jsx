import { useQuery } from "@tanstack/react-query";
import Song from "../Song";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

const SongList = () => {
  const { searchText } = useSearchTextStore();

  const { data, isLoading } = useQuery({
    queryKey: ["getSong", searchText],
    queryFn: () => {
      return fetch(
        searchText
          ? `https://api.manana.kr/karaoke/song/${searchText}.json`
          : "https://api.manana.kr/karaoke.json"
      ).then((res) => {
        return res.json();
      });
    },
  });

  if (isLoading) return "Loading...";

  if (!data) return "No data";

  return (
    <div style={{ padding: "20px", boxSizing: "border-box" }}>
      {data.map((song) => {
        return (
          <Song
            key={song.no}
            title={song.title}
            singer={song.singer}
            no={song.no}
          ></Song>
        );
      })}
    </div>
  );
};

export default SongList;
