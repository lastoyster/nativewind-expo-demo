import React,{useContext, useEffect,useState} from  'react';
import {PhotoT} from './domain/photos';
import useDataApi from  '../hooks/useDataApi';

type PhotosContextT = {
    fetchedData: ReadOnlyArray<PhotoT>;
    isLoading: boolean;
    isError: boolean;
    fetchPhotos: boolean;
    photos:PhotosT[];
    toggleFavorite: boolean;
};


export const PhotosContext = React.createContext<PhotosContext>();
    fetchedData:[],
    isLoading: false,
    isError: false,
    fetchPhotos: false,
    photos: [],
    toggleFavorite: (_id) = null,
});

export const PhotosContextProvider :React.FC=({children})=>{
    const defaultPage = 9;

    const[{data,isLoading,isError}, doFetch] = useDataApi(
        [],
        `https://picsum.photos/v2/list?page=${defaultPage}&limi=100`
    );

    const [photost,setPhotos] = useState<Array<PhotoT>>([]);

    useEffect(()=
        setPhotos(data.map(photo) =>))
    })

    const contextValue = ({
        fetchedData:data,
        isLoading:isLoading,
        isError:isError,
        fetchPhotos:fetchPhotos,
        photos:photos,
        toggleFavorite:(_id)=> null,
        });
    

export const PhotosContextProvider:React.FC=({children})=>{
    const defaultPage = 9;

    const [{data,isLoading,isError}, doFetch] = useDataApi
    [],
    `https://picsum.photos/v2/list?page=${defaultPage}&limit=100`
    );
    const [photost,setPhotos] = useState<Array<PhotoT>>([]);

    useEffect(()=>{
        setPhotos(data.map({...photo,isFavorite:false}));=>{
                isFavorite: false,
            },[data]);
        
    const contextValue = {
        fetchedData:data,
        isLoading:isLoading,
        isError:isError,
        photos:photos,
        toggleFavorite:(id:string)=>{
            setPhotos((prevPhotos)=>{
                if(prevPhotos.length>0){
                    return prevPhotos.map((photo)=>
                    photo.id === id
                ? {...photo,isFavorite:!photo.isFavorite}
                :photo
                );
            }
        return [];
        });
    },
};

return (
    <PhotosContext.Provider value={contextValue}>
    {children}
 </PhotosContext.Provider>
);
};

export const usePhotosContext = () =>{
 useContext(PhotosContext);
 return photoState;
};

