export interface albumData {
  userId: number;
  id: number;
  title: string;
}

export interface initialStateAlbums {
  albums: any[];
  selectedAlbumId: any;
  loadingAlbums: boolean;
}

export interface initialStatePhotos {
  photos: any[];
  filter: string;
  loadingPhotos: boolean;
}

export enum TodoActionTypes {
    FETCH_ALBUMS = 'FETCH_ABUMS',
    FETCH_ALBUMS_SUCCES = 'FETCH_ALBUMS_SUCCES',
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    SELECT_ID = 'SELECT_ID',
    FILTER_TEXT = 'FILTER_TEXT'
}

interface FetchAlbumsAction {
    type: TodoActionTypes.FETCH_ALBUMS
}

interface FetchAlbumSuccessAction {
    type: TodoActionTypes.FETCH_ALBUMS_SUCCES
    payload: any[]
}

interface FetchPhotosAction {
    type: TodoActionTypes.FETCH_PHOTOS
}

interface FetchPhotosSuccessAction {
    type: TodoActionTypes.FETCH_PHOTOS_SUCCESS,
    payload: any[]
}

interface SelectIdAction {
    type: TodoActionTypes.SELECT_ID,
    payload: number
}

interface FilterText {
    type: TodoActionTypes.FILTER_TEXT,
    payload: string
}

export type AllActions = FetchAlbumsAction | FetchAlbumSuccessAction | FetchPhotosAction | FetchPhotosSuccessAction | SelectIdAction | FilterText