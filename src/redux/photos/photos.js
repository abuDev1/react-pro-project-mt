const initialState = {
  photos: [],
  filter: "",
  loadingPhotos: false
};

export const photos = (state = initialState, action) => {
  switch (action.type) {
    case "load/photos/start":
      return {
        ...state,
        loadingPhotos: true,
      };

    case "load/photos/succes":
      return {
        ...state,
        photos: action.payload,
        loadingPhotos: false,
      };

    case "filter/text":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
