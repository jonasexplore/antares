import { container } from 'tsyringe';

import { BaseController } from '@core/infra/BaseController';
import { HttpRequest } from '@core/infra/HttpRequest';
import { HttpResponse, ok } from '@core/infra/HttpResponse';

import { FindUser } from '.';

class FindUserController implements BaseController {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const findUser = container.resolve(FindUser);

    const user = await findUser.execute(request.params.id);

    return ok(user);
  }
}

export { FindUserController };
