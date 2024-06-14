import { podcastTransferModel } from "../models/podcast-Transfer-Model";
import { repoPodcast } from "../repositories/podcasts-repository";


export const serviceListEpisodes = async (): Promise<podcastTransferModel> => {
    
    let responseFormat: podcastTransferModel = {
        statuscode: 0,
        body: [],
    };
    
    const data = await repoPodcast();
    
    if(data.length !== 0){
        responseFormat.statuscode = StatusCode.OK;
    } else{
        responseFormat.statuscode = StatusCode.NO_CONTENT;
    }
    responseFormat.body = data;

    return responseFormat;
};