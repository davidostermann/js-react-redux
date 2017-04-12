import {getNextId} from '../selectors';

export const changeColor = (col) => ({
  type: 'CHANGE_COLOR',
  col
});

export const handleNewChange = (key, value) => ({
  type: 'CHANGE_NEW_COLOR',
  key,
  value
});

export const addHandler = () => (dispatch, getState) => {
  dispatch({
    type: 'ADD_COLOR',
    color: { ...getState().newColor, id: getNextId(getState().colors) }
  });
};
