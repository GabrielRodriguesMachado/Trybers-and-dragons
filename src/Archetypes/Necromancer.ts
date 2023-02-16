import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private energy: EnergyType = 'mana';
  static necromancers = 0;

  constructor(name: string) {
    super(name);
    Necromancer.countNecromancers();
  }

  static countNecromancers(): void {
    Necromancer.necromancers += 1;
  }

  static override createdArchetypeInstances(): number {
    return this.necromancers;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Necromancer;
