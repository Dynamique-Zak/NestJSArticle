import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HelperService } from 'src/core/helper-service';
import { ResponseDTO } from 'src/core/response.dto';

export class AuthRequestDTO {
    email : String;
    password : String;
}

@Injectable()
export class AuthService {

    public constructor (private readonly jwtService : JwtService) {}
    
    login(payload: AuthRequestDTO) : ResponseDTO<String> {

        // Si couple email / password correcte -> token generé donc connecté
        if (payload.email == "francis@gmail.com" && payload.password == "123456") {

            const token = this.jwtService.sign({ email : "teletubies@gmail.com"});

            return HelperService.performResponse("206", "Authentifié(e) avec succès !", token);
        }

        // sinon erreur
        return HelperService.performResponse("756", "Couple email/mot de passe incorrect", null);
    }
}
