import { Express } from 'express';

import { bodyParseMiddleware } from './bodyParser';
import { celebrateMiddleware } from './celebrate';
import { corsMiddleware } from './cors';
import { loggingMiddleware } from './logging';
import { noCacheMiddleware } from './noCache';
import { raterLimiterMiddleware } from './rateLimiter';

function setupMiddlewares(app: Express): void {
  app.use(bodyParseMiddleware);
  app.use(corsMiddleware);
  app.use(noCacheMiddleware);
  app.use(celebrateMiddleware);
  app.use(raterLimiterMiddleware);
  app.use(loggingMiddleware);
}

export default setupMiddlewares;
