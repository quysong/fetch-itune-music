// import MusicList from "page/music-list";
import React from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import configureStore from "./stores";
import MusicListPage from './page/music-list'

const configStore = configureStore();

function App() {
  return (
    <Provider store={configStore.store}>
      <PersistGate persistor={configStore.persistor}>
        <MusicListPage></MusicListPage>
      </PersistGate>
    </Provider>
  );
}

export default App;
