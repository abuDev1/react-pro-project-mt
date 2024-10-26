import React from 'react'
import { Album } from './Album'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { albumData } from '../types/types'


export const Albums: React.FC = () => {

const albums = useTypedSelector((state) => state.albums.albums)


  return (
    <div className='albums'>
        <ul>
        {
            albums.map((album: albumData) => {
                return (
                    <Album album = {album} key = {album.id}/>
                )
            })
        }
        </ul> 
    </div>
  )
}
