import { Document, Model, model, Schema } from 'mongoose';

interface UserInterface extends Document {
  oidcId: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  oidcId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});

const UserModel: Model<UserInterface> = model('User', UserSchema);

export { UserModel };
