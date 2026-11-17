export { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie};

class Character {
  constructor(name, type) {
    if (typeof name !== "string") {
      throw new Error("Имя должно быть строкой");
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть от 2 до 10 букв");
    }

    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!types.includes(type)) {
      throw new Error(`Недопустимый тип персонажа: ${type}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

class Bowman extends Character {
  constructor(name, type = "Bowman") {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name, type = "Swordsman") {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name, type = "Magician") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name, type = "Undead") {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name, type = "Zombie") {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name, type = "Daemon") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
