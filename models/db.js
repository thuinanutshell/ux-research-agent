const { type } = require('express/lib/response');
const mongoose = require('mongoose');

// connect to db
mongoose.connect(process.env.MONGO_UI)
.then(() => {})
.catch((err) => {console.log(error)})

const Schema = mongoose.Schema;

const uxSchema = new Schema({
    id : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status : {
        enum: ['Email Sent', 'Interview Scheduled', 'Follow-up', 'No Response', 'Not Started'],
        type: String,
        default: 'Not Started'
    },
    interview_date : {
        type: Date,
        required: true
    },
    interviewee_email: {
        type: String,
        required: true
    },
    message : {
        type: String,
        required: true
    }
}, {timestamps: true});

const uxModel = mongoose.model('uxModel', uxSchema);

module.exports = uxModel;