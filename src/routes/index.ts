import { Router } from 'express';
import { v4 } from 'uuid';

const routes = Router();

interface Hero {
  id: string;
  name: string;
  atribute: string;
}

const heroes: Hero[] = [];

routes.get('/', (request, response) => {
  return response.json(heroes);
});

routes.post('/createhero', (request, response) => {
  const { name, atribute } = request.body;

  const hero = {
    id: v4(),
    name,
    atribute,
  };

  heroes.push(hero);

  return response.json(hero);
});

export default routes;
