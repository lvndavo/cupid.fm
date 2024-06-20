express = require("express");
cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors("http://localhost:5173"));

app.get("/hello", (req, res) => {
  res.send({ message: "hello back" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
