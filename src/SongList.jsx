import React, { useContext } from "react";
import { MixtapeContext } from "./components/mixtapeContext";
import { Song } from "./Song";

export const SongList = () => {
  // Your code here! ✨
  const songList = useContext(MixtapeContext);
  return (
    <>
      <h2>TODO: Update taste in music...?</h2>
      {songList.map((song) => (
        <Song
          artist={song.artist}
          genre={song.genre}
          name={song.name}
          year="2023"
        />
      ))}
    </>
  );
};
