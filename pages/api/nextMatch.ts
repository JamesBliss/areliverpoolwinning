import { NextApiResponse } from "next";

//
import nextMatch from "@/api/nextMatch";

//
const handler = async (_, res: NextApiResponse) => {
  const match = await nextMatch();

  // Return value
  return res.status(200).json({ match });
};

export default handler;
