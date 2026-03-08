import mongoose, { Schema, Document } from 'mongoose';

export enum VerificationStatus {
    PENDING = 'Pending',
    APPROVED = 'Approved',
    REJECTED = 'Rejected'
}

export interface IInstitution extends Document {
    userId: mongoose.Types.ObjectId;
    name: string;
    registrationNumber: string;
    description?: string;
    website?: string;
    contactEmail?: string;
    phone?: string;
    address?: string;
    logoUrl?: string;
    verificationStatus: VerificationStatus;
    createdAt: Date;
    updatedAt: Date;
}

const InstitutionSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    name: { type: String, required: true, trim: true },
    registrationNumber: { type: String, required: true, unique: true, trim: true },
    description: { type: String },
    website: { type: String, trim: true },
    contactEmail: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    address: { type: String },
    logoUrl: { type: String },
    verificationStatus: {
        type: String,
        enum: Object.values(VerificationStatus),
        default: VerificationStatus.PENDING
    }
}, {
    timestamps: true
});

export default mongoose.model<IInstitution>('Institution', InstitutionSchema);
