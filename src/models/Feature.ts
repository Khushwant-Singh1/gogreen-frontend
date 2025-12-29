import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFeature extends Document {
  title: string;
  subtitle?: string;
  icon?: string;
}

const FeatureSchema: Schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  icon: { type: String }
});

const Feature: Model<IFeature> = mongoose.models.Feature || mongoose.model<IFeature>('Feature', FeatureSchema);

export default Feature;
