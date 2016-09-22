import { createStore,combineReducers,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promisesMiddleware from './middlewares/promise';
import * as reducers from './reducers';


const reducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(promisesMiddleware, logger())(createStore);

const store = createStoreWithMiddleware(reducer, {
  issues: [],
  counters: 0,
  repository: 0,
  details:[]
});

export default store;
