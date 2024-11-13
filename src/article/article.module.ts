import { DynamicModule, Module } from '@nestjs/common';
import { ArticleController } from './controller/article.controller';
import { ArticleService } from './service/article.service';
import { ArticleDAOMock } from './dao/article.dao.mock';
import { ArticleDAOMongo } from './dao/article.dao.mongoose';
import { Article, ArticleSchema } from './article.dto';
import { MongooseModule } from '@nestjs/mongoose';
import { HelperService } from '../core/helper-service';
@Module({})
export class ArticleModule {

  static articleDAOProvider(useMock : boolean = false) {
    return HelperService.createProvider('IDAOArticle', ArticleDAOMock, ArticleDAOMongo, useMock);
  }

  static register(useMock: boolean = false): DynamicModule {
    return {
      module: ArticleModule,
      imports: [
        MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
      ],
      controllers: [ArticleController],
      providers: [
        ArticleService,
        this.articleDAOProvider(false),
      ],
      exports: ['IDAOArticle'],
    };
  }
}
