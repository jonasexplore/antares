import { HttpRequest } from '@core/.';
import { Request, Response } from 'express';

class ExpressAdapter {
  static create =
    (CtxController: { (request: HttpRequest) }) =>
    async (request: Request, response: Response): Promise<Response> => {
      const requestData: HttpRequest = {
        body: request.body,
        params: request.params,
        query: request.query,
      };

      const httpResponse = await CtxController(requestData);

      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        return response.status(httpResponse.statusCode).json(httpResponse.body);
      }

      return response
        .status(httpResponse.statusCode)
        .json({ ...httpResponse.body });
    };
}
export { ExpressAdapter };
