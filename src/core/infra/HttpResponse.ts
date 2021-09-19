/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpStatusCodes } from '@shared/errors';

export type HttpResponse = {
  statusCode: number;
  body: any;
};

export const ok = <T>(dto?: T): HttpResponse => ({
  statusCode: HttpStatusCodes.OK,
  body: dto,
});

export const removed = (): HttpResponse => ({
  statusCode: HttpStatusCodes.NO_CONTENT,
  body: undefined,
});

export const created = <T>(dto?: T): HttpResponse => ({
  statusCode: HttpStatusCodes.CREATED,
  body: dto,
});
