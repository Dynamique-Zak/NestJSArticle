import { Module } from '@nestjs/common';
import { ArticleController } from './controller/article.controller';
import { ArticleService } from './service/article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.dto';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports : [
    PassportModule,
    TypeOrmModule.forFeature([Article])
  ],
  controllers: [ArticleController],
  providers: [ArticleService, 
    JwtStrategy
  ]
})
export class ArticleModule {}
