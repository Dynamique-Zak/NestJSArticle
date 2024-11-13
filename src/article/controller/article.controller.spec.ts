import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../article.dto';
import { ArticleService } from '../service/article.service';

describe('ArticleController', () => {
  let controller: ArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports : [
        TypeOrmModule.forRoot({
          type: 'mongodb',
          url: 'mongodb://127.0.0.1:27017/db_tp',
          useNewUrlParser: true,
          useUnifiedTopology: true,
          synchronize: true,
          entities : [Article],
        }),
        TypeOrmModule.forFeature([Article])
      ],
      controllers: [ArticleController],
      providers: [ArticleService]
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
