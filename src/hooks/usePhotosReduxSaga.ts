import {useEffect} from 'react';
import {useDispatch, useSelector} from ''react-redux';
import {AppDispatch,StoreT} from './store';
import {fetchPhotosStart,
FetchPhotsStartAction,
PhotosT,
} from '../store/slices/photos';

const usePhotosReduxSaga= (page: number) => {
    const dispatch = useDispatch<AppDispatch>FetchPhotsStartAction();

    useEffect(()=> {
        dispatch(fetchPhotosStart({page}));
    },[page,dispatch]);

    const photos = useSelector< StoreT,PhotosT>((state) =>
     state.photos);
     return photos;
};
export default usePhotosReduxSaga;