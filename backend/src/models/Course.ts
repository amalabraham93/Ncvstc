import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
    institutionId: mongoose.Types.ObjectId;
    title: string;
    slug: string;
    description: string;
    categoryId: mongoose.Types.ObjectId;
    durationMonths: number;
    fees: number;
    requirements?: string;
    isActive: boolean;
    thumbnailUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

const CourseSchema: Schema = new Schema({
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', required: true },
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    description: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    durationMonths: { type: Number, required: true },
    fees: { type: Number, required: true },
    requirements: { type: String },
    isActive: { type: Boolean, default: true },
    thumbnailUrl: { type: String }
}, {
    timestamps: true
});

export default mongoose.model<ICourse>('Course', CourseSchema);
