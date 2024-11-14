import {reset} from './actions';

export type PhotosDataT = PhotosDataT[];
export type PhotosT = {
    data: PhotosDataT;
    error?:Error;
    isLoading:boolean;
};

export type FetchPhotosSuccessAction = PayloadActions<FetchPhotosSuccessAction{
    page:number } undefined>;

    export type ToggleFavoritesAction =
     PayloadActions<string>;
     export type PhotosThunkDispatch= 
     ThunkDispatch<
     StoreT,undefined,
     FetchPhotosSuccessAction| PayloadActions<Error| undefined>
     >;