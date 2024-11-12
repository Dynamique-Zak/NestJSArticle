export interface ResponseDTO<T> {
    code : String,
    message : String,
    data? : T
}