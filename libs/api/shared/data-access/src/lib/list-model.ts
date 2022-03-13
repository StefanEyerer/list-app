import { Document, Model, model, Schema } from 'mongoose';

interface ListInterface extends Document {
  name: string;
  description?: string;
  items: Array<Record<string, string>>;
  user: Schema.Types.ObjectId;
}

const ListSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  items: { type: Array, default: [] },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const ListModel: Model<ListInterface> = model('List', ListSchema);

export { ListModel };
