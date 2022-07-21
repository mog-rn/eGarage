import * as jwt from 'jsonwebtoken';

export const APP_SECRET = 'THis is a secret';

export interface AuthTokenPayload {
  user_id: number;
}

export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    throw new Error('No token provided');
  }
  return jwt.verify(token, APP_SECRET) as AuthTokenPayload;
}
