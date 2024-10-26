import { AllActions, TodoActionTypes, initialStateAlbums, initialStatePhotos } from "../../types/types";

const initialState: initialStatePhotos = {
  photos: [],
  filter: "",
  loadingPhotos: false
};

export const photos = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_PHOTOS:
      return {
        ...state,
        loadingPhotos: true,
      };

    case TodoActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        loadingPhotos: false,
      };

    case TodoActionTypes.FILTER_TEXT:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
