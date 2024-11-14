import {SagaIterator} from 'redux-saga';
import {call,put,select,takeLatest} from 'redux-saga/effects';

import {PhotoT} from '../../domain/photos';

import {fetchPhotosError,fetchPhotosStart,fetchPhotosEnd} from '../../domain/fetchPhotosSuccess',
initalState, PhotosT, } from '../slices/photos';

export const fetchPhotos= async()=>{
    page:Number;
    ): Promise<ReadOnlyArray<PhotoT>> =>{
        const response = await fetch(
         `https://picsum/photos/v2/list?page=${page}&limit=100`;
        );
        return response.json();
};

function * fetchData({
    payload,
}:ReturnType <typeof fetchPhotosStart>) : SagaIterator<void> {
    try{
        const page = payload?.page?? 9;
        const photosState:PhotosT = yield select((state)=> state.photos);
        if(photosState.data === initialState.data){
            console.log({photosState,initalState});
            const photos = yield.call(fetchPhotos,page);
        } else {
            yield put(fetchPhotosError('No data fetch triggered'));
        }
    catch(error){
        yield put(fetchPhotosError(error));
    }
 }

 export function * fetchSaga(){
    yield takeLatest(fetchPhotosStart.type,fetchData);
 }