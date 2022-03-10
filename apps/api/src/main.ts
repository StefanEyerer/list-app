import * as mongoose from 'mongoose';
import app from './app';

const port = process.env.PORT || 3333;
const databaseUrl = process.env.NX_DATABASE_URL;

startUp();

async function startUp(): Promise<void> {
  try {
    await mongoose.connect(databaseUrl);
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
  } catch (error) {
    console.error(`An error has occured: ${error}`);
    process.exit(1);
  }
}
