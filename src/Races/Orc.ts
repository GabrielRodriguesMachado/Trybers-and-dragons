import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static orcs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.countOrcs();
  }

  static countOrcs(): void {
    this.orcs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this.orcs;
  }
}

export default Orc;