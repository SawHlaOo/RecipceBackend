

import dotenv from 'dotenv';

dotenv.config();

export const env={
      databaseUrl: process.env.DATABASEURL ?? "postgresql://username:password@localhost:5432/database_name?schema=public",
      jwtSecret  : process.env.JWTSECRET   ?? "Jwt_dev_123",
      corsOrigins :( process.env.CORS_ORIGIN ?? 'http://localhost:5173').split(',').map((origin)=>origin.trim()).filter(Boolean)

}



