import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient("mongodb://localhost:27017/Store", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = async (req, res, next) => {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("Store");
  return next();
};

const middleware = nextConnect();

middleware.use(database);

export default middleware;
