import { container } from 'tsyringe';

import { BaseController } from '@core/infra/BaseController';
import { HttpRequest } from '@core/infra/HttpRequest';
import { HttpResponse, removed } from '@core/infra/HttpResponse';

import { DeleteUser } from '.';

class DeleteUserController implements BaseController {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const deleteUser = container.resolve(DeleteUser);

    await deleteUser.execute(request.params.id);

    return removed();
  }
}

export { DeleteUserController };
