import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DataReducer from './DataReducer/Reducer';

const rootReducer = combineReducers({
  DataReducer,
});

const store = createStore(rootReducer,
  applyMiddleware(thunk));

export default store;
