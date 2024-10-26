import { Dispatch } from "redux"
import { AllActions, TodoActionTypes } from "../../types/types"

export const loadAlbums = () => {
    return (dispatch: Dispatch<AllActions>) => {
        dispatch({
            type: TodoActionTypes.FETCH_ALBUMS
        })

        fetch ('https://jsonplaceholder.typicode.com/albums')
        .then ((response) => response.json())
        .then ((data) => {
            dispatch ({
                type: TodoActionTypes.FETCH_ALBUMS_SUCCES,
                payload: data
            })
        })
    }
}

export const loadPhotos = () => {
    return (dispatch: Dispatch<AllActions>) => {
        dispatch({
            type: TodoActionTypes.FETCH_PHOTOS
        })

        fetch ('https://jsonplaceholder.typicode.com/photos')
        .then ((response) => response.json())
        .then ((data) => {
            dispatch ({
                type: TodoActionTypes.FETCH_PHOTOS_SUCCESS,
                payload: data
            })
        })
    }
}

export const selectId = (albumId: number) => {
  return  {
    type: TodoActionTypes.SELECT_ID,
    payload: albumId
  }
}

export const setChangedFilterText = (text: string) => {
    return {
        type: TodoActionTypes.FILTER_TEXT,
        payload: text
    }
}

