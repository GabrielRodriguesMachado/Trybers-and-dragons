import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private energy: EnergyType = 'stamina';
  static warriors = 0;

  constructor(name: string) {
    super(name);
    Warrior.countWarriors();
  }

  static countWarriors(): void {
    Warrior.warriors += 1;
  }

  static override createdArchetypeInstances(): number {
    return this.warriors;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Warrior;