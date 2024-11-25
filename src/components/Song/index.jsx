import styled from "styled-components";

const Song = ({ title, singer, no }) => {
  return (
    <SongContainer>
      <div>
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div style={{ color: "#aaa" }}>{singer}</div>
      </div>
      <SongNumber>{no}</SongNumber>
    </SongContainer>
  );
};

export default Song;

const SongContainer = styled.div`
  padding: 15px 20px;
  border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px -6px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SongNumber = styled.div`
  font-size: 22px;
`;
