import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import store from "store2";

const secret = process.env.JWT_TOKEN_SECRET || "";
const ERROR_PATH = "/404";

async function verify(token: string, secret: string): Promise<any> {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  return payload;
}

const isTokenExpired = (tokenDate: number) => {
    console.log(tokenDate, Date.now(), tokenDate < Date.now())
  return tokenDate < Date.now();
};

const getTokenRegex = (path: string) => {
  return ["/api/token/create", "/api/token/update"].includes(path);
};

const isInvalidTask = (task: string, path: string) => {
  const subStr = path.split("/api/tasks/")[1];
  console.log("==========", subStr, task, subStr === task)
  return subStr === task;
};

export default async function middleware(
  request: NextRequest,
  response: NextResponse
) {
  const token = request.headers.get("authorization");
  const { nextUrl } = request;
  if (
    nextUrl.pathname === "/" ||
    nextUrl.pathname.includes("/_next/static") ||
    getTokenRegex(nextUrl.pathname)
  ) {
    return NextResponse.next();
  }
  if (!token) {
    nextUrl.pathname = ERROR_PATH;
    return NextResponse.rewrite(nextUrl);
  } else {
    if (
      token &&
      ["/create-task", "/update-contact"].includes(nextUrl.pathname)
    ) {
      try {
        await verify(token, secret);
        return NextResponse.next();
      } catch (e) {
        console.error("Error validating token", e);
        nextUrl.pathname = ERROR_PATH;
        throw new Error("Invalid Token expired");
      }
    } else if (
      token &&
      ["/api/tasks/create", "/api/tasks/update"].includes(nextUrl.pathname)
    ) {
      const { task, exp } = await verify(token, secret);
      if (isTokenExpired(exp)) {
        throw new Error("Token expired");
      }
      if (!isInvalidTask(task, nextUrl.pathname)) {
        throw new Error("Is invalid task");
      }
      return NextResponse.next();
    }
    console.error(`Error url path didn't matched`);
    nextUrl.pathname = ERROR_PATH;
    return NextResponse.rewrite(nextUrl);
  }
}
