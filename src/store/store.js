import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

//If redux devtools exist then use composeEnhancer if not just normal compose
const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

export const persistor = persistStore(store);