import type { NextApiRequest, NextApiResponse } from "next";
import { SignJWT } from "jose";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ message: "Data updated Successfully" });
}
