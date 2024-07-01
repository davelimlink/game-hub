import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string
}


const useGenres = () =>  /*useData<Genre>('/genres')*/ ({data: genres, isLoading: false, error: null})

/*
{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      const controller = new AbortController()// Cancelling handlers
setLoading(true)
      apiClient
        .get<FetchGenresResponse>("/genres", {signal: controller.signal})
        //what data we get
        //.then is called when the task completes
        .then((res) => {
          setLoading(false)
          setGenres(res.data.results)}) 
        //.catch is called when anything is wrong while processing our request
        .catch((err) => {
          if (err instanceof CanceledError) return;//If theres a cancel error we return thin block of code.
          //otherwise we return error message. (this is not a cancel error)
          setError(err.message)
          setLoading(false)
        }); //to catch an error
    }, []);

    return {genres, error, isLoading};
}
*/

export default useGenres