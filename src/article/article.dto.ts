import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm"

@Entity({ name : "articles"})
export class Article {

    @ObjectIdColumn()
    _id : ObjectId;
    
    @Column()
    title: String;

    @Column()
    content : String;
}