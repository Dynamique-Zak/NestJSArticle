import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article/article.dto';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ArticleModule, CoreModule, 
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:27017/db_tp',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true,
      entities : [Article],
    }), AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
