import { Schema, Prop, SchemaFactory, } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';

@Schema()
export class Article extends Document {

    // Typage explicite pour _id
    _id: Types.ObjectId;

    id: string;

    @Prop()
    title: string;

    @Prop()
    content: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

// Ajout de la propriété virtuelle pour mapper id à _id
ArticleSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Appliquer des transformations globales pour inclure id et supprimer _id
ArticleSchema.set('toJSON', {
    virtuals: true, // Inclut les propriétés virtuelles dans la sortie JSON
    versionKey: false, // Supprime le champ __v
    transform: (doc, ret) => {
        delete ret._id; // Supprime _id pour éviter la redondance
    },
});