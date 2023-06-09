import crypto from 'crypto';

const SECRET = 'secret';

export const shaPassword = (salt: string, password: string): string => crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');

export const random = () => crypto.randomBytes(128).toString('base64');