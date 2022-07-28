import type { NextApiRequest, NextApiResponse } from "next";
import { SignJWT, type JWTPayload } from "jose";

type Data = {
  token: string;
};

const secret = process.env.JWT_TOKEN_SECRET || "";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const task = req.query.task || "";
  const iat = Date.now();
  const exp = Date.now() + 30000;
  const token = await new SignJWT({ task })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(iat)
    .setExpirationTime(exp)
    .sign(new TextEncoder().encode(secret));
  res.status(200).json({ token });
}
