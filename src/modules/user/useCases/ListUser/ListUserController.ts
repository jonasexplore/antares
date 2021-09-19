import { container } from 'tsyringe';

import { BaseController } from '@core/infra/BaseController';
import { HttpRequest } from '@core/infra/HttpRequest';
import { HttpResponse, ok } from '@core/infra/HttpResponse';

import { ListUser } from '.';

class ListUserController implements BaseController {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const listUser = container.resolve(ListUser);

    const users = await listUser.execute(request.query);

    return ok(users);
  }
}

export { ListUserController };
