
const initialState = {
  albums: [],
  selectedAlbumId: null,
  loadingAlbums: false,
};

export const albums = (state = initialState, action) => {
  switch (action.type) {
    case "load/albums/start":
      return {
        ...state,
        loadingAlbums: true,
      };
    case "load/albums/success":
      return {
        ...state,
        albums: action.payload,
        loadingAlbums: false,
      };
    case "select/albumId":
      return {
        ...state,
        selectedAlbumId: action.payload,
      };

    default:
      return state;
  }
};
