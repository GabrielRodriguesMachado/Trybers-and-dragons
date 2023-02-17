import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private playerOne: Fighter, private playerTwo: Fighter) {
    super(playerOne);
  }

  override fight(): number {
    const battle = true;
    while (battle) {
      this.playerOne.attack(this.playerTwo);
      this.playerTwo.attack(this.playerOne);
      if (this.playerTwo.lifePoints === -1) break;
      if (this.playerOne.lifePoints === -1) break;
    }
    return super.fight();
  }
}

export default PVP;
