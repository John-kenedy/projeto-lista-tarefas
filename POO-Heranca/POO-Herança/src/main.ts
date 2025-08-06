// Este arquivo é o ponto de entrada da aplicação. Ele contém a lógica principal que utiliza os conceitos de Programação Orientada a Objetos (POO) e herança.

class Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log(`${this.name} faz um som.`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} diz: Au Au!`);
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} diz: Miau!`);
    }
}

const dog = new Dog('Rex');
const cat = new Cat('Mimi');

dog.makeSound();
cat.makeSound();