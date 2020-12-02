export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  // Action => type, payload

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_PLAYLIST':
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    default:
      return state;
  }
};

export default reducer;
