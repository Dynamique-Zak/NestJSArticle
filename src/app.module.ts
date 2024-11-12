import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ArticleModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
