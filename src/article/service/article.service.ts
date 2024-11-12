import { Injectable } from '@nestjs/common';
import { ResponseDTO } from 'src/core/response.dto';
import { Article } from '../article.dto';
import { HelperService } from 'src/core/helper-service';

@Injectable()
export class ArticleService {

    // Articles en mémoire
    DB_ARTICLES : Article[]  = [
        { id: 1, title : "Velocipastor", content : "Un film stylé"},
        { id: 2, title : "Incroyable Bulk", content : "Un film stylé 2"},
        { id: 3, title : "Sharknado", content : "Un film stylé 3"},
    ];

    getAll() : ResponseDTO<Article[]>{

        return HelperService.performResponse("200", "La liste des articles a été récupérés avec succès", this.DB_ARTICLES);
    }

    getById(id: number) : ResponseDTO<Article> {

        const foundArticle = this.DB_ARTICLES.find((article) => article.id === id);

        // Si je trouve pas (si undefined ou null)
        if (!foundArticle){
            return HelperService.performResponse("702", `Impossible de récupérer un article avec l'UID ${id}`, null);
        }

        return HelperService.performResponse("200", "Article récupéré avec succès", foundArticle);
    }

    save(article: Article) : ResponseDTO<Article> {
        // Creation ou Edition ?
        // ==========================================================
        // Update
        // ==========================================================
        if (article.id) {
            let foundArticle = this.DB_ARTICLES.find((value) => value.id === article.id);

            if (foundArticle){

                // est-ce que le titre existe deja sauf le miens
                const foundArticleTitle = this.DB_ARTICLES.find((value) => value.id != article.id && value.title === article.title);
                if (foundArticleTitle) {
                    return HelperService.performResponse("701 ", "Impossible de modifier un article avec un titre déjà existant", article);
                }

                foundArticle.title = article.title;
                foundArticle.content = article.content;

                return HelperService.performResponse("200", "Article modifié avec succès", foundArticle);
            }
        }

        // ==========================================================
        // Creation
        // ==========================================================
        // est-ce que le titre existe deja
        const foundArticleTitle = this.DB_ARTICLES.find((value) => value.title === article.title);
        if (foundArticleTitle) {
            return HelperService.performResponse("701 ", "Impossible d'ajouter un article avec un titre déjà existant", article);
        }

        // Success

        article.id = this.DB_ARTICLES.length + 1;
        this.DB_ARTICLES.push(article);

        return HelperService.performResponse("200", "Article ajouté avec succès", article);
    }
    
    deleteById(id: number) : ResponseDTO<Article> {
        
        // Essayer de trovuer l'index d'un tableau selon un critère de recherche
        const foundArticleIndex = this.DB_ARTICLES.findIndex((article) => article.id === id);

        // Si je trouve pas (si undefined ou null)
        if (foundArticleIndex < 0){
            return HelperService.performResponse("702", `Impossible de supprimer un article dont l'UID n'existe pas`, null);
        }

        // Stocker en mémoire avant suppression et supprimer l'article
        const articleBeforeDelete = this.DB_ARTICLES[foundArticleIndex];

        this.DB_ARTICLES.splice(foundArticleIndex, 1);
        
        return HelperService.performResponse("200", `L'article ${id} a été supprimé avec succès`, articleBeforeDelete);
    }
}
