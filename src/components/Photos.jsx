import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Photo } from "./Photo";
import { setChangedFilterText } from "../redux/actions";

export const Photos = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.photos);
  const selectedAlbumId = useSelector((state) => state.selectedAlbumId);
    const filter = useSelector((state) => state.filter)

  const filteredPhotos = photos
  .filter((photo) => photo.albumId === selectedAlbumId)
  .filter((photo) => photo.title.indexOf(filter) > -1)

  const handleTextFilter = (event) => {
    dispatch(setChangedFilterText(event.target.value))
  }

  if (selectedAlbumId === null) {
    return (
      <div className="no_selected_album">
        <span>⭠</span> Выберите пользователя
      </div>
    );
  }

  return (
    <div className="photos">
        <div className="filter">
        <input type="text" 
        placeholder="Поиск по тексту ..."
        value={filter}
        onChange={handleTextFilter}
        />
        </div>
      <ul>
        {filteredPhotos.map((photo) => {
          return <Photo photo={photo} key={photo.id} />;
        })}
      </ul>
    </div>
  );
};
