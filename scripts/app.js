import React from 'react';
import { render } from 'react-dom';

import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store,{history} from './store';

//import components
import Main from './components/Main';
import Description from './components/Description';
import Map from './components/Map';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Main}>
                <IndexRoute component={Description}/>
                <Route path='map' component={Map}/>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
