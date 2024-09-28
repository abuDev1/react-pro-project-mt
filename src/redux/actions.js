export const loadAlbums = () => {
    return (dispatch) => {
        dispatch({
            type: 'load/albums/start'
        })

        fetch ('https://jsonplaceholder.typicode.com/albums')
        .then ((response) => response.json())
        .then ((data) => {
            dispatch ({
                type: 'load/albums/success',
                payload: data
            })
        })
    }
}

export const loadPhotos = () => {
    return (dispatch) => {
        dispatch({
            type: 'load/photos/start'
        })

        fetch ('https://jsonplaceholder.typicode.com/photos')
        .then ((response) => response.json())
        .then ((data) => {
            dispatch ({
                type: 'load/photos/succes',
                payload: data
            })
        })
    }
}

export const selectId = (albumId) => {
  return  {
    type: 'select/albumId',
    payload: albumId
  }
}

export const setChangedFilterText = (text) => {
    return {
        type: 'filter/text',
        payload: text
    }
}

