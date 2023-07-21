import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.headers.get("authorization")?.split(" ")[1];

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((error) => {
      console.log(error);
    }));
  if (verifiedToken) {
    return NextResponse.next();
  } else {
    throw new Error("Token is not valid or is undefied");
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/browsing/:path*", "/browsing/:path*"],
};
