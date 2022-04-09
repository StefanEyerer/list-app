import { Document, Model, model, Schema } from 'mongoose';

interface ShareInterface extends Document {
  accessKey: string;
  list: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

const ShareSchema: Schema = new Schema({
  accessKey: { type: String, required: true, unique: true },
  list: { type: Schema.Types.ObjectId, ref: 'List' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const ShareModel: Model<ShareInterface> = model('Share', ShareSchema);

export { ShareModel };
