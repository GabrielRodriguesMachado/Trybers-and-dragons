import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static dwarfs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countDwarfs();
  }

  static countDwarfs(): void {
    this.dwarfs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this.dwarfs;
  }
}

export default Dwarf;
