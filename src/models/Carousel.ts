import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICarousel extends Document {
  title?: string;
  image: string;
  order: number;
  active: boolean;
}

const CarouselSchema: Schema = new Schema({
  title: { type: String },
  image: { type: String, required: true },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
});

const Carousel: Model<ICarousel> = mongoose.models.Carousel || mongoose.model<ICarousel>('Carousel', CarouselSchema);

export default Carousel;
