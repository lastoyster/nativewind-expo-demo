import {Action,AnyAction,combineReducers} from "@reduxjs/toolkit";
import CounterReducer from "./counter";
import PhotosReducer from "./photos";

const rootReducer = combineReducers({
    count:CounterReducer,
    photos:PhotosReducer,
});

export type StoreT = ReturnType<typeof rootReducer>;>;

export type AppDispatch<A extends Action = 
AnyAction> = ThunkDispatch<StoreT,unknown,A>;

export default rootReducer;