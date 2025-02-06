import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
  });

  it('should return superheroes sorted by humility score', () => {
    controller.create({ name: 'Hero1', superpower: 'Flying', humilityScore: 7 });
    controller.create({ name: 'Hero2', superpower: 'Speed', humilityScore: 9 });
    const heroes = controller.findAll();
    expect(heroes[0].name).toBe('Hero2');
  });
});
