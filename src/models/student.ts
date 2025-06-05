import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  fullName: string;
  email: string;
  age: number;
  class: string;
}

const studentSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  class: { type: String, required: true }
}, {
  timestamps: true
});

export const StudentModel = mongoose.model<IStudent>("Student", studentSchema);
export { IStudent };
