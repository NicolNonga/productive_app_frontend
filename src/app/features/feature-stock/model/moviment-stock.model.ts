export  interface MovimentStock {
    part : string
    supplier : string
    total_stock: string
}
export interface ResponseMomentStock {
    data : MovimentStock []
}
