import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static elfs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.countElfs();
  }

  static countElfs(): void {
    this.elfs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this.elfs;
  }
}

export default Elf;