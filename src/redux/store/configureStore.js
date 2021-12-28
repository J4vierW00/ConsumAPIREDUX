import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const configureStore = () => {
  const middlewares = [thunk];
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  const enhanacers = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer(), enhanacers);

  return store;
};

export default configureStore;
