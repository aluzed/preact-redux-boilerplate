/**
 * App Reducer
 */
const CHANGE_PAGE = 'APP/CHANGEPAGE';

const initialState = {
  location: 'home'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE : 
      console.log('Current page : ' + action.payload.page);
      return {
        ...state, 
        location: action.payload.page
      };
    
    default : 
      return state;
  }
};

export const activateMenu = page => {
  return dispatch => {
    dispatch({
      type: CHANGE_PAGE,
      payload: {
        page
      }
    });
  };
};