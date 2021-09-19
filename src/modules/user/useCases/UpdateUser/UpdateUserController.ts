import { container } from 'tsyringe';

import { BaseController } from '@core/infra/BaseController';
import { HttpRequest } from '@core/infra/HttpRequest';
import { HttpResponse, noContent } from '@core/infra/HttpResponse';

import { UpdateUser } from '.';

class UpdateUserController implements BaseController {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const updateUser = container.resolve(UpdateUser);

    await updateUser.execute({
      id: request.params.id,
      ...request.body,
    });

    return noContent();
  }
}

export { UpdateUserController };
