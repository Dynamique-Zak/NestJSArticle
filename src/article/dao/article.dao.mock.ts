import { Article } from "../article.dto";
import * as fs from 'fs';
import * as path from 'path';
import { IDAOArticle } from "./article.dao.interface";

export class ArticleDAOMock implements IDAOArticle {

  private articles: Article[] = [];

  constructor() {
    this.articles = this.loadArticlesFromJson();
  }

  private loadArticlesFromJson(): any[] {
    const filePath = path.join(__dirname, '../../../data/articles.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }
  
  async create(article: Article): Promise<Article> {
    this.articles.push(article);
    return article;
  }

  async findById(id: string): Promise<Article | null> {
    return this.articles.find(article => article.id === id) || null;
  }

  async findAll(): Promise<Article[]> {
    return this.articles;
  }

  async update(id: string, article: Article): Promise<Article | null> {
    const index = this.articles.findIndex(a => a.id === id);
    if (index === -1) return null;

    this.articles[index] = article;
    return this.articles[index];
  }

  async delete(id: string): Promise<boolean> {
    const initialLength = this.articles.length;
    this.articles = this.articles.filter(article => article.id !== id);
    return this.articles.length < initialLength;
  }

  async save(article: Article): Promise<Article> {
    const existingArticle = await this.findById(article.id);
    if (existingArticle) {
      return await this.update(article.id, article);
    } else {
      return await this.create(article);
    }
  }

  async findByTitle(title: string): Promise<Article | null> {
    return this.articles.find(article => article.title === title) || null;
  }

  async findByTitleAndNotId(title: string, excludeId: string): Promise<Article | null> {
    return this.articles.find(article => article.title === title && article.id !== excludeId) || null;
  }
}