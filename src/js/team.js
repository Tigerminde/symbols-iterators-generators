export default class Team {
  constructor() {
    this.members = [
      {
        name: 'Legolas', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25,
      },
      {
        name: 'Петр', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10,
      },
      {
        name: 'Pendalf', health: 50, level: 1, type: 'Magician', attack: 25, defence: 25,
      },
      {
        name: 'Кощей', health: 50, level: 1, type: 'Undead', attack: 10, defence: 40,
      },
      {
        name: 'Шон', health: 50, level: 1, type: 'Zombie', attack: 40, defence: 10,
      },
      {
        name: 'Димон', health: 50, level: 1, type: 'Daemon', attack: 20, defence: 20,
      },
    ];
  }

  [Symbol.iterator]() {
    const { members } = this;
    let current = 0;
    const last = members.length;
    return {
      next() {
        if (current < last) {
          const prop = members[current];
          current += 1;
          return {
            done: false,
            value: prop,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
