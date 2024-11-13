import { Test, TestingModule } from '@nestjs/testing';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { Article } from 'src/article/article.dto';
import { ArticleModule } from 'src/article/article.module';
import { ArticleService } from 'src/article/service/article.service';
import { ResponseDTO } from 'src/core/response.dto';

const feature = loadFeature('./test/cucumber/example.feature');

defineFeature(feature, test => {

  let articleService: ArticleService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleService,
        ArticleModule.articleDAOProvider(true)
      ],
    }).compile();

    articleService = module.get<ArticleService>(ArticleService);
  });

  test('Get all articles', ({ given, when, then }) => {
    let response: ResponseDTO<Article[]>;

    given('the service is initialized', () => {
    });

    when(
      /^I call the "(.*)" method$/,
      async (methodName: string) => {
        if (methodName === 'getAll') {
          response = await articleService.getAll();
        }
      },
    );

    then(/^the response should have code "(.*)"$/, (expectedCode: string) => {
      expect(response.code).toBe(expectedCode);
    });

    then(/^the response should have a message "(.*)"$/, (expectedMessage: string) => {
      expect(response.message).toBe(expectedMessage);
    });

    then(/^the response data should have (\d+) entry$/, (expectedCount: string) => {
      expect(response.data.length).toBe(Number(expectedCount));
    });


  });
});