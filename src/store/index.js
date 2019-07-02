import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import todoSaga from './sagas';
import reducer from './reducer';

/* thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
*/

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSaga);

export default store;