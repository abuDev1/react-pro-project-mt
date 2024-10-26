import React, { useEffect } from "react";
import { Albums } from "./Albums";
import { Photos } from "./Photos";
import { Routes, Route } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { initialStateAlbums } from "../types/types";

export const App: React.FC  = () => {
  const { loadAlbums, loadPhotos } = useActions(); // заменяет useDispatch\

  const loadingAlbums = useTypedSelector((state) => state.albums.loadingAlbums);
  const loadingPhotos = useTypedSelector((state) => state.photos.loadingPhotos);

  useEffect(() => {
    loadAlbums();
    loadPhotos();
  }, []);

  if (loadingAlbums || loadingPhotos) {
    return <div className="loading">Да подожди ты ...</div>;
  }

  return (
    <div className="container">
      <Albums />

      <Routes>
        <Route path="/:id?" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
