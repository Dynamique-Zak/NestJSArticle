import { IDAOCrud } from "../../core/dao-crud.interface";
import { Article } from "../article.dto";

// Définition de l'interface IDAOArticle
export interface IDAOArticle extends IDAOCrud<Article, string> {
    /**
     * Trouve un article par son titre.
     * @param title - Le titre de l'article
     * @returns Une promesse contenant l'article ou null si non trouvé
     */
    findByTitle(title: String): Promise<Article | null>;

    /**
     * Trouve un article par son titre, en excluant un ID spécifique.
     * @param title - Le titre de l'article
     * @param excludeId - L'ID à exclure des résultats
     * @returns Une promesse contenant l'article ou null si non trouvé
     */
    findByTitleAndNotId(title: String, excludeId: string): Promise<Article | null>;
}