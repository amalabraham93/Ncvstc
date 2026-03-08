import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
    title: string;
    slug: string;
    content: string;
    authorId: mongoose.Types.ObjectId; // E.g., Admin ID
    thumbnailUrl?: string;
    isPublished: boolean;
    publishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const BlogPostSchema: Schema = new Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    thumbnailUrl: { type: String },
    isPublished: { type: Boolean, default: false },
    publishedAt: { type: Date }
}, {
    timestamps: true
});

export default mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
