export interface ResponseLogs {
    data: logInterface[]
}

export interface logInterface {
    id: string,
    user: string
    app_nome: string
    started: string,
    ended: string,
    stay_open_during: number,
    ip:string
    mac_adress: string
}
export interface paginationInterface{
    total: number
    perPage: number
    lastPage:number,
    firstPage: number
}
export class LogModel {
  
     meta! : paginationInterface
}