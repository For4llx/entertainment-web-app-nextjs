import { jwtVerify, SignJWT } from "jose";

interface IUserJwtPayload {
  jti: string;
  iat: number;
}

export function getJwtSecretKey() {
  const secret = process.env.TOKEN_KEY;

  if (!secret || secret.length === 0) {
    throw new Error("The environnement variable TOKEN_KEY is not set");
  }

  return secret;
}

export async function verifyAuth(token: string) {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );

    return verified.payload as IUserJwtPayload;
  } catch (error) {
    throw new Error("Your token has experied");
  }
}
