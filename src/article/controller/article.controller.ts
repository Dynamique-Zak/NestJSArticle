import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { Article } from '../article.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('article')
export class ArticleController {

    public constructor(private readonly articleService : ArticleService) {}

    @Get()
    getAll() {
        return this.articleService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get("all-secu")
    getAllSecure() {
        return this.articleService.getAll();
    }

    @Get(":id")
    getById(@Param('id') id : string) {
        return this.articleService.getById(id);
    }

    @Post()
    save(@Body() article : Article) {
        return this.articleService.save(article);
    }
    
    @Delete(":id")
    deleteById(@Param('id') id : string) {
        return this.articleService.deleteById(id);
    }

}
