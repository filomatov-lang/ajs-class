import {
  Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../app.js';

describe('Создание персонажей с конкретными характеристиками', () => {
  test('создаёт персонажа Undead', () => {
    const result = new Undead('Igor');
    expect(result).toEqual({
      name: 'Igor',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('создаёт персонажа Zombie', () => {
    const result = new Zombie('Oleg');
    expect(result).toEqual({
      name: 'Oleg',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('создаёт персонажа Daemon', () => {
    const result = new Daemon('Pavel');
    expect(result).toEqual({
      name: 'Pavel',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('создаёт персонажа Magician', () => {
    const result = new Magician('Slavik');
    expect(result).toEqual({
      name: 'Slavik',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('создаёт персонажа Swordsman', () => {
    const result = new Swordsman('Misha');
    expect(result).toEqual({
      name: 'Misha',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('создаёт персонажа Bowman', () => {
    const result = new Bowman('Maksim');
    expect(result).toEqual({
      name: 'Maksim',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('проверка главного класса', () => {
    const result = new Character('Petr', 'Undead');
    expect(result).toEqual({
      name: 'Petr',
      type: 'Undead',
      health: 100,
      level: 1,
    });
  });

  test('возврат ошибки если имя не строка', () => {
    expect(() => new Character(123)).toThrow('Имя должно быть строкой');
  });

  test('возврат ошибки если имя слишком короткое', () => {
    expect(() => new Character('A')).toThrow('Имя должно быть от 2 до 10 букв');
  });

  test('возврат ошибки если имя слишком длинное', () => {
    expect(() => new Character('VeryLongName')).toThrow('Имя должно быть от 2 до 10 букв');
  });

  test('возврат ошибки если не верно указан персонаж', () => {
    expect(() => new Character('Sergei', 'Goblin')).toThrow('Недопустимый тип персонажа: Goblin');
  });
});
