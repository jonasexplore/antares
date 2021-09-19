/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpResponse } from './HttpResponse';

export interface BaseController<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}
