import { IApiResult } from "./ApiResult";


export interface IGameApiClient {
    GetAsync(id: string): Promise<IApiResult<Game>>;
    ListAsync(id: string): Promise<IApiResult<Game>>;
    PostAsync(): Promise<IApiResult<Game>>;
}

interface Game {
    id: string,
    objectKeyId: string,
    processed: boolean,
    gameDate: string,
    gCGameId: string,
    awayTeamName: string,
    homeTeamName: string,
}


