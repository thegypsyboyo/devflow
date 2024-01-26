// models/Semester.ts
import { Schema, models, model, Document } from 'mongoose';
import { ICourse } from './courses.models';

export interface ISemester extends Document {
  name: string;
  startDate: Date;
  endDate: Date;
  courses: Schema.Types.ObjectId[] | ICourse[];
}

const SemesterSchema = new Schema({
  name: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

const Semester = models.Semester || model<ISemester>('Semester', SemesterSchema);

export default Semester;
