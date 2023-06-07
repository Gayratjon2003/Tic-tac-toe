import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
const app = express();

app.use(cors());
app.use(express.json());
const api_key = "mu628s5phwqa";
const api_secret =
  "bcp6wf8dw7kkytnw9hpmuujugttqs6h383cp8sh54j9rmztpz3nscfx76uz6h5ur";
const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post("/signup", async (req, res) => {
  try {
    const {  username } = req.body;
    const userId = uuidv4();
    const token = serverClient.createToken(userId);
    res.json({ token, userId, username });
  } catch (error) {
    res.json(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port ", port);
});
