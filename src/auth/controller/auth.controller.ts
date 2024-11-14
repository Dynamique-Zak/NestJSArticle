import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthRequestDTO, AuthService } from '../service/auth.service';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { HelperService } from 'src/core/helper-service';

@Controller('auth')
export class AuthController {

    public constructor(private readonly authService: AuthService) { }

    @Post()
    login(@Body() payload: AuthRequestDTO) {

        return this.authService.login(payload);
    }

    @UseGuards(JwtAuthGuard)
    @Get("check")
    check() {
        return HelperService.performResponse("200", "Je suis passé", null);
    }
}
