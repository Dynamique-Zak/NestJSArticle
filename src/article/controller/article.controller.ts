import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { Article } from '../article.dto';

@Controller('article')
export class ArticleController {

    public constructor(private readonly articleService : ArticleService) {}

    @Get()
    getAll() {
        return this.articleService.getAll();
    }

    @Get(":id")
    getById(@Param('id') id : String) {

        const idArticle = Number(id);

        return this.articleService.getById(idArticle);
    }

    @Post()
    save(@Body() article : Article) {
        return this.articleService.save(article);
    }
    
    @Delete(":id")
    deleteById(@Param('id') id : String) {

        const idArticle = Number(id);

        return this.articleService.deleteById(idArticle);
    }

}
