import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

export interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  create(createSuperheroDto: CreateSuperheroDto) {
    if (this.superheroes.find(hero => hero.name === createSuperheroDto.name)) {
      throw new BadRequestException('Superhero name must be unique');
    }
    this.superheroes.push(createSuperheroDto);
    return createSuperheroDto;
  }

  findAll() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}