import { AllActions, TodoActionTypes, initialStateAlbums } from "../../types/types";

const initialState: initialStateAlbums = {
  albums: [],
  selectedAlbumId: null,
  loadingAlbums: false,
};

export const albums = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_ALBUMS:
      return {
        ...state,
        loadingAlbums: true,
      };
    case TodoActionTypes.FETCH_ALBUMS_SUCCES:
      return {
        ...state,
        albums: action.payload,
        loadingAlbums: false,
      };
    case TodoActionTypes.SELECT_ID:
      return {
        ...state,
        selectedAlbumId: action.payload,
      };

    default:
      return state;
  }
};
