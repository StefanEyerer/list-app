import * as mongoose from 'mongoose';
import app from './app';

const port = process.env.PORT || 3333;
const databaseUrl = process.env.NX_DATABASE_URL;

startUp();

async function startUp() {
  try {
    await mongoose.connect(databaseUrl);
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error(`An error has occured: ${error}`);
    process.exit(1);
  }
}
