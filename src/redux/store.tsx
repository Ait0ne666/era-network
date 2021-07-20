import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import {rootReducer, RootState } from './rootReducer';
import {RootAction} from './types';

const middlewares = [thunk]


const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: [''],
  }
  
const persistedReducer = persistReducer<RootState, RootAction>(persistConfig, rootReducer)

export const store: Store<RootState, RootAction> = createStore(persistedReducer, applyMiddleware(...middlewares) )

export const persistor = persistStore(store)












