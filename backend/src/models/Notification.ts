import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    message: string;
    isRead: boolean;
    link?: string;
    createdAt: Date;
    updatedAt: Date;
}

const NotificationSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    link: { type: String }
}, {
    timestamps: true
});

export default mongoose.model<INotification>('Notification', NotificationSchema);
