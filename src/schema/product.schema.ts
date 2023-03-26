import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
  import {
    Document
  } from 'mongoose';
  
  export type ProductDocument = Product & Document;
  
  @Schema()
  export class Product {
    @Prop()
    name: string;
  
    @Prop()
    description: string;
  
    @Prop()
    price: number;
  
    @Prop()
    code: number;
  
    @Prop()
    stock: number;
  
    @Prop()
    thumbnail: string;
  
    @Prop()
    timestamp: string;

  }
  
  export const ProductSchema = SchemaFactory.createForClass(Product);