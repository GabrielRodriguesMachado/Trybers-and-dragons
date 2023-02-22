import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Jogador 1');
for (let i = 0; i < 50; i += 1) {
  player1.levelUp();
}

const player2 = new Character('Jogador 2');
const player3 = new Character('Jogador 3');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle: Battle) => {
    const result = battle.fight();
    console.log(result);
  });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
