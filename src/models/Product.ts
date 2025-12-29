import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILink {
  name: string;
  url: string;
}

export interface IProduct extends Document {
  title: string;
  category: string;
  subCategory?: string;
  image?: string;
  links: ILink[];
  order: number;
  active: boolean;
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String },
  image: { type: String },
  links: [{
    name: { type: String, required: true },
    url: { type: String, required: true }
  }],
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
});

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
