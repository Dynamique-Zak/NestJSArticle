import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './service/auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports : [
    PassportModule,
    JwtModule.register({
      secret : 'CHOCOLATINE',
      signOptions : { expiresIn : '1h'}
    })
  ],
  controllers: [AuthController],
  providers : [
   
  AuthService]
})
export class AuthModule {}
