import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import React from "react";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const controller = new AbortController()// Cancelling handlers

      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        //what data we get
        //.then is called when the task completes
        .then((res) => setGames(res.data.results)) 
        //.catch is called when anything is wrong while processing our request
        .catch((err) => {
          if (err instanceof CanceledError) return;//If theres a cancel error we return thin block of code.
          //otherwise we return error message. (this is not a cancel error)
          setError(err.message)}); //to catch an error
    }, []);

    return {games, error};
}

export default useGames