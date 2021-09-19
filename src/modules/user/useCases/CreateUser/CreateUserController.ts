import { container } from 'tsyringe';

import { BaseController } from '@core/infra/BaseController';
import { HttpRequest } from '@core/infra/HttpRequest';
import { created, HttpResponse } from '@core/infra/HttpResponse';

import { CreateUser } from '.';

class CreateUserController implements BaseController {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const createUser = container.resolve(CreateUser);

    const user = await createUser.execute(request.body);

    return created(user);
  }
}

export { CreateUserController };
