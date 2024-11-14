import React,{useEffect,Dispatch} from '@react';
import {StyleSheet,View} from 'react-native';
import {ThunkResult} from '../store/actionCreators';
import {storeT} from '../store/reducer';

import PhotoList from '../components/Pictorio/PhotoList';
import {ItemT} from '../components/Pictorio/ItemT';

const HomeScreen = ()=> {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPhotos());
    },[]);

    const data = useSelector<storeT, ReadOnlyArray<ItemT>> (
        (state) => state.photos
        );
        
        return(
    <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
    <PhotoList data={data}/>
    </View> 
    </View>

    return(
        <View style={styles.container}>
    <View style={{alignItems: 'center'}}>
        <PhotoList data={data}/>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'fff',
    },
});

export default HomeScreen;