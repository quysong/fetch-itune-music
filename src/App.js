import React from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import configureStore from "./stores";
import IssuesListPage from './page/issues'

const configStore = configureStore();

function App() {
  return (
    <Provider store={configStore.store}>
      <PersistGate persistor={configStore.persistor}>
        <IssuesListPage></IssuesListPage>
      </PersistGate>
    </Provider>
  );
}

export default App;
