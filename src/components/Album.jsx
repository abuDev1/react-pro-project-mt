import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectId } from "../redux/actions";


export const Album = ({ album }) => {

    const selectedAlbumId = useSelector((state) => state.albums.selectedAlbumId)

    const dispatch = useDispatch()
    const selectAlbumId = () => {
        dispatch(selectId(album.id))
    }

    
    return (
      <li onClick={selectAlbumId} className={selectedAlbumId === album.id ? 'selected' : ''}>
        <div className="album-name">{album.title} </div>
      </li>
    )
  }