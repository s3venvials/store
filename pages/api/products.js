import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const doc = await req.db.collection("products").findOne();
  console.log(doc);
  return res.json(doc);
});

export default handler;
