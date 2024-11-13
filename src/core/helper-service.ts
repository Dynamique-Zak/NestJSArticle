import { IDAOCrud } from "./dao-crud.interface";

export class HelperService {

    static performResponse<T>(code: String, message: String, data?: T) {

        // logger
        console.log(`Code : ${code} - Message : ${message}`);

        // retourner une structure de réponse métier
        return {
            code: code,
            message: message,
            data: data
        }
    }

    static createProvider<T>(
        token: string,
        mockClass: new () => IDAOCrud<T, string>,
        mongoClass: new (...args: any[]) => IDAOCrud<T, string>,
        useMock: boolean
    ) {
        return {
            provide: token,
            useClass: useMock ? mockClass : mongoClass,
        };
    }
}