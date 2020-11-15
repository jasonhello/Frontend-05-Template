class Person {
  constructor(name) {
    this.name = name
  }
}

class Dog {
  constructor(name) {
    this.name = name
  }
  bite(person) {
    console.log(`${this.name}  bite ${person.name}`)
  }
}

const jack = new Person('Jack')
const wangwang = new Dog('wangwang')
wangwang.bite(jack)


class Person {
  constructor(name, intact = 100) {
    this.name = name
    this.intact = intact
  }
  hurt(damage) {
    this.intact -= damage
    return this.intact
  }
}

class Dog {
  constructor(name) {
    this.name = name
    this.damage = 10
  }
  bite() {
    return this.damage
  }
}

const jack = new Person('Jack')
const wangwang = new Dog('wangwang')
jack.hurt(wangwang.bite())