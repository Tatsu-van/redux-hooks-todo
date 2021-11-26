import { createStore } from "redux";
import todosReducer from "../reducers/todos.reducer";
import { persistStore, persisitReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistConfig = {
  key: "root",
  storage: storage,
};

const pxReducer = persisitReducer(persistConfig, todosReducer);

export const store = createStore(todosReducer, devTools);
