import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository"
import { podcastTransferModel } from "../models/podcast-Transfer-Model";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<podcastTransferModel> => {

    let responseFormat: podcastTransferModel = {
        statuscode: 0,
        body: [],
    };
    
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    if(data.length !== 0){
        responseFormat.statuscode = StatusCode.OK;
    } else{
        responseFormat.statuscode = StatusCode.NO_CONTENT;
    }
    responseFormat.body = data;

    return responseFormat;
}