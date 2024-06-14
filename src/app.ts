import * as http from "http";
import { getListEpisodes, getfilterEpisodes } from "./controllers/podcasts-controllers"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./Utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
        
    //querryString
    const baseUrl = request.url?.split("?")[0];

    
    //listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }


    //filtrar
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODES) {
        await getfilterEpisodes(request, response);
    }
}