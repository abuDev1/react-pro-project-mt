import { loadPhotos } from "./actions"

const initialState = {
    albums: [],
    photos: [],

    filter: "",
    selectedAlbumId: null,

    loadingAlbums: false,
    loadingPhotos: false
}


export const reducer = (state = initialState, action) => {
    switch (action.type){
        
        case 'load/albums/start':
            return {
                ...state,
                loadingAlbums: true
            }
        case 'load/albums/success':
            return {
                ...state,
                albums: action.payload,
                loadingAlbums: false
            }

        case 'load/photos/start':
            return {
                ...state,
                loadingPhotos: true
            }

        case 'load/photos/succes':
            return {
                ...state,
                photos: action.payload,
                loadingPhotos: false
            }

        case 'select/albumId':
            return {
                ...state,
                selectedAlbumId: action.payload
            }

        case 'filter/text':
            return {
                ...state,
                filter: action.payload
            }


        default:
            return state

    }
}