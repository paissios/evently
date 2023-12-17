import { Schema, Document, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description: string;
  location: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number;
  isFree: boolean;
  url: string;
  category: { _id: string; name: string };
  organizer: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: Number },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "category" },
  organizer: { type: Schema.Types.ObjectId, ref: "user" },
});

const Event = models.Event || model("event", EventSchema);

export default Event;
