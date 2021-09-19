import { CreateCityController } from '@modules/city/useCases/CreateCity';
import { ListCityController } from '@modules/city/useCases/ListCity';

const createCityController = new CreateCityController();
const listCityController = new ListCityController();

export { createCityController, listCityController };
