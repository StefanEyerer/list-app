/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from '@list-app/backend/shared/data-access';
import { NextFunction, Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const clientIdWeb = process.env['GOOGLE_CLIENT_ID_WEB'];
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const client = new OAuth2Client(clientIdWeb);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientIdWeb,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const user = await UserModel.findOne({ oidcId: payload.sub });
    if (user) {
      (req as any)['userId'] = user.get('id', String);
      next();
    } else {
      const newUser = await new UserModel({
        oidcId: payload.sub,
        email: payload.email,
      }).save();
      (req as any)['userId'] = newUser.get('id', String);
      next();
    }
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}
