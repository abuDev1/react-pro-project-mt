import { useEffect } from 'react';
import { Albums } from './Albums';
import { Photos } from './Photos';
import {useDispatch, useSelector} from "react-redux"
import { loadAlbums, loadPhotos } from '../redux/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAlbums())
    dispatch(loadPhotos())
  }, [])
  
  const loadingAlbums = useSelector ((state) => state.loadingAlbums)
  const loadingPhotos = useSelector ((state) => state.loadingPhotos)

  if (loadingAlbums || loadingPhotos) {
    return (
      <div className='loading'>
        Да подожди ты ...
      </div>
    )
  }

  return (

    <div className="container">
      <Albums />
      <Photos />
    </div>
  );
}

export default App;
