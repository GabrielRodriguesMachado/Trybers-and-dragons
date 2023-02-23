# Trybers-and-dragons
Este é um projeto de jogo de RPG em texto, onde os jogadores podem criar personagens, explorar um mundo fantástico e enfrentar desafios e inimigos. O jogo é baseado em classes em JavaScript e feito totalmente em TypeScript.

O projeto foi feito durante o curso de desenvolvimento web full stack da trybe e abaixo existem explicações sobre algumas classes criadas nesse projeto que é o primeiro em que utilizo POO.

## Classe Character
A classe Character representa um personagem jogável em um jogo de batalha. Ela possui diversos atributos que definem as características do personagem, incluindo raça, classe, pontos de vida, força, defesa, destreza e energia.

A classe possui um construtor que aceita um parâmetro obrigatório para o nome do personagem. Ao instanciar a classe, a raça do personagem é definida como um objeto da classe Race, que por sua vez recebe o nome do personagem e sua destreza como parâmetros. A classe Archetype é usada para definir a classe do personagem, e a energia do personagem é definida aleatoriamente.

A classe Character implementa a interface Fighter, que define os métodos necessários para que o personagem possa atacar e receber danos. A classe também implementa o método levelUp(), que aumenta os pontos de vida, força, defesa, destreza e energia do personagem.

A classe possui diversos métodos getters para acessar os valores dos atributos. O método receiveDamage(attackPoints: number) permite que o personagem receba danos de um ataque inimigo. Se a diferença entre os pontos de ataque do inimigo e a defesa do personagem for maior que zero, o personagem perde pontos de vida. Se a vida do personagem chegar a zero ou menos, ele é considerado morto.

O método attack(enemy: SimpleFighter) permite que o personagem ataque um inimigo com a força definida pelo seu atributo de força.

No geral, a classe Character é responsável por representar um personagem jogável em um jogo de batalha, com atributos que podem ser configurados e métodos para receber danos, atacar inimigos e evoluir ao longo do jogo.

## Classe Monster
A classe Monster representa um monstro em um jogo de batalha. Ela implementa a interface SimpleFighter, que define métodos para receber dano e atacar outros personagens.

A classe tem dois atributos privados: _lifePoints e _strength, que representam a quantidade de pontos de vida e força do monstro, respectivamente. O construtor da classe aceita dois parâmetros opcionais que permitem configurar esses valores.

A classe possui também os métodos get lifePoints() e get strength() para acessar os valores dos atributos _lifePoints e _strength, respectivamente.

A classe implementa os métodos receiveDamage(attackPoints: number) e attack(enemy: SimpleFighter), que permitem que o monstro receba dano de um ataque e ataque outro personagem, respectivamente.

O método receiveDamage(attackPoints: number) subtrai os pontos de ataque do inimigo dos pontos de vida do monstro. Se o resultado for menor que 1, a vida do monstro é definida como -1, indicando que ele está morto. Esse método retorna a quantidade de pontos de vida restantes.

O método attack(enemy: SimpleFighter) usa o método receiveDamage do inimigo para infligir dano com a força do monstro.
