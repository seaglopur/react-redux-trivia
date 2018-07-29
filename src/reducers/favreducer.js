const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FAV':
          return state.concat([action.datatosave]);
        case 'DELETE_FAV':
          return state.filter((fav)=>fav.id !== action.id);
        default:
          return state;
      }
}
export default postReducer;