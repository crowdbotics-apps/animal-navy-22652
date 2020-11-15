import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn23173929Reducer from '../features/SignIn23173929/redux/reducers'
import SignIn24173928Reducer from '../features/SignIn24173928/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn23173929: SignIn23173929Reducer,
SignIn24173928: SignIn24173928Reducer,

});