import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number
  name: string
  slug:string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
  metacritic: number
  //here you cant type a Platform[], instead, its an array of objects where each object has a
  //property called platform of type Platform.
  //always check the documentation od the API for correct use of inferfaces
}

/*
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
*/

const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])
/*
{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      const controller = new AbortController()// Cancelling handlers
setLoading(true)
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        //what data we get
        //.then is called when the task completes
        .then((res) => {
          setLoading(false)
          setGames(res.data.results)}) 
        //.catch is called when anything is wrong while processing our request
        .catch((err) => {
          if (err instanceof CanceledError) return;//If theres a cancel error we return thin block of code.
          //otherwise we return error message. (this is not a cancel error)
          setError(err.message)
          setLoading(false)
        }); //to catch an error
    }, []);

    return {games, error, isLoading};
}
*/

export default useGames