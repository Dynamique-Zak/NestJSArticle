import { Module } from '@nestjs/common';
import { ArticleController } from './controller/article.controller';
import { ArticleService } from './service/article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.dto';

@Module({
  imports : [
    TypeOrmModule.forFeature([Article])
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
