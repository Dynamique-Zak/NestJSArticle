import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../article.dto';

describe('ArticleService', () => {
  let service: ArticleService;

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
      providers: [ArticleService],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Une feature get all
  describe('getAll', () => {

    // cas 01 - code 200 
    it('Devrait retourner le code 200', async () => {
      const result = await service.getAll();

      expect(result.code).toBe("200");
    })
  })

  // Une feature get all
  describe('getById', () => {

    // cas 01 - code 200 
    it('Devrait retourner le code 200', async () => {
      const result = await service.getById("6734ac55282d21d8b906eb62");

      expect(result.code).toBe("200");
    })

    // cas 02 - code 702 
    it('Devrait retourner le code 702', async () => {
      const result = await service.getById("6734ac55282d21d8b906eb65");

      expect(result.code).toBe("702");
    })
  })
});
