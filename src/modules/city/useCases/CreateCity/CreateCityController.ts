import { container } from 'tsyringe';

import { BaseController } from '@core/infra/BaseController';
import { HttpRequest } from '@core/infra/HttpRequest';
import { created, HttpResponse } from '@core/infra/HttpResponse';

import { CreateCity } from '.';

class CreateCityController implements BaseController {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const createCity = container.resolve(CreateCity);

    const city = await createCity.execute(request.body);

    return created(city);
  }
}

export { CreateCityController };
