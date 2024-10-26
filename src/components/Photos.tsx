import React, { ChangeEvent } from "react";
import { Photo } from "./Photo";
import { setChangedFilterText } from "../redux/action-creator/actions";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";


interface PhotoType {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}


export const Photos: React.FC = () => {

  const photos = useTypedSelector((state) => state.photos.photos);
  const filter = useTypedSelector((state) => state.photos.filter)

  const {setChangedFilterText} = useActions()

  const id: string | undefined = useParams().id
  let filteredPhotos: any
  if (typeof id === 'string'){
   filteredPhotos = photos
  .filter((photo: PhotoType) => photo.albumId === parseInt(id))
  .filter((photo: PhotoType) => photo.title.indexOf(filter) > -1)}

  const handleTextFilter = (event: ChangeEvent<HTMLInputElement>): void  => {
    setChangedFilterText(event.target.value)
  }

  if (isNaN(parseInt( id as string))) {
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
        {filteredPhotos.map((photo: PhotoType) => {
          return <Photo photo={photo} key={photo.id} />;
        })}
      </ul>
    </div>
  );
};
