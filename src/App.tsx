import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import Layout from "./components/Layout/layout";
import "video-react/dist/video-react.css"; 

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Layout/>
      </PersistGate>
    </Provider>
  );
}

export default App;
