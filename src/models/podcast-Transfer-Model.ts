import { PodcastModel } from "./podcast-model";

export interface podcastTransferModel{
    statuscode: number;
    body: PodcastModel[];
}