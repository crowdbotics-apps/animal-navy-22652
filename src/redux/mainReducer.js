import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21173931Reducer from '../features/SignIn21173931/redux/reducers'
import SignIn22173930Reducer from '../features/SignIn22173930/redux/reducers'
import SignIn23173929Reducer from '../features/SignIn23173929/redux/reducers'
import SignIn24173928Reducer from '../features/SignIn24173928/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21173931: SignIn21173931Reducer,
SignIn22173930: SignIn22173930Reducer,
SignIn23173929: SignIn23173929Reducer,
SignIn24173928: SignIn24173928Reducer,

});