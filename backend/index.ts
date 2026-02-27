import app from "./src/app";
import { connectDB } from "./src/config/database";

const PORT = process.env.PORT || 3001

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
  });
});
