export class HelperService {

    static performResponse<T>(code :String, message : String, data?: T) {

        // logger
        console.log(`Code : ${code} - Message : ${message}`);

        // retourner une structure de réponse métier
        return {
            code : code,
            message: message,
            data : data
        }
    }
}