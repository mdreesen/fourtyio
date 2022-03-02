import type { SessionData } from 'express-session';

declare module 'express-session' {
  interface SessionData {
    username: string;
  }
}
