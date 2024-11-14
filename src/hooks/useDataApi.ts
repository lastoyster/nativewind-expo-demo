import {useState,useEffect} from "../../../../"

const useDataApi = (initialData:ReadOnlyArray<PhotoT>,initialUrl:string) => {
    const [data,setData] = useState<ReadOnlyArray<PhotoT>>(initialData);
    const [url,setUrl] = useState<string>(initialUrl);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>  {
            setIsError(false);
            setIsLoading(true)

        try{
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        }catch(error){
            setIsError(true);
        }
    setIsLoading(false);
        };

        fetchData();
    },[url]);

    return [{data,isError,isLoading},setUrl] as const;


    export default useDataApi;