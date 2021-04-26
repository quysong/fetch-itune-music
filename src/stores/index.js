import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  let devTool = null;
  if(window) {
    if(window.__REDUX_DEVTOOLS_EXTENSION__) {
      devTool = window.__REDUX_DEVTOOLS_EXTENSION__();
    }
  }

  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      devTool,
    )
  )
  sagaMiddleware.run(rootSaga)
  return store
}

const stores = () => {
  const store = configureStore();
  let persistor = persistStore(store)
  return {
    store, persistor
  }
}

export default stores;