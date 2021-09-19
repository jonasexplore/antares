import { container } from 'tsyringe';

import { BaseController } from '@core/infra/BaseController';
import { HttpRequest } from '@core/infra/HttpRequest';
import { HttpResponse, ok } from '@core/infra/HttpResponse';

import { ListCity } from '.';

class ListCityController implements BaseController {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const listCity = container.resolve(ListCity);

    const cities = await listCity.execute(request.query);

    return ok(cities);
  }
}

export { ListCityController };
