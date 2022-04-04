import { Document, Model, model, Schema } from 'mongoose';

interface SharedListInterface extends Document {
  accessKey: string;
  list: Schema.Types.ObjectId;
}

const SharedListSchema: Schema = new Schema({
  accessKey: { type: String, required: true, unique: true },
  list: { type: Schema.Types.ObjectId, ref: 'List' },
});

const SharedListModel: Model<SharedListInterface> = model(
  'SharedList',
  SharedListSchema
);

export { SharedListModel };
