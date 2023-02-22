import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    player: Fighter,
    private _monsters: Array<Fighter | SimpleFighter>,
  ) {
    super(player);
  }

  private static isAlive(enemy: Fighter | SimpleFighter) {
    return enemy.lifePoints > 0;
  }
  
  private attackRound(enemys: Array<Fighter | SimpleFighter>) {
    enemys.forEach((enemy) => {
      this.player.attack(enemy);
      enemy.attack(this.player);
    });
  }

  override fight(): number {    
    let battle = true;
    while (battle) {
      this.attackRound(this._monsters);
      if (PVE.isAlive(this.player) || this._monsters.every(PVE.isAlive)) {
        battle = false;
      }
    }
    return super.fight(); 
  }
}

export default PVE;
