import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisodes } from "../services/list-episodes-services";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../Utils/content-type";
import { podcastTransferModel } from "../models/podcast-Transfer-Model";


export const getListEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content: podcastTransferModel = await serviceListEpisodes()
    response.writeHead(content.statuscode, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content.body));
};

export const getfilterEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content: podcastTransferModel = await serviceFilterEpisodes(request.url);
    
    response.writeHead(content.statuscode, { "Content-Type": ContentType.JSON});
    response.end(JSON.stringify(content.body));
};