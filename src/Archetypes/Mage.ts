import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private energy: EnergyType = 'mana';
  static mages = 0;

  constructor(name: string) {
    super(name);
    Mage.countMages();
  }

  static countMages(): void {
    Mage.mages += 1;
  }

  static override createdArchetypeInstances(): number {
    return this.mages;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Mage;
