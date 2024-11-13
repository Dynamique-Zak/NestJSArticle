import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm"

@Entity({ name : "articles"})
export class Article {

    @ObjectIdColumn()
    _id : ObjectId;
    
    @Column()
    title: String;

    @Column()
    content : String;
}