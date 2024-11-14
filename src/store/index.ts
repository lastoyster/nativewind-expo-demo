import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from ''redux-saga';
import {
    persistStore,
persistReducer,
FLUSH,
REHYDRATE,
PURGE,
REGISTER,
PAUSE,} from 'redux-persist';
import AsyncStore from '@react-native-async-storage/async-store';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key:'root',
    version:1,
    storage:AsyncStorage,
    whiteList:['photos','count'],
    blackList:[],
};

const persistReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer:persistReducer,
    middleware:getDefaultMiddleware({
        getDefaultMiddleware({
            serializedCheck: {
            ignoredActions:[FLUSH,REHYDRATE,PURGE,REGISTER,PAUSE],
            }
        }).concat([sagaMiddleware]),
        devTools:true,
    });

    sagaMiddleware.run(rootSaga);

    export const persistor = persistStore(store); 
    export default store;