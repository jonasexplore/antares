import { CreateUserController } from '@modules/user/useCases/CreateUser';
import { DeleteUserController } from '@modules/user/useCases/DeleteUser';
import { FindUserController } from '@modules/user/useCases/FindUser/FindUserController';
import { ListUserController } from '@modules/user/useCases/ListUser/ListUserController';
import { UpdateUserController } from '@modules/user/useCases/UpdateUser/UpdateUserController';

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const findUserController = new FindUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();

export {
  createUserController,
  deleteUserController,
  findUserController,
  listUserController,
  updateUserController,
};
