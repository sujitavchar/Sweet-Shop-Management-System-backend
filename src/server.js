import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 4000;


try {

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
  console.error('Server failed to start:', err);
}