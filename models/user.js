import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true],
    },
    email: {
        type: String,
        required: [true],
        unique: true,
    },
    subject: {
        type: String,
        required: [true],
    },
    message: {
        type: String,
        required: [true],
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema);