import mongoose, { Schema, Document } from 'mongoose';
import { create } from 'sortablejs';
import { createDocumentRegistry } from 'typescript';

interface ISurvey extends Document {
  question: string;
  options: string[];
  votes: number[];
  creationDate: Date;
  createdBy: mongoose.Types.ObjectId;
}

const surveySchema: Schema = new Schema({
  question: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true,
  }],
  votes: [{
    type: Number,
    default: 0,
  }],
  creationDate: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Survey = mongoose.model<ISurvey>('Survey', surveySchema);

export default Survey;