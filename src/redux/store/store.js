import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { loginReducer } from "../reducers/loginReducer";
import { monitoresReducers } from '../reducers/monitoresReducers';
import { monitoriasReducer } from '../reducers/monitoriaReducers';



const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  const reducers = combineReducers ({
      login: loginReducer,
      monitor:monitoresReducers,
      monitorias:monitoriasReducer
  })

  export const store = createStore(
      reducers,
      composeEnhancers(
          applyMiddleware(thunk))
  )