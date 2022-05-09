import app from './app';

startUp();

async function startUp() {
  try {
    const port = process.env.PORT || 3333;
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error(`An error has occured: ${error}`);
    process.exit(1);
  }
}
