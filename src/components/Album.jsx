import React from "react";
import { useDispatch } from "react-redux";
import { selectId } from "../redux/actions";


export const Album = ({ album }) => {

    const dispatch = useDispatch()
    const selectAlbumId = () => {
        dispatch(selectId(album.id))
    }

    
    return (
      <li onClick={selectAlbumId} className={selectAlbumId === album.id ? 'selected' : ''}>
        <div className="album-name">{album.title} </div>
      </li>
    )
  }