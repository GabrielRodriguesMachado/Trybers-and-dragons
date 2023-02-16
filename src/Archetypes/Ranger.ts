import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private energy: EnergyType = 'stamina';
  static rangers = 0;

  constructor(name: string) {
    super(name);
    Ranger.countRangers();
  }

  static countRangers(): void {
    Ranger.rangers += 1;
  }

  static override createdArchetypeInstances(): number {
    return this.rangers;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Ranger;
