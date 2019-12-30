import * as types from '../actions/actionTypes';
import { Map } from 'immutable';

const initialState = Map({
  darkmode: false
})

export default function darkmode(state = initialState, action){
  switch(action.type){
    case types.DARK_MODE_TOGGLE:
      return state.set('darkmode', action.isDarkmode);
    default:
      return state;
  }
}