import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthRequestDTO, AuthService } from '../service/auth.service';
import { JwtAuthGuard } from '../jwt-auth.guard';

@Controller('auth')
export class AuthController {

    public constructor(private readonly authService: AuthService) { }

    @Get()
    login(@Body() payload: AuthRequestDTO) {

        return this.authService.login(payload);
    }

    @UseGuards(JwtAuthGuard)
    @Get("check")
    check() {
        return "Je suis passé";
    }
}
