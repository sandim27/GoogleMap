import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import logger from 'redux-logger';
import promisesMiddleware from './middlewares/promise';

import { syncHistoryWithStore,routerReducer } from 'react-router-redux';
import {browserHistory} from 'react-router';

//import reducers
import * as reducers from './reducers';

const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const reducer = combineReducers(Object.assign({}, reducers,{routing:routerReducer}));

const createStoreWithMiddleware = applyMiddleware(promisesMiddleware, logger())(createStore);

const store = createStoreWithMiddleware(reducer,{
  countries: [],
  details:[],
  showInfo:false,

}, enchancers);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
