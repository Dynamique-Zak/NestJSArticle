import { Injectable } from "@nestjs/common";
import { Article } from "../article.dto";
import { Model } from "mongoose";
import { IDAOArticle } from "./article.dao.interface";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ArticleDAOMongo implements IDAOArticle {

  constructor(@InjectModel(Article.name) private readonly articleModel: Model<Article>,) { }

  async findById(id: string): Promise<Article | null> {
    return await this.articleModel.findById(id).exec();
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.articleModel.findByIdAndDelete(id).exec();
    return result !== null;
  }

  async save(item: Article): Promise<Article> {
    const article = new this.articleModel(item);
    await article.save();
    return item;
  }

  async findByTitle(title: string): Promise<Article | null> {
    return await this.articleModel.findOne({ name: title }).exec();
  }

  async findByTitleAndNotId(title: string, excludeId: string): Promise<Article | null> {
    return await this.articleModel.findOne({ name: title, _id: { $ne: excludeId } }).exec();
  }
}