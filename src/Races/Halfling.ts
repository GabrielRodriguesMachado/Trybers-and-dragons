import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static halfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countHalflings();
  }

  static countHalflings(): void {
    this.halfling += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this.halfling;
  }
}

export default Halfling;