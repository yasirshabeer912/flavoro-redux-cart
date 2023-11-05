import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage, // Use the storage method you prefer (e.g., local storage)
  // Add other configuration options if needed, such as whitelist, blacklist, etc.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools()
);

const persistor = persistStore(store);

export { store, persistor };
