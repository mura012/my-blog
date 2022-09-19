import { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.getList({
    endpoint: "blog",
    queries: { q: req.body.q },
  });
  res.status(200).json(data);
};

export default handler;
