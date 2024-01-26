// models/Course.ts
import { Schema, models, model, Document } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  semester: Schema.Types.ObjectId[];
  views: number;
  picture: String;
  students: {
    student: Schema.Types.ObjectId[];
    grade: number;
  }[];
  instructor: Schema.Types.ObjectId;  // <- not an array because we just want one ;
  createdAt: Date;
}

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  semester: { type: Schema.Types.ObjectId },
  picture: { type: String },
  views: { type: Number, default: 0 },
  students: [
    {
      student: { type: Schema.Types.ObjectId, ref: 'User' },
      grade: { type: Number, default: 0 },
    },
  ],
  instructor: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

const Course = models.Course || model('Course', CourseSchema)

export default Course;
