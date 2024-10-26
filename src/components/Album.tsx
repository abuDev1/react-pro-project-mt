import React from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface AlbumProps {
  userId?: number,
  id?: number,
  title?: string,
  album?: any
}

export const Album: React.FC<AlbumProps> = (props) => {

    const selectedAlbumId = useTypedSelector((state) => state.albums.selectedAlbumId)
    
    return (
      <li className={selectedAlbumId === props.id ? 'selected' : ''}>
        <Link to={`/${props.id}`}>
        <div className="album-name">{props.title} </div>
        </Link>
      </li>
    )
  }