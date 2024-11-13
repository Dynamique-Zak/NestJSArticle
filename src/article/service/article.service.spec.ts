import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';
import { ArticleModule } from '../article.module';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleService,
        ArticleModule.articleDAOProvider(true)
      ],
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
      const result = await service.getById("1");

      expect(result.code).toBe("200");
    })

    // cas 02 - code 702 
    it('Devrait retourner le code 702', async () => {
      const result = await service.getById("6734ac55282d21d8b906eb65");

      expect(result.code).toBe("702");
    })
  })
});
